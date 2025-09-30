import { storage } from "../storage";

export interface CallMeBotSettings {
  enabled: boolean;
  admin_whatsapp_number: string;
  api_key: string;
  notifications: {
    new_registration: boolean;
    user_login: boolean;
    support_ticket: boolean;
    withdrawal_request: boolean;
    system_activity: boolean;
    new_review: boolean;
  };
}

export class CallMeBotService {
  static async getSettings(): Promise<CallMeBotSettings> {
    try {
      const settings = await storage.getSystemSettings();
      const defaultSettings: CallMeBotSettings = {
        enabled: false,
        admin_whatsapp_number: '',
        api_key: '',
        notifications: {
          new_registration: true,
          user_login: false,
          support_ticket: true,
          withdrawal_request: true,
          system_activity: true,
          new_review: true,
        }
      };

      if (!settings.callmebot) {
        return defaultSettings;
      }

      // Deep merge existing settings with defaults to ensure all fields are present
      return {
        enabled: settings.callmebot.enabled ?? defaultSettings.enabled,
        admin_whatsapp_number: settings.callmebot.admin_whatsapp_number ?? defaultSettings.admin_whatsapp_number,
        api_key: settings.callmebot.api_key ?? defaultSettings.api_key,
        notifications: {
          new_registration: settings.callmebot.notifications?.new_registration ?? defaultSettings.notifications.new_registration,
          user_login: settings.callmebot.notifications?.user_login ?? defaultSettings.notifications.user_login,
          support_ticket: settings.callmebot.notifications?.support_ticket ?? defaultSettings.notifications.support_ticket,
          withdrawal_request: settings.callmebot.notifications?.withdrawal_request ?? defaultSettings.notifications.withdrawal_request,
          system_activity: settings.callmebot.notifications?.system_activity ?? defaultSettings.notifications.system_activity,
          new_review: settings.callmebot.notifications?.new_review ?? defaultSettings.notifications.new_review,
        }
      };
    } catch (error) {
      console.error('Failed to get CallMeBot settings:', error);
      return {
        enabled: false,
        admin_whatsapp_number: '',
        api_key: '',
        notifications: {
          new_registration: true,
          user_login: false,
          support_ticket: true,
          withdrawal_request: true,
          system_activity: true,
          new_review: true,
        }
      };
    }
  }

  static async updateSettings(settings: CallMeBotSettings): Promise<void> {
    try {
      // Use proper deep merge through the storage interface
      await storage.updateSystemSettings({
        callmebot: settings
      });
    } catch (error) {
      console.error('Failed to update CallMeBot settings:', error);
      throw new Error('Failed to update CallMeBot settings');
    }
  }

  static async sendNotification(message: string, notificationType: keyof CallMeBotSettings['notifications']): Promise<boolean> {
    try {
      const settings = await this.getSettings();
      
      if (!settings.enabled || !settings.notifications[notificationType]) {
        return false; // Notification disabled
      }

      if (!settings.admin_whatsapp_number || !settings.api_key) {
        console.warn('CallMeBot not configured properly');
        return false;
      }

      // CallMeBot WhatsApp API endpoint
      const url = 'https://api.callmebot.com/whatsapp.php';
      const params = new URLSearchParams({
        phone: settings.admin_whatsapp_number,
        text: message,
        apikey: settings.api_key
      });

      // Add 10 second timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'User-Agent': 'TradePilot-Notifications/1.0'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        console.log(`CallMeBot notification sent successfully: ${notificationType}`);
        return true;
      } else {
        console.error(`CallMeBot API error: ${response.status} ${response.statusText}`);
        return false;
      }
    } catch (error) {
      console.error('Failed to send CallMeBot notification:', error);
      return false;
    }
  }

  static async sendNewRegistrationNotification(username: string, country: string): Promise<boolean> {
    const message = `🎉 *New User Registration*\n\n` +
                   `👤 Username: ${username}\n` +
                   `🌍 Country: ${country}\n` +
                   `📅 Time: ${new Date().toLocaleString()}\n\n` +
                   `Welcome to TradePilot! 🚀`;
    
    return await this.sendNotification(message, 'new_registration');
  }

  static async sendUserLoginNotification(username: string, country: string): Promise<boolean> {
    const message = `🔐 *User Login*\n\n` +
                   `👤 Username: ${username}\n` +
                   `🌍 Country: ${country}\n` +
                   `📅 Time: ${new Date().toLocaleString()}`;
    
    return await this.sendNotification(message, 'user_login');
  }

  static async sendSupportTicketNotification(username: string, subject: string, priority: string): Promise<boolean> {
    const message = `🎫 *New Support Ticket*\n\n` +
                   `👤 User: ${username}\n` +
                   `📝 Subject: ${subject}\n` +
                   `⚡ Priority: ${priority}\n` +
                   `📅 Time: ${new Date().toLocaleString()}\n\n` +
                   `Please check the admin panel for details.`;
    
    return await this.sendNotification(message, 'support_ticket');
  }

  static async sendWithdrawalRequestNotification(username: string, amount: number, cryptocurrency: string, walletAddress: string): Promise<boolean> {
    const message = `💰 *New Withdrawal Request*\n\n` +
                   `👤 User: ${username}\n` +
                   `💵 Amount: $${amount.toLocaleString()}\n` +
                   `💎 Currency: ${cryptocurrency}\n` +
                   `🏦 Wallet: ${walletAddress.substring(0, 8)}...${walletAddress.substring(walletAddress.length - 8)}\n` +
                   `📅 Time: ${new Date().toLocaleString()}\n\n` +
                   `Please review in the admin panel.`;
    
    return await this.sendNotification(message, 'withdrawal_request');
  }

  static async sendSystemActivityNotification(activity: string, details?: string): Promise<boolean> {
    const message = `⚙️ *System Activity*\n\n` +
                   `🔔 Activity: ${activity}\n` +
                   `${details ? `📋 Details: ${details}\n` : ''}` +
                   `📅 Time: ${new Date().toLocaleString()}`;
    
    return await this.sendNotification(message, 'system_activity');
  }

  static async sendNewReviewNotification(name: string, email: string, rating: number, reviewText: string): Promise<boolean> {
    const starRating = "⭐".repeat(rating) + "☆".repeat(5 - rating);
    const message = `⭐ *New Customer Review*\n\n` +
                   `👤 Name: ${name}\n` +
                   `📧 Email: ${email}\n` +
                   `${starRating} (${rating}/5)\n\n` +
                   `💬 Review: ${reviewText.length > 100 ? reviewText.substring(0, 100) + '...' : reviewText}\n\n` +
                   `📅 Time: ${new Date().toLocaleString()}\n\n` +
                   `Check the admin panel to reply! 🚀`;
    
    return await this.sendNotification(message, 'new_review');
  }
}