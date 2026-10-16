import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="uppercase tracking-widest text-sm"
          style={{ color: "#22d3ee" }}
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl font-bold mt-3 mb-6"
        >
          Let's build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 mb-10"
        >
          I'm currently open to new opportunities and collaborations. Drop me a message and I'll
          get back to you as soon as I can.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-medium bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] hover:opacity-90 transition-opacity mb-12"
        >
          <FaEnvelope /> {profile.email}
        </motion.a>

        <div className="flex justify-center gap-6 text-2xl text-white/60">
          <a href={profile.socials.github} className="hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href={profile.socials.linkedin} className="hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href={profile.socials.leetcode} className="hover:text-white transition-colors">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </section>
  );
}
