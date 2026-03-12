import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

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
      <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Experience
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep">
          Where I've Worked
        </motion.h2>
      </motion.div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.15 + i * 0.12)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />
            <div className="p-6">
              <div className="flex flex-row items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <h3 className="font-bold text-lg text-gray-900">{exp.role}</h3>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-medium hover:underline text-base"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-primary font-medium text-base">{exp.company}</span>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 text-sm text-gray-500 shrink-0">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-600 text-base text-justify">
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
