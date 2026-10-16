import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm" style={{ color: "#22d3ee" }}>
            Projects
          </p>
          <h2 className="font-display text-4xl font-bold mt-3">Selected Work</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A mix of personal and client projects. Replace these with your own screenshots and
            links whenever you're ready.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs uppercase tracking-widest mb-2" style={{ color: "#7c5cff" }}>
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.caseStudy ? (
                    <span className="text-white/40 italic">Case Study (Private Project)</span>
                  ) : (
                    <>
                      <a href={project.liveUrl} className="hover:text-accent-2" style={{ color: "#22d3ee" }}>
                        Live Demo →
                      </a>
                      <a href={project.codeUrl} className="text-white/50 hover:text-white">
                        Source Code
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
