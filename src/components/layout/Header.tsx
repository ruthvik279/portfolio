import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display font-bold text-xl text-white hover:opacity-80 transition-opacity"
          style={{ color: scrolled ? "hsl(180, 33%, 17%)" : "white" }}
        >
            Ruthvik Tarang Goggi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors",
                scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/portfolio/Ruthvik_Goggi_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-accent text-white text-base font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden p-2", scrolled ? "text-gray-800" : "text-white")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-gray-600 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/portfolio/Ruthvik_Goggi_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-accent"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
