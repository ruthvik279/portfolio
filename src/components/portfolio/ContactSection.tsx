import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-brand-deep text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="font-display text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          I'm currently open to new opportunities. Whether it's a question, a
          project, or just a hello — feel free to reach out.
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all shadow-lg mb-10"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-8">
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
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
