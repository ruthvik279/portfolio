import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-deep via-primary to-brand-light relative overflow-hidden"
  >
    {/* Background blobs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <motion.p {...fadeUp(0.1)} className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
        Hello, I am
      </motion.p>
      <motion.h1 {...fadeUp(0.25)} className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
        Ruthvik Tarang Goggi
      </motion.h1>
      <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg md:text-xl mb-8">
        Software Engineer @ Siemens DISW · Cloud &amp; DevSecOps · MS CS @ GWU
      </motion.p>

      <motion.div {...fadeUp(0.55)} className="flex items-center justify-center gap-4 mb-10">
        <a
          href="https://github.com/ruthvik279"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ruthvik-goggi/"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:ruthvikgoggi@gmail.com"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
        >
          <Mail size={20} />
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.7)} className="flex items-center justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
        >
          View Projects
        </a>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer p-3 rounded-full bg-white hover:bg-white/90 transition-colors shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 8, 0] }}
      transition={{ opacity: { delay: 1, duration: 0.5 }, y: { repeat: Infinity, duration: 1.5, delay: 1 } }}
    >
      <ArrowDown size={20} className="text-black" />
    </motion.a>
  </section>
);

export default HeroSection;
