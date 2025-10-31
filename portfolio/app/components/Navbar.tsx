'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]"); // ✅ préciser HTMLElement

  const handleScroll = () => {
    let current = "home"; // fallback
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - window.innerHeight / 2;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")!;
      }
    });
    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // détecte la section au chargement
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "service", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-6 bg-blue-950/70 backdrop-blur-md shadow-md shadow-blue-800/40 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-300 tracking-wide">
        Andy <span className="text-blue-500">F.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 relative">
        {links.map((link) => (
          <div key={link.id} className="relative">
            <a
              href={`#${link.id}`}
              className={`transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-blue-300"
              }`}
            >
              {link.label}
            </a>

            {activeSection === link.id && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-blue-950/95 backdrop-blur-lg flex flex-col items-center md:hidden space-y-4 py-6 shadow-lg"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-blue-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
