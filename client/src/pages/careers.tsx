import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Briefcase, TrendingUp, Globe, Heart, Code } from "lucide-react";

export default function Careers() {
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
              Join <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">TradePilot</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the future of automated cryptocurrency trading. Join our team of innovators building cutting-edge AI trading technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join a rapidly growing fintech company at the forefront of cryptocurrency innovation. We offer competitive benefits, flexible work arrangements, and the opportunity to shape the future of digital trading.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center"
            >
              <TrendingUp className="w-12 h-12 text-crypto-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Growth Opportunities</h3>
              <p className="text-gray-300">
                Accelerate your career in the fast-growing crypto and fintech industry with mentorship and skill development programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center"
            >
              <Globe className="w-12 h-12 text-crypto-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Remote-First Culture</h3>
              <p className="text-gray-300">
                Work from anywhere with flexible hours. We believe in work-life balance and empowering our team to do their best work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center"
            >
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Benefits</h3>
              <p className="text-gray-300">
                Health insurance, equity participation, professional development budget, and competitive compensation packages.
              </p>
            </motion.div>
          </div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8"
          >
            <div className="text-center mb-8">
              <Briefcase className="w-12 h-12 text-crypto-blue mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Current Openings</h2>
              <p className="text-gray-300">
                We're always looking for talented individuals to join our growing team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Senior AI Engineer</h3>
                  <span className="bg-crypto-blue text-white px-3 py-1 rounded-full text-sm">Remote</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Lead the development of our AI trading algorithms and machine learning models for cryptocurrency arbitrage.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                  <span className="bg-crypto-green text-white px-3 py-1 rounded-full text-sm">Remote</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Build and maintain our trading platform, user dashboard, and backend APIs for seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">DevOps Engineer</h3>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Remote</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Manage our cloud infrastructure, deployment pipelines, and ensure 99.9% uptime for our trading systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">Terraform</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">GitLab CI</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => setLocation("/contact")}
                className="crypto-gradient text-white px-8 py-3 text-lg hover:opacity-90 transition-all duration-300"
                data-testid="button-apply-now"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}