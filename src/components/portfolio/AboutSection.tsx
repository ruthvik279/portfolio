import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const AboutSection = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          About Me
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep mb-6">
          Who I Am
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-gray-600 text-lg leading-relaxed mb-6">
          I'm a software engineer and MS Computer Science student at The George
          Washington University, focused on cloud infrastructure, DevSecOps, and
          distributed systems. I've built production-grade Kubernetes operators,
          secured CI/CD pipelines, and developed full-stack applications at scale.
        </motion.p>
        <motion.p {...fadeUp(0.3)} className="text-gray-600 text-lg leading-relaxed mb-8">
          Currently working at Siemens DISW as a Software Engineering Co-op,
          building internal developer platform tooling on Kubernetes. I'm passionate
          about developer experience, cloud-native systems, and shipping software
          that actually matters.
        </motion.p>
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={16} className="text-accent" />
            Washington, DC, USA
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Briefcase size={16} className="text-accent" />
            Open to Opportunities
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
