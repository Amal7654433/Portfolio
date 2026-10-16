import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolioData";

const profiles = [
  { name: "GitHub", handle: "Amal7654433", url: profile.socials.github, Icon: FaGithub, color: "#ffffff" },
  { name: "LinkedIn", handle: "amal-tv-783486289", url: profile.socials.linkedin, Icon: FaLinkedin, color: "#0a66c2" },
  { name: "LeetCode", handle: "amal790257", url: profile.socials.leetcode, Icon: SiLeetcode, color: "#ffa116" },
];

export default function Profiles() {
  return (
    <section id="profiles" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm" style={{ color: "#22d3ee" }}>
            Profiles
          </p>
          <h2 className="font-display text-4xl font-bold mt-3">Find me online</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {profiles.map(({ name, handle, url, Icon, color }, i) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
            >
              <Icon className="text-5xl mx-auto mb-5" style={{ color }} />
              <h3 className="font-display text-xl font-bold">{name}</h3>
              <p className="text-white/50 text-sm mt-2 break-all">{handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
