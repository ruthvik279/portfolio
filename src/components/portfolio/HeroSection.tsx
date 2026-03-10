import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-deep via-primary to-brand-light relative overflow-hidden"
  >
    {/* Background blobs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
          Hello, I am
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
          Ruthvik Tarang Goggi
        </h1>
        <p className="text-white/70 text-lg md:text-xl mb-8">
          Software Engineer · Cloud &amp; DevSecOps · MS CS @ GWU
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
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
        </div>

        <div className="flex items-center justify-center gap-4">
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
        </div>
      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ArrowDown size={20} className="text-white/40" />
    </motion.div>
  </section>
);

export default HeroSection;
