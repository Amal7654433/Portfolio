import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm" style={{ color: "#22d3ee" }}>
            Experience
          </p>
          <h2 className="font-display text-4xl font-bold mt-3">Where I've worked</h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span
                className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full"
                style={{ background: "linear-gradient(135deg, #22d3ee, #7c5cff)" }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg font-bold">{item.role}</h3>
                <span className="text-sm text-white/40">{item.period}</span>
              </div>
              <p className="text-sm mb-2" style={{ color: "#7c5cff" }}>
                {item.company}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
