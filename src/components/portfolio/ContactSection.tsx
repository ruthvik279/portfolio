import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const ContactSection = () => (
  <section id="contact" className="py-24 bg-gradient-to-br from-brand-deep via-primary to-brand-light text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
        Contact
      </motion.p>
      <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold mb-4">
        Get in Touch
      </motion.h2>
      <motion.p {...fadeUp(0.2)} className="text-white/60 text-lg max-w-xl mx-auto mb-10">
        I'm currently open to new opportunities. Whether it's a question, a
        project, or just a hello feel free to reach out.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="mb-10 inline-block">
        <a
          href="mailto:ruthvikgoggi@gmail.com"
          className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg"
        >
          Say Hello
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-8 mb-16">
        <a
          href="https://github.com/ruthvik279"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ruthvik-goggi/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="mailto:ruthvikgoggi@gmail.com"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <Mail size={18} /> Email
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
