import './Reviews.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya M.',
    avatar: '🌸',
    rating: 5,
    text: 'The chocolate cold coffee was absolutely great and I totally loved the ginger lemon tea! The ambiance is so cozy and perfect for a relaxing evening.',
    date: 'Recent',
  },
  {
    id: 2,
    name: 'Rahul K.',
    avatar: '☕',
    rating: 4,
    text: 'Good atmosphere, well-behaved staff and a really good cooperative team. You can tell everyone there genuinely cares about making your experience great. Well done!',
    date: 'Recent',
  },
  {
    id: 3,
    name: 'Sneha D.',
    avatar: '✨',
    rating: 5,
    text: 'Fantastic place! The walnut brownie was fudgy and divine. Definitely one of Vijayapura\'s best cafés. I keep coming back every week!',
    date: 'Recent',
  },
  {
    id: 4,
    name: 'Arun B.',
    avatar: '🍔',
    rating: 5,
    text: 'Loved the burgers and the moctails! Super fresh ingredients and the portions are very generous for the price. Great value for money.',
    date: 'Recent',
  },
  {
    id: 5,
    name: 'Kavya S.',
    avatar: '🌿',
    rating: 5,
    text: 'The Bombay sandwich is perfection — exactly how it should taste. Late-night visits after 10 PM are my favourite, the vibe is just unmatched.',
    date: 'Recent',
  },
];

function Stars({ rating }) {
  return (
    <div className="reviews__stars" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14} fill={i <= rating ? '#D47748' : 'none'} color="#D47748" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent(c => (c + 1) % REVIEWS.length);

  const getVisible = () => {
    const total = REVIEWS.length;
    return [
      REVIEWS[(current - 1 + total) % total],
      REVIEWS[current],
      REVIEWS[(current + 1) % total],
    ];
  };

  return (
    <section className="reviews section-pad" id="reviews" ref={ref} aria-label="Customer reviews">
      <div className="container">
        <motion.div
          className="reviews__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label gold">What Our Guests Say</span>
          </div>
          <h2 className="display-lg reviews__title">
            Stories Over <span className="gold-gradient">Coffee</span>
          </h2>
          <div className="reviews__aggregate">
            <span className="reviews__big-score gold">4.6</span>
            <div>
              <Stars rating={5} />
              <p className="body-sm" style={{ color: 'var(--clr-text-muted)', marginTop: '0.25rem' }}>
                Based on 68 reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="reviews__carousel"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          role="region"
          aria-label="Review carousel"
        >
          <div className="reviews__track">
            {getVisible().map((review, i) => (
              <div
                key={`${review.id}-${current}`}
                className={`reviews__card ${i === 1 ? 'reviews__card--active' : 'reviews__card--side'}`}
                aria-hidden={i !== 1}
              >
                <Quote size={28} className="reviews__quote-icon" aria-hidden="true" />
                <p className="reviews__text">"{review.text}"</p>
                <div className="reviews__author">
                  <span className="reviews__avatar" aria-hidden="true">{review.avatar}</span>
                  <div>
                    <strong className="reviews__name">{review.name}</strong>
                    <Stars rating={review.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews__controls">
            <button
              className="reviews__nav"
              onClick={prev}
              aria-label="Previous review"
              id="review-prev"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="reviews__dots" role="tablist" aria-label="Review navigation">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`reviews__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="reviews__nav"
              onClick={next}
              aria-label="Next review"
              id="review-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
