import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const PROJECTS = [
  {
    title: "AI Knowledge Base Assistant",
    description:
      "An AI-powered RAG chatbot that answers technical questions by retrieving context from internal documentation using FAISS vector search, OpenAI API, and LangChain. Containerized with Docker and exposed via FastAPI.",
    tags: ["Python", "LangChain", "OpenAI API", "FAISS", "FastAPI", "Docker"],
    live: "",
    color: "from-primary/10 to-brand-light/10",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce backend built with Go, featuring RESTful APIs for product catalog management, authentication, and checkout with concurrency-safe goroutines supporting high-volume parallel requests.",
    tags: ["Go", "Node.js", "MongoDB", "REST APIs"],
    live: "",
    color: "from-accent/10 to-amber-400/10",
  },
  {
    title: "Extracurricular Event Tracker",
    description:
      "A full-stack web app to manage extracurricular participation with secure auth, OTP-based password recovery, real-time Firebase sync, role-based access control, and interactive calendar event management.",
    tags: ["React.js", "Node.js", "Firebase"],
    live: "",
    color: "from-emerald-500/10 to-teal-400/10",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
      <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Projects
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep">
          Things I've Built
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.15 + i * 0.12)}
            className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 border border-white shadow-sm flex flex-col gap-4`}
          >
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-white/80 text-gray-700 text-xs rounded-full border border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink size={15} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
