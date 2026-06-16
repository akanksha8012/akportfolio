import { useState, useEffect } from 'react';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-base/90 backdrop-blur-lg border-b border-border py-3'
          : 'py-5'
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-display text-2xl font-extrabold tracking-tight text-textP">
          AR<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-textS hover:text-textP transition-colors duration-200
                after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-accent
                after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-accent text-white text-sm font-semibold rounded-md
              hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-textP rounded-full transition-all duration-200
            ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-textP rounded-full transition-all duration-200
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-textP rounded-full transition-all duration-200
            ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-base flex flex-col items-center justify-center gap-10
        transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-2xl font-display font-bold text-textS hover:text-textP transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="px-8 py-3 bg-accent text-white font-semibold rounded-md"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
