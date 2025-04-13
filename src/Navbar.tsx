import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "services", label: "Services" },
    { href: "portfolio", label: "Portfolio" },
    { href: "blog", label: "Blog" },
    { href: "announcements", label: "News" },
    { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a1a]/90 backdrop-blur-sm z-50 py-6">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <RouterLink to="/">
            <img src="/assets/logo/name-logo.png" alt="Alyssa-Jecomo-logo" className="h-8 w-8" />
          </RouterLink>
          <span className="text-xl font-bold tracking-wider">Alyssa Jecomo</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <ScrollLink
            to={link.href}
            smooth={true}
            duration={300}  // ⬅️ Original slow speed
            spy={true}
            offset={-10}
            className="hover:text-emerald-500 transition-colors cursor-pointer"
          >
            {link.label}
          </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-[#252525] rounded-lg transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6 text-emerald-500" /> : <Menu className="w-6 h-6 text-emerald-500" />}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-[85px] bg-[#1a1a1a] border-t border-[#252525] transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.href}
                  to={link.href}
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-10}
                  className="text-lg font-medium hover:text-emerald-500 transition-colors px-4 py-2 cursor-pointer"
                  onClick={closeMenu}
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
