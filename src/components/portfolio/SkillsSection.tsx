import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Languages & Frameworks",
    color: "from-primary to-brand-light",
    items: ["Go", "Python", "TypeScript", "JavaScript", "SQL", "C/C++", "React", "Node.js", "Angular", "REST APIs"],
  },
  {
    category: "Cloud & DevOps",
    color: "from-accent to-amber-400",
    items: ["Kubernetes", "Docker", "AWS", "GCP", "Terraform", "Argo CD", "Kubebuilder", "GitLab CI/CD", "JFrog Artifactory"],
  },
  {
    category: "DevSecOps & Databases",
    color: "from-emerald-500 to-teal-400",
    items: ["Wiz", "Cosign", "SonarQube", "Harbor", "PostgreSQL", "MongoDB", "MySQL", "TensorFlow", "PyTorch", "LangChain"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Skills
        </p>
        <h2 className="font-display text-4xl font-bold text-brand-deep">
          What I Work With
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
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
