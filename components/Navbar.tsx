import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Map', href: '#map' },
    { name: 'AI Assistant', href: '#ai' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-brand-green' : 'text-brand-darkGreen'}`}>
              chi<span className="text-black">forest</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#download" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-green transition-colors duration-300 flex items-center gap-2">
              <Download size={16} />
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-brand-green p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-b border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#download" className="w-full text-center mt-4 bg-brand-green text-white block px-3 py-3 rounded-md text-base font-medium">
            Download Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;