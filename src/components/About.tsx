"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8" />
        </motion.div>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            Minibee is a small, focused studio that builds software people
            actually enjoy using. We handle everything from concept to App Store
            — designing clean interfaces, writing solid code, and shipping
            products that just work. No bloat, no shortcuts, no compromise on
            the details that matter.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            We mostly build our own products, but we also team up with a
            handful of partners who share our standards. Every collaboration
            starts with a clear goal and ends with something we&apos;re proud
            to put our name on.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
