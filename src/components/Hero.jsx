import './Hero.css';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
});

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      {/* Background */}
      <div className="hero__bg">
        <img src="/hero-bg.png" alt="Cafe In interior ambiance" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
        <div className="hero__grain" aria-hidden="true" />
      </div>

      {/* Floating badges */}
      <motion.div
        className="hero__badge hero__badge--rating"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: 'backOut' }}
        aria-label="Rating: 4.6 out of 5 stars"
      >
        <div className="hero__badge-stars" aria-hidden="true">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={12} fill={i <= 4 ? '#D47748' : 'none'} color="#D47748" />
          ))}
        </div>
        <strong>4.6</strong>
        <span>68 Reviews</span>
      </motion.div>

      <motion.div
        className="hero__badge hero__badge--open"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.6, ease: 'backOut' }}
      >
        <span className="hero__open-dot" aria-hidden="true" />
        <span>Open Till 12 AM</span>
      </motion.div>

      {/* Content */}
      <div className="container hero__content">
        <motion.div {...fadeUp(0.2)} className="hero__eyebrow">
          <span className="label gold">Vijayapura's Favourite Café</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.4)} className="hero__title display-xl">
          Where Every Sip <br />
          <span className="gold-gradient">Tells a Story</span>
        </motion.h1>

        <motion.p {...fadeUp(0.6)} className="hero__subtitle body-lg">
          Crafted brews, vibrant bites & warm vibes — all night long.<br />
          <span className="gold" style={{ fontSize: '1rem', fontStyle: 'italic' }}>ಕೆಫೆ ಇನ್ · ₹1–600 per person</span>
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="hero__actions">
          <a
            href="https://maps.app.goo.gl/5Jmx4E2W"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="hero-directions-btn"
          >
            <MapPin size={18} />
            Get Directions
          </a>
          <button
            className="btn-outline"
            id="hero-menu-btn"
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu
          </button>
        </motion.div>

        <motion.div {...fadeUp(1.0)} className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num gold">4.6★</span>
            <span className="hero__stat-label">Rating</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num gold">68+</span>
            <span className="hero__stat-label">Reviews</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num gold">Till 12</span>
            <span className="hero__stat-label">Open Late</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num gold">₹600</span>
            <span className="hero__stat-label">Max/Person</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to menu section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
