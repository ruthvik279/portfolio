import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const SKILLS = [
  {
    category: "Languages & Frameworks",
    color: "from-primary to-brand-light",
    items: ["Go", "Python", "TypeScript", "JavaScript", "SQL", "C/C++", "React", "Node.js", "Angular", "REST APIs", "TensorFlow", "PyTorch", "LangChain"],
  },
  {
    category: "Cloud & DevOps",
    color: "from-accent to-amber-400",
    items: ["Kubernetes", "Docker", "AWS", "GCP", "Terraform", "Argo CD", "Kubebuilder", "GitLab CI/CD", "JFrog Artifactory"],
  },
  {
    category: "DevSecOps & Databases",
    color: "from-emerald-500 to-teal-400",
    items: ["Wiz", "Cosign", "SonarQube", "Harbor", "PostgreSQL", "MongoDB", "MySQL"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
      <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Skills
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep">
          What I Work With
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((group, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.15 + i * 0.12)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className={`h-1.5 bg-gradient-to-r ${group.color}`} />
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
