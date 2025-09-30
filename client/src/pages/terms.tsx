import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Shield, AlertTriangle } from "lucide-react";

export default function Terms() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                className="text-white hover:bg-slate-800 transition-colors"
                data-testid="button-back-home"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-16"
          >
            <FileText className="w-16 h-16 text-crypto-blue mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using TradePilot services.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Last updated: March 15, 2025
            </div>
          </motion.div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 space-y-8"
          >
            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-crypto-blue" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing and using TradePilot services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TradePilot provides automated cryptocurrency trading services utilizing artificial intelligence and arbitrage strategies. 
                Our platform offers investment plans that aim to generate returns through algorithmic trading across various cryptocurrency exchanges.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Automated trading algorithms and AI-powered strategies</li>
                <li>Real-time arbitrage opportunity detection</li>
                <li>Portfolio management and investment tracking</li>
                <li>24/7 trading execution across global exchanges</li>
              </ul>
            </section>

            {/* Risk Disclaimer */}
            <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                3. Risk Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>IMPORTANT:</strong> Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. 
                Past performance does not guarantee future results.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All investments carry risk of partial or total loss</li>
                <li>Cryptocurrency markets are highly volatile and unpredictable</li>
                <li>No guarantee of profits or protection against losses</li>
                <li>You should only invest what you can afford to lose</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a user of TradePilot services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and truthful information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any illegal or unauthorized purpose</li>
                <li>Not attempt to manipulate or interfere with the platform</li>
              </ul>
            </section>

            {/* Account Management */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Account Management</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Account creation requires verification of identity and compliance with KYC (Know Your Customer) procedures. 
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </section>

            {/* Fees and Payments */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Fees and Payments</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TradePilot charges fees for its services as outlined in our fee schedule. All fees are clearly disclosed 
                before investment. We reserve the right to modify fees with 30 days advance notice.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, features, and functionality of TradePilot are owned by us and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TradePilot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any changes via email 
                or platform notification. Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us through our support system 
                or email us at legal@tradepilot.com.
              </p>
            </section>

            {/* Agreement */}
            <section className="border-t border-slate-700 pt-8">
              <p className="text-gray-300 leading-relaxed">
                By using TradePilot services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}