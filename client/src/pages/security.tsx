import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Server, Fingerprint, AlertCircle } from "lucide-react";

export default function Security() {
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
            <Shield className="w-16 h-16 text-crypto-blue mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your security is our top priority. Learn about the comprehensive measures we take to protect your investments and data.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Last updated: March 15, 2025
            </div>
          </motion.div>
        </div>
      </div>

      {/* Security Overview */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-crypto-blue/20 to-crypto-green/20 border border-crypto-blue/30 rounded-2xl p-8 text-center"
          >
            <Shield className="w-12 h-12 text-crypto-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">🔒 Bank-Grade Security Standards</h2>
            <p className="text-gray-300 text-lg">
              TradePilot employs institutional-grade security measures to protect your investments, personal data, and trading activities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Security Content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 space-y-8"
          >
            {/* Data Encryption */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-crypto-blue" />
                1. Data Encryption & Protection
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All data is protected using advanced encryption protocols both in transit and at rest.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-crypto-blue/10 border border-crypto-blue/30 rounded-lg p-4">
                  <h4 className="text-crypto-blue font-semibold mb-3">Data in Transit</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• TLS 1.3 encryption for all communications</li>
                    <li>• Perfect Forward Secrecy (PFS)</li>
                    <li>• Certificate pinning for mobile apps</li>
                    <li>• End-to-end encryption for sensitive data</li>
                  </ul>
                </div>
                <div className="bg-crypto-green/10 border border-crypto-green/30 rounded-lg p-4">
                  <h4 className="text-crypto-green font-semibold mb-3">Data at Rest</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• AES-256 encryption for stored data</li>
                    <li>• Hardware Security Modules (HSMs)</li>
                    <li>• Encrypted database storage</li>
                    <li>• Secure key management system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Access Controls */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Fingerprint className="w-6 h-6 text-crypto-green" />
                2. Access Control & Authentication
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Multi-layered authentication and authorization systems protect your account from unauthorized access.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">User Authentication</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-crypto-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Lock className="w-6 h-6 text-crypto-blue" />
                      </div>
                      <h5 className="text-white text-sm font-medium mb-1">2FA Required</h5>
                      <p className="text-gray-400 text-xs">Time-based authentication codes</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-crypto-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Fingerprint className="w-6 h-6 text-crypto-green" />
                      </div>
                      <h5 className="text-white text-sm font-medium mb-1">Biometric Login</h5>
                      <p className="text-gray-400 text-xs">Fingerprint & Face ID support</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Eye className="w-6 h-6 text-yellow-500" />
                      </div>
                      <h5 className="text-white text-sm font-medium mb-1">Behavioral Analysis</h5>
                      <p className="text-gray-400 text-xs">Anomaly detection system</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Infrastructure Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Server className="w-6 h-6 text-purple-500" />
                3. Infrastructure & Network Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our platform runs on secure, monitored infrastructure with multiple layers of protection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Cloud Security</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• SOC 2 Type II compliant data centers</li>
                    <li>• 24/7 physical security monitoring</li>
                    <li>• Redundant power and cooling systems</li>
                    <li>• Geographic distribution and backups</li>
                    <li>• Regular penetration testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Network Protection</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Advanced DDoS protection</li>
                    <li>• Web Application Firewall (WAF)</li>
                    <li>• Intrusion Detection Systems (IDS)</li>
                    <li>• Network segmentation and isolation</li>
                    <li>• Real-time threat monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Asset Protection */}
            <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Asset Protection</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your cryptocurrency investments are protected through multiple security layers and custody solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Cold Storage</h4>
                  <p className="text-gray-300 text-sm">95% of funds stored offline in air-gapped hardware wallets</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Multi-Signature</h4>
                  <p className="text-gray-300 text-sm">Multi-sig wallets requiring multiple authorized signatures</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Insurance Coverage</h4>
                  <p className="text-gray-300 text-sm">Digital asset insurance for qualified custody holdings</p>
                </div>
              </div>
            </section>

            {/* Monitoring & Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-green-500" />
                5. 24/7 Monitoring & Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Continuous monitoring and compliance with international security standards.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Security Monitoring</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Real-time transaction monitoring</li>
                      <li>• Automated fraud detection</li>
                      <li>• Suspicious activity alerts</li>
                      <li>• 24/7 Security Operations Center</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Compliance Standards</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• ISO 27001 certification</li>
                      <li>• SOC 2 Type II compliance</li>
                      <li>• GDPR and data protection compliance</li>
                      <li>• Regular third-party audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Incident Response */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-500" />
                6. Incident Response & Recovery
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Comprehensive procedures for handling security incidents and ensuring business continuity.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-crypto-blue mb-2">&lt; 5min</div>
                    <div className="text-gray-300 text-sm">Incident Detection</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-crypto-green mb-2">&lt; 15min</div>
                    <div className="text-gray-300 text-sm">Response Activation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-500 mb-2">&lt; 30min</div>
                    <div className="text-gray-300 text-sm">User Notification</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500 mb-2">99.9%</div>
                    <div className="text-gray-300 text-sm">Recovery Success</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. User Security Best Practices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Help us keep your account secure by following these recommendations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-crypto-blue font-semibold mb-3">✅ Do This:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Use a unique, strong password</li>
                    <li>• Enable 2FA authentication</li>
                    <li>• Keep your devices updated</li>
                    <li>• Log out from shared devices</li>
                    <li>• Monitor your account regularly</li>
                    <li>• Report suspicious activity immediately</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold mb-3">❌ Never Do This:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Share your login credentials</li>
                    <li>• Access your account on public WiFi</li>
                    <li>• Click suspicious links in emails</li>
                    <li>• Install unverified software</li>
                    <li>• Ignore security notifications</li>
                    <li>• Use the same password elsewhere</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Certifications */}
            <section className="bg-crypto-blue/10 border border-crypto-blue/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-crypto-blue mb-4">Security Certifications & Audits</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <Shield className="w-8 h-8 text-crypto-blue mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">ISO 27001</div>
                  <div className="text-gray-400 text-xs">Certified</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <Lock className="w-8 h-8 text-crypto-green mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">SOC 2 Type II</div>
                  <div className="text-gray-400 text-xs">Compliant</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <Eye className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">GDPR</div>
                  <div className="text-gray-400 text-xs">Compliant</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <Server className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">Pen Testing</div>
                  <div className="text-gray-400 text-xs">Quarterly</div>
                </div>
              </div>
            </section>

            {/* Contact Security Team */}
            <section className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Security Concerns?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you discover a security vulnerability or have concerns about the security of our platform, 
                please contact our security team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setLocation("/contact")}
                  className="crypto-gradient text-white px-6 py-3 hover:opacity-90 transition-all duration-300"
                  data-testid="button-contact-security"
                >
                  Report Security Issue
                </Button>
                <div className="text-gray-400 text-sm flex items-center">
                  <span>Email: security@tradepilot.com</span>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}