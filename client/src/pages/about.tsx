import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">TradePilot</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the future of automated cryptocurrency trading with cutting-edge AI technology and professional-grade arbitrage strategies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-12 mb-16"
          >
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-crypto-blue mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              TradePilot democratizes access to sophisticated cryptocurrency trading strategies through our AI-powered platform. 
              We empower both novice and professional investors to capitalize on arbitrage opportunities across global exchanges, 
              delivering consistent returns while minimizing risk through advanced automation and real-time market analysis.
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-8 text-center">
              <TrendingUp className="w-12 h-12 text-crypto-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Trading</h3>
              <p className="text-gray-300">
                Advanced machine learning algorithms analyze market patterns and execute trades with precision timing for optimal returns.
              </p>
            </div>

            <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-8 text-center">
              <Shield className="w-12 h-12 text-crypto-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Risk Management</h3>
              <p className="text-gray-300">
                Comprehensive risk assessment and mitigation strategies protect your investments while maximizing growth potential.
              </p>
            </div>

            <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-8 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Execution</h3>
              <p className="text-gray-300">
                Lightning-fast trade execution across multiple exchanges ensures you never miss profitable arbitrage opportunities.
              </p>
            </div>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-crypto-blue/10 to-crypto-green/10 rounded-2xl border border-slate-700 p-12 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded by a team of financial technology experts and cryptocurrency pioneers, TradePilot emerged from the recognition 
                    that traditional investment strategies were insufficient for the dynamic crypto market.
                  </p>
                  <p>
                    Our founders, with decades of combined experience in algorithmic trading and artificial intelligence, developed 
                    proprietary technology that identifies and capitalizes on arbitrage opportunities across global cryptocurrency exchanges.
                  </p>
                  <p>
                    Since our inception, we've processed millions in trading volume and consistently delivered superior returns to our 
                    community of professional investors and financial institutions.
                  </p>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-crypto-green mb-2">$10M+</div>
                    <div className="text-sm text-gray-400">Trading Volume</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-crypto-blue mb-2">500+</div>
                    <div className="text-sm text-gray-400">Active Investors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-2">15+</div>
                    <div className="text-sm text-gray-400">Partner Exchanges</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Market Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <Users className="w-12 h-12 text-crypto-blue mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                <p className="text-gray-300 text-sm">Open communication about risks, returns, and our trading methodology.</p>
              </div>
              <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">Continuously advancing our technology to stay ahead of market changes.</p>
              </div>
              <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-300 text-sm">Bank-grade security protocols protecting your investments and data.</p>
              </div>
              <div className="bg-slate-900/30 rounded-xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">Commitment to delivering superior performance and customer service.</p>
              </div>
            </div>
          </motion.div>

          {/* Global Reach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-12 text-center"
          >
            <Globe className="w-12 h-12 text-crypto-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-6">Global Reach</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Operating across international markets, TradePilot connects with major cryptocurrency exchanges worldwide, 
              providing our clients with access to the most liquid and profitable trading opportunities across all time zones.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}