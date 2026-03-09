"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Got an idea? Let&apos;s talk.
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Whether you have a project in mind or just want to explore what&apos;s
          possible — drop us a line. We&apos;re always up for a good
          conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-col items-center gap-4"
        >
          <a
            href="mailto:contact@minibee.pro"
            className="group relative flex items-center gap-3 px-7 py-3.5 rounded-full bg-gray-900 text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-0.5"
          >
            <svg
              className="relative z-10 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="relative z-10 font-semibold text-sm">
              contact@minibee.pro
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
