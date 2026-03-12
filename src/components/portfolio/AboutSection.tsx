import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const AboutSection = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          About Me
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep mb-6">
          Who I Am
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
          I'm a Software Engineer and MS Computer Science student at The George Washington University, focused on building reliable cloud infrastructure and scalable distributed systems. My work sits at the intersection of platform engineering, DevSecOps, and developer experience.
        </motion.p>
        <motion.p {...fadeUp(0.3)} className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
          At Siemens DISW, I build internal developer platform tooling on Kubernetes, including production-grade operators and GitOps-driven infrastructure that enable engineers to ship secure software faster. I enjoy solving complex infrastructure problems, automating everything possible, and designing systems that scale.
        </motion.p>
        <motion.p {...fadeUp(0.35)} className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
          I'm particularly passionate about cloud-native architecture, platform engineering, and building tools that make developers more productive.
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
