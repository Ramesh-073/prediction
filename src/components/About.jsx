import './About.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Heart, Clock, Users } from 'lucide-react';

const PILLARS = [
  { icon: <Coffee size={22} />, title: 'Crafted Brews', desc: 'Every cup is made with premium ingredients and care, from bold espresso to chilled cold coffees.' },
  { icon: <Heart size={22} />, title: 'Made With Love', desc: 'Our team believes great food starts with passion. Every dish reflects our love for quality and flavor.' },
  { icon: <Clock size={22} />, title: 'Open Till Midnight', desc: 'Late-night cravings? We\'ve got you. Cafe In welcomes you right up until 12 AM every day.' },
  { icon: <Users size={22} />, title: 'Welcoming Vibes', desc: '"Well-behaved staff, good cooperative team" — our guests say it best. You\'re family here.' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="about section-pad" id="about" ref={ref} aria-label="About section">
      <div className="container">
        <div className="about__grid">
          {/* Image side */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__img-wrap">
              <img src="/interior.png" alt="Cafe In cozy interior" className="about__img" loading="lazy" />
              <div className="about__img-overlay" aria-hidden="true" />
            </div>
            {/* Floating card */}
            <div className="about__float-card" aria-label="Rating highlight">
              <div className="about__float-card-top">
                <span className="about__float-num gold">4.6</span>
                <div className="about__float-stars" aria-hidden="true">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="about__float-text">Average rating from 68 guests</p>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="about__content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="section-eyebrow">
                <span className="label gold">Our Story</span>
              </div>
              <h2 className="display-lg about__title">
                Vijayapura's Corner of <span className="gold-gradient">Good Taste</span>
              </h2>
              <div className="gold-divider" style={{ margin: '1.25rem 0' }} />
              <p className="body-lg about__para">
                Tucked inside Gani Furniture Mall opposite Patil Gardenia in Adarsh Nagar, 
                <strong style={{ color: 'var(--clr-gold)' }}> Cafe In (ಕೆಫೆ ಇನ್)</strong> is 
                Vijayapura's go-to spot for everything from a morning ginger lemon tea to a 
                midnight chocolate cold coffee.
              </p>
              <p className="about__para" style={{ color: 'var(--clr-text-muted)' }}>
                We believe that a great café experience isn't just about the food — it's about 
                the atmosphere, the people, and those small moments that make you feel truly 
                at home. With a rating of <strong style={{ color: 'var(--clr-text)' }}>4.6 stars</strong> from 
                our guests, we're proud to be that place for so many in Vijayapura.
              </p>
            </motion.div>

            {/* Pillars grid */}
            <div className="about__pillars">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="about__pillar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="about__pillar-icon" aria-hidden="true">{p.icon}</div>
                  <div>
                    <h3 className="about__pillar-title">{p.title}</h3>
                    <p className="about__pillar-desc">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
