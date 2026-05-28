import './Navbar.css';
import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => handleNav('#home')}>
          <img src="/logo.svg" alt="Cafe In Logo" style={{ width: '42px', height: '42px' }} />
          <div className="navbar__logo-text">
            <span className="navbar__logo-en">Cafe In</span>
            <span className="navbar__logo-kn">ಕೆಫೆ ಇನ್</span>
          </div>
        </a>

        <nav className="navbar__links" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="navbar__link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a href="tel:08050281521" className="btn-primary navbar__cta" id="navbar-cta">
          Call Us
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {NAV_LINKS.map(link => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="navbar__mobile-link"
          >
            {link.label}
          </button>
        ))}
        <a href="tel:08050281521" className="btn-primary navbar__mobile-cta">
          📞 Call Us
        </a>
      </div>
    </header>
  );
}
