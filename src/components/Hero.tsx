"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-200/60 bg-primary-50/50 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-medium text-primary-700">
              Software Studio
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
        >
          We build apps that{" "}
          <span className="gradient-text">people love to use.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Minibee designs, develops, and ships polished digital products —
          from mobile apps to full-stack platforms. We obsess over every detail
          so your users don&apos;t have to think twice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#contact"
            className="group relative px-8 py-3.5 text-sm font-semibold rounded-full bg-gray-900 text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/#services"
            className="px-8 py-3.5 text-sm font-semibold rounded-full border-2 border-gray-200 text-gray-600 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
