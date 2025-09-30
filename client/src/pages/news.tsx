import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, TrendingUp, Zap, Globe, Users, Shield } from "lucide-react";

export default function News() {
  const [, setLocation] = useLocation();

  const newsItems = [
    {
      id: 1,
      title: "TradePilot Introduces Advanced AI Trading Algorithms",
      date: "March 15, 2025",
      category: "Product Update",
      excerpt: "Our latest AI enhancement delivers 23% improved arbitrage detection across global crypto exchanges.",
      icon: Zap,
      featured: true
    },
    {
      id: 2,
      title: "Platform Security Upgrade Complete",
      date: "March 10, 2025",
      category: "Security",
      excerpt: "Multi-layer encryption and advanced threat detection systems now protect all user investments.",
      icon: Shield,
      featured: false
    },
    {
      id: 3,
      title: "Global Expansion: 50+ New Exchange Integrations",
      date: "March 5, 2025",
      category: "Expansion",
      excerpt: "TradePilot now monitors arbitrage opportunities across over 150 cryptocurrency exchanges worldwide.",
      icon: Globe,
      featured: false
    },
    {
      id: 4,
      title: "Community Milestone: 10,000+ Active Traders",
      date: "February 28, 2025",
      category: "Milestone",
      excerpt: "Our growing community of traders has collectively generated over $2.5M in profitable arbitrage trades.",
      icon: Users,
      featured: false
    },
    {
      id: 5,
      title: "Q1 2025 Performance Report Released",
      date: "February 20, 2025",
      category: "Report",
      excerpt: "Average returns of 18.5% achieved across all trading plans, setting new industry benchmarks.",
      icon: TrendingUp,
      featured: false
    }
  ];

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
              News & <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">Updates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest developments, platform updates, and industry insights from TradePilot.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured News */}
      <div className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          {newsItems.filter(item => item.featured).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-crypto-blue/20 to-crypto-green/20 rounded-2xl border border-crypto-blue/30 p-8 mb-8"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-crypto-blue/20 rounded-xl">
                  <item.icon className="w-8 h-8 text-crypto-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-crypto-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.excerpt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 rounded-2xl border border-slate-700 p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <item.icon className="w-6 h-6 text-crypto-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest TradePilot news, platform updates, and market insights delivered directly to your inbox.
            </p>
            <Button
              onClick={() => setLocation("/contact")}
              className="crypto-gradient text-white px-8 py-3 text-lg hover:opacity-90 transition-all duration-300"
              data-testid="button-subscribe-newsletter"
            >
              Subscribe to Newsletter
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}