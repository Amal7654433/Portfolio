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
            I'm a full-stack developer working with Node.js, React, Vite, and Next.js. I build
            complex production applications, not just static sites, including web apps, native
            Android apps, and systems with real backend logic.
          </p>
          <p className="text-white/60 leading-relaxed">
            Backend is where I'm strongest: APIs, real-time features with Socket.io and WebSockets,
            payments, authentication, and cloud deployment on AWS, Firebase, and Render.
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
