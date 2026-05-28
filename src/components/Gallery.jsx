import './Gallery.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const GALLERY_ITEMS = [
  { src: '/hero-bg.png', alt: 'Cafe In warm ambiance', span: 'wide' },
  { src: '/cold-coffee.png', alt: 'Signature Chocolate Cold Coffee' },
  { src: '/brownie.png', alt: 'Walnut Brownie with ice cream' },
  { src: '/interior.png', alt: 'Cafe In cozy interior', span: 'wide' },
  { src: '/moctail.png', alt: 'Colorful moctail' },
  { src: '/burger.png', alt: 'Gourmet cafe burger' },
  { src: '/sandwich.png', alt: 'Bombay sandwich' },
  { src: '/roll.png', alt: 'Paneer tikka roll' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery section-pad" id="gallery" ref={ref} aria-label="Gallery section">
      <div className="container">
        <div className="gallery__header">
          <div className="section-eyebrow">
            <span className="label gold">Gallery</span>
          </div>
          <h2 className="display-lg gallery__title">
            A Feast for the <span className="gold-gradient">Eyes</span>
          </h2>
          <p className="body-md gallery__subtitle" style={{ color: 'var(--clr-text-muted)' }}>
            Every visit to Cafe In is a visual and sensory delight.
          </p>
        </div>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              key={i}
              className={`gallery__item ${item.span === 'wide' ? 'gallery__item--wide' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} className="gallery__img" loading="lazy" />
              <div className="gallery__item-overlay" aria-hidden="true">
                <span className="gallery__item-label">{item.alt}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full view: ${lightbox.alt}`}
        >
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>
          <motion.img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox__img"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'backOut' }}
            onClick={e => e.stopPropagation()}
          />
          <p className="lightbox__caption">{lightbox.alt}</p>
        </motion.div>
      )}
    </section>
  );
}
