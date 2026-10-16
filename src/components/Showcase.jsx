import { motion } from "framer-motion";
import { showcaseItems } from "../data/portfolioData";

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm" style={{ color: "#22d3ee" }}>
            Showcase
          </p>
          <h2 className="font-display text-4xl font-bold mt-3">Websites &amp; Experiments</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Landing pages, frontend builds, and interactive 3D sites.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {item.is3D && (
                  <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white/80 backdrop-blur">
                    3D
                  </span>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#22d3ee" }}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
