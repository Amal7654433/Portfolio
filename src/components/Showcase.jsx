import { motion } from "framer-motion";
import { showcaseCategories } from "../data/portfolioData";

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
            Frontend-focused work: 3D sites, landing pages, and visual experiments.
          </p>
        </motion.div>

        <div className="space-y-20">
          {showcaseCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold">{category.title}</h3>
                <p className="text-white/50 text-sm mt-2">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl overflow-hidden group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold mb-3">{item.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
