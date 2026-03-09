"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-xs text-gray-500">
              Custom Programming Services
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
        >
          We craft intelligent software{" "}
          <span className="gradient-text">for the modern era.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Minibee is a specialized software studio designing, developing,
          and deploying custom digital solutions — from our own proprietary
          products to tailored systems built alongside strategic partners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#contact"
            className="px-8 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          >
            Get in Touch
          </Link>
          <Link
            href="/#services"
            className="px-8 py-3 text-sm font-medium rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
