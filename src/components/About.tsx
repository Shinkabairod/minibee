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
            Vaunted Labs is a Delaware-based software studio dedicated to
            creating high-quality digital products. We combine deep technical
            expertise with careful design thinking to build solutions that stand
            apart. Every project we take on reflects our commitment to clean
            architecture, lasting reliability, and genuine value for the people
            who use our software.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            While we primarily focus on developing and managing our own portfolio
            of products, we selectively partner with organizations whose vision
            aligns with ours. These collaborations are grounded in mutual
            respect, technical rigor, and a shared drive to deliver software
            that performs flawlessly from day one.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
