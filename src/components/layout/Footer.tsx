import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-deep text-white/60 py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
      <p className="text-sm">© 2026 Ruthvik Tarang Goggi. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/ruthvik279"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ruthvik-goggi/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:ruthvikgoggi@gmail.com"
          className="hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
