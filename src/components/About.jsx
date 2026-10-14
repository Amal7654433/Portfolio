import { motion } from "framer-motion";
import { profile, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-widest text-sm" style={{ color: "#22d3ee" }}>
            About Me
          </p>
          <h2 className="font-display text-4xl font-bold mt-3 mb-6">
            Crafting digital experiences with code &amp; creativity
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            I'm a full-stack developer passionate about building performant, accessible, and
            visually engaging web applications. I enjoy working at the intersection of design and
            engineering — turning complex problems into simple, elegant interfaces.
          </p>
          <p className="text-white/60 leading-relaxed">
            When I'm not coding, you'll find me exploring new 3D web techniques, contributing to
            open source, or sketching UI concepts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-white/50 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
