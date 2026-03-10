import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          About Me
        </p>
        <h2 className="font-display text-4xl font-bold text-brand-deep mb-6">
          Who I Am
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I'm a software engineer and MS Computer Science student at The George
          Washington University, focused on cloud infrastructure, DevSecOps, and
          distributed systems. I've built production-grade Kubernetes operators,
          secured CI/CD pipelines, and developed full-stack applications at scale.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Currently working at Siemens DISW as a Software Engineering Co-op,
          building internal developer platform tooling on Kubernetes. I'm passionate
          about developer experience, cloud-native systems, and shipping software
          that actually matters.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={16} className="text-accent" />
            Washington, DC
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Briefcase size={16} className="text-accent" />
            Open to Opportunities
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
