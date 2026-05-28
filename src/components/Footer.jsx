import './Footer.css';
import { Coffee } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.svg" alt="Cafe In Logo" style={{ width: '42px', height: '42px' }} />
              <div>
                <span className="footer__logo-en">Cafe In</span>
                <span className="footer__logo-kn">ಕೆಫೆ ಇನ್</span>
              </div>
            </div>
            <p className="footer__tagline">
              Where every sip tells a story. <br />
              Vijayapura's favourite café, open till midnight.
            </p>
            <div className="footer__rating">
              <span style={{ color: '#D47748' }}>★★★★★</span>
              <span className="footer__rating-text">4.6 · 68 Reviews</span>
            </div>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {[['Home','#home'],['Menu','#menu'],['About','#about'],['Gallery','#gallery']].map(([label, href]) => (
                <li key={href}>
                  <button onClick={() => scrollTo(href)} className="footer__link">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Visit Us</h4>
            <address className="footer__address">
              Shop No 8, Gani Furniture Mall,<br />
              Opp. Patil Gardenia,<br />
              Adarsh Nagar, Vijayapura,<br />
              Karnataka – 586103
            </address>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Hours & Contact</h4>
            <p className="footer__info">
              <span style={{ color: '#22c55e' }}>●</span> Open Daily<br />
              Closes at 12 AM Midnight
            </p>
            <a href="tel:08050281521" className="footer__phone">📞 080502 81521</a>
          </div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Cafe In (ಕೆಫೆ ಇನ್). All rights reserved. · Vijayapura, Karnataka
          </p>
          <p className="footer__love">
            Made with ☕ & ❤️ for great café experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
