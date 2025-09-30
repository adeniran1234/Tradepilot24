import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, TrendingDown, Zap, DollarSign, Shield } from "lucide-react";

export default function RiskDisclosure() {
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
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Risk <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">Disclosure</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Important information about the risks associated with cryptocurrency trading and automated investment services.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Last updated: March 15, 2025
            </div>
          </motion.div>
        </div>
      </div>

      {/* Risk Warning Banner */}
      <div className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 border-2 border-red-500/50 rounded-2xl p-8 text-center"
          >
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ HIGH RISK INVESTMENT WARNING ⚠️</h2>
            <p className="text-white text-lg font-semibold">
              Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. 
              You could lose all of your invested capital.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Risk Content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 space-y-8"
          >
            {/* Market Risks */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <TrendingDown className="w-6 h-6 text-red-500" />
                1. Market Volatility Risks
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cryptocurrency markets are extremely volatile and unpredictable. Prices can fluctuate dramatically within short time periods.
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong>Extreme Price Swings:</strong> Cryptocurrency values can drop 50% or more in a single day</li>
                  <li>• <strong>Market Manipulation:</strong> Prices may be influenced by large holders or coordinated activities</li>
                  <li>• <strong>Liquidity Risks:</strong> Inability to sell positions during market stress</li>
                  <li>• <strong>24/7 Trading:</strong> Markets operate continuously without circuit breakers</li>
                </ul>
              </div>
            </section>

            {/* Technology Risks */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                2. Technology & Platform Risks
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our automated trading systems depend on complex technology that may experience failures or errors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">System Failures</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Server downtime or outages</li>
                    <li>• Network connectivity issues</li>
                    <li>• Exchange API failures</li>
                    <li>• Software bugs or glitches</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Security Risks</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Cyber attacks and hacking</li>
                    <li>• Data breaches</li>
                    <li>• Unauthorized access</li>
                    <li>• Smart contract vulnerabilities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Regulatory Risks */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                3. Regulatory & Legal Risks
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cryptocurrency regulations are evolving rapidly and may impact the availability and profitability of our services.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Changing Regulations:</strong> New laws may restrict or prohibit cryptocurrency trading</li>
                <li><strong>Tax Implications:</strong> Complex and changing tax treatment of crypto gains/losses</li>
                <li><strong>Compliance Requirements:</strong> KYC/AML regulations may affect account access</li>
                <li><strong>Geographic Restrictions:</strong> Services may not be available in all jurisdictions</li>
              </ul>
            </section>

            {/* Performance Risks */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-green-500" />
                4. Performance & Investment Risks
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-yellow-400 font-bold mb-3">No Guarantee of Returns</h3>
                <p className="text-gray-300 mb-4">
                  Past performance does not guarantee future results. All investment strategies carry the risk of loss.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong>Algorithm Risk:</strong> Our AI trading strategies may underperform or fail</li>
                  <li>• <strong>Arbitrage Risk:</strong> Opportunities may disappear or become unprofitable</li>
                  <li>• <strong>Slippage:</strong> Actual execution prices may differ from expected prices</li>
                  <li>• <strong>Competition:</strong> Increasing competition may reduce profitability</li>
                  <li>• <strong>Total Loss:</strong> You may lose your entire investment</li>
                </ul>
              </div>
            </section>

            {/* Operational Risks */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Operational Risks</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Various operational factors may impact your investment and the availability of our services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Exchange Risks</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Exchange bankruptcies</li>
                    <li>• Trading suspensions</li>
                    <li>• Withdrawal restrictions</li>
                    <li>• API changes</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Counterparty Risk</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Exchange default</li>
                    <li>• Custodial risks</li>
                    <li>• Settlement failures</li>
                    <li>• Fraud risk</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Liquidity Risk</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Inability to exit positions</li>
                    <li>• Wide bid-ask spreads</li>
                    <li>• Market depth issues</li>
                    <li>• Forced liquidations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Recommendations */}
            <section className="bg-crypto-blue/10 border border-crypto-blue/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-crypto-blue mb-4">Important Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Before Investing:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Only invest what you can afford to lose completely</li>
                    <li>• Understand all risks involved</li>
                    <li>• Diversify your investment portfolio</li>
                    <li>• Consider your risk tolerance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Risk Management:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Set investment limits and stick to them</li>
                    <li>• Monitor your investments regularly</li>
                    <li>• Have an exit strategy</li>
                    <li>• Seek professional financial advice</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Risk Acknowledgment</h2>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed">
                  By using TradePilot services, you acknowledge that you have read, understood, and accept all the risks outlined in this disclosure. 
                  You confirm that you are investing only funds that you can afford to lose and that you understand cryptocurrency trading 
                  involves substantial risk of loss.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Risks?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about these risks or need clarification, please contact our support team before making any investments.
              </p>
              <Button
                onClick={() => setLocation("/contact")}
                className="crypto-gradient text-white px-6 py-3 hover:opacity-90 transition-all duration-300"
                data-testid="button-contact-support"
              >
                Contact Support
              </Button>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}