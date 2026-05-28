import './Contact.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Camera, MessageCircle } from 'lucide-react';

const INFO_ITEMS = [
  {
    icon: <MapPin size={20} />,
    title: 'Find Us',
    lines: [
      'Shop No 8, Gani Furniture Mall',
      'Opp. Patil Gardenia, Panchavati Colony',
      'Adarsh Nagar, Vijayapura',
      'Karnataka – 586103',
    ],
    cta: { label: 'Open in Maps', href: 'https://maps.app.goo.gl/5Jmx4E2W' },
  },
  {
    icon: <Phone size={20} />,
    title: 'Call Us',
    lines: ['080502 81521'],
    cta: { label: 'Call Now', href: 'tel:08050281521' },
  },
  {
    icon: <Clock size={20} />,
    title: 'Hours',
    lines: ['Monday – Sunday', 'Open All Day · Closes 12 AM'],
    badge: 'We\'re Open Now',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="contact section-pad" id="contact" ref={ref} aria-label="Contact and location section">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label gold">Visit Us</span>
          </div>
          <h2 className="display-lg">
            Come In, <span className="gold-gradient">Stay a While</span>
          </h2>
          <p className="body-md" style={{ color: 'var(--clr-text-muted)', maxWidth: 420, margin: '0.75rem auto 0' }}>
            We're in the heart of Adarsh Nagar, Vijayapura — easy to find, impossible to forget.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info cards */}
          <div className="contact__info-col">
            {INFO_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                className="contact__card"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <div className="contact__card-icon" aria-hidden="true">{item.icon}</div>
                <div className="contact__card-body">
                  <h3 className="contact__card-title">{item.title}</h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="contact__card-line" style={{ color: j === 0 ? 'var(--clr-text)' : 'var(--clr-text-muted)' }}>
                      {line}
                    </p>
                  ))}
                  {item.badge && (
                    <span className="contact__badge">
                      <span className="contact__badge-dot" aria-hidden="true" />
                      {item.badge}
                    </span>
                  )}
                  {item.cta && (
                    <a
                      href={item.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__cta-link"
                      id={`contact-${item.title.toLowerCase().replace(' ', '-')}`}
                    >
                      {item.cta.label}
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              className="contact__social"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="label" style={{ color: 'var(--clr-text-muted)', marginBottom: '0.875rem' }}>Follow Us</p>
              <div className="contact__social-links">
                <a href="#" className="contact__social-btn" aria-label="Follow on Instagram" id="social-instagram">
                  <Camera size={18} />
                  Instagram
                </a>
                <a href="#" className="contact__social-btn" aria-label="Follow on Facebook" id="social-facebook">
                  <MessageCircle size={18} />
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            className="contact__map-wrap"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="contact__map-frame">
              <iframe
                title="Cafe In location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.842!2d75.7195!3d16.8302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d1b7c0c76fbb%3A0x1!2sCafe+In+Vijayapura!5e0!3m2!1sen!2sin!4v1697000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-overlay" aria-hidden="true" />
            </div>
            <a
              href="https://maps.app.goo.gl/5Jmx4E2W"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary contact__directions-btn"
              id="contact-directions-btn"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
