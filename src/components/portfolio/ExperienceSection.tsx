import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Software Engineering Co-op",
    company: "Siemens DISW",
    period: "August 2025 – Present",
    location: "Washington, DC",
    color: "from-primary to-brand-light",
    bullets: [
      "Designed and built a production-grade Kubernetes Operator (Go + Kubebuilder) with 3 custom controllers, enabling self-service artifact provisioning across 30+ package types in a multi-tenant Universal Control Plane, reducing provisioning time from days to minutes.",
      "Architected dual-region (US/EU) cloud deployment strategy, implementing Kubernetes admission webhooks for pre-flight validation across 1000+ repositories and automating repository lifecycle management via Artifactory REST APIs.",
      "Implemented GitOps-driven infrastructure automation using ArgoCD, CRDs, RBAC policies, and cert-manager for scalable, secure, and highly available SaaS deployments with Kubernetes-native observability.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Siemens DISW",
    period: "June 2025 – August 2025",
    location: "Charlotte, NC",
    color: "from-accent to-amber-400",
    bullets: [
      "Led enterprise-wide migration from Aqua to Wiz for container vulnerability scanning, integrating policy-based enforcement and automated multi-format SBOM generation into GitLab CI/CD pipelines.",
      "Designed end-to-end container image signing and verification workflows using Cosign/Sigstore, enabling cryptographic validation across build, scan, and publish stages to secure CI/CD release processes.",
      "Developed scalable DevSecOps pipeline templates supporting multi-registry publishing, advanced image tagging, and automated security gates to standardize secure delivery across engineering teams.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "BlueCloud Services",
    period: "Feb 2024 – May 2024",
    location: "Remote",
    color: "from-emerald-500 to-teal-400",
    bullets: [
      "Refactored legacy codebases, resolving 25+ dependency conflicts by implementing compatibility patches, automated regression testing, and version standardization for stable production deployments.",
      "Designed and implemented CI/CD workflows using GitLab to automate build, test, and deployment stages, reducing manual intervention and improving release efficiency in an Agile environment.",
      "Applied modular design patterns, version control strategies, and structured code reviews to improve maintainability and long-term system scalability.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Experience
        </p>
        <h2 className="font-display text-4xl font-bold text-brand-deep">
          Where I've Worked
        </h2>
      </motion.div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{exp.role}</h3>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-medium hover:underline text-sm"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-primary font-medium text-sm">{exp.company}</span>
                  )}
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-600 text-sm text-justify">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
