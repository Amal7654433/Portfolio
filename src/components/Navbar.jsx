import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#showcase", label: "Showcase" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-bold text-gradient">
          {profile.brandName}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block rounded-full px-5 py-2 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors"
        >
          Let's Talk
        </a>
      </nav>
    </motion.header>
  );
}
