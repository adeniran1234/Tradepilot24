import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Eye, Database, Shield, UserCheck } from "lucide-react";

export default function Privacy() {
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
            <Lock className="w-16 h-16 text-crypto-blue mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Last updated: March 15, 2025
            </div>
          </motion.div>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 space-y-8"
          >
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-crypto-blue" />
                1. Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, make investments, 
                or contact us for support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Personal Information</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Identity verification documents</li>
                    <li>• Financial information for investments</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Usage Information</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Platform usage and activity logs</li>
                    <li>• Trading history and preferences</li>
                    <li>• Device and browser information</li>
                    <li>• IP addresses and location data</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-crypto-green" />
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Process and manage your investments and transactions</li>
                <li>Verify your identity and comply with regulatory requirements</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important updates about your account and investments</li>
                <li>Improve our platform security and prevent fraud</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="bg-crypto-blue/10 border border-crypto-blue/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-crypto-blue mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                3. Data Protection & Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Technical Safeguards</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Secure data transmission (SSL/TLS)</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Access Controls</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Role-based access permissions</li>
                    <li>• Employee background checks</li>
                    <li>• Limited data access policies</li>
                    <li>• Secure data centers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> When you explicitly authorize information sharing</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-crypto-green" />
                5. Your Privacy Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Access & Correction</h4>
                    <p className="text-gray-300 text-sm">Request access to and correction of your personal data</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Data Portability</h4>
                    <p className="text-gray-300 text-sm">Request a copy of your data in a portable format</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Deletion</h4>
                    <p className="text-gray-300 text-sm">Request deletion of your personal data (subject to legal requirements)</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Opt-out</h4>
                    <p className="text-gray-300 text-sm">Unsubscribe from marketing communications</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies & Tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for platform functionality and security</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. 
                Specific retention periods vary based on the type of information and applicable regulations.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes via email 
                or platform notification at least 30 days before the effective date.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Email:</strong> privacy@tradepilot.com</li>
                <li><strong>Address:</strong> TradePilot Privacy Office</li>
                <li><strong>Support:</strong> Use our in-platform support system</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}