import './Menu.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const MENU_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'drinks', label: '☕ Drinks' },
  { id: 'bites', label: '🍔 Bites' },
  { id: 'desserts', label: '🍫 Desserts' },
];

const MENU_ITEMS = [
  { id: 1, name: 'Coffee (Hot & Cold)', desc: 'Rich espresso, lattes, and indulgent cold coffees blended to perfection.', price: '₹40–120', image: '/cold-coffee.png', tag: 'Bestseller', category: 'drinks' },
  { id: 2, name: 'Juices & Shakes', desc: 'Freshly squeezed juices and thick, creamy milkshakes in various flavors.', price: '₹60–140', image: '/cafe-juice.png', tag: 'Refreshing', category: 'drinks' },
  { id: 3, name: 'Mocktails', desc: 'Tropical layered mocktails with fresh fruit juices, soda & mint.', price: '₹80–140', image: '/moctail.png', tag: 'Popular', category: 'drinks' },
  { id: 4, name: 'Scoop of Ice Cream', desc: 'Single or double scoops of rich, premium ice cream.', price: '₹40–80', image: '/cafe-icecream.png', tag: '', category: 'desserts' },
  { id: 5, name: 'Sunday Ice Creams', desc: 'Loaded sundaes with nuts, syrups, and multiple scoops of joy.', price: '₹120–180', image: '/cafe-sundae.png', tag: 'Special', category: 'desserts' },
  { id: 6, name: 'Sandwiches', desc: 'Grilled to perfection, stuffed with spiced veggies, paneer, and melted cheese.', price: '₹60–120', image: '/sandwich.png', tag: 'Classic', category: 'bites' },
  { id: 7, name: 'Burgers', desc: 'Loaded sesame buns with crispy patties, fresh lettuce, and our secret sauce.', price: '₹100–180', image: '/burger.png', tag: "Chef's Pick", category: 'bites' },
  { id: 8, name: 'Rolls', desc: 'Soft wraps filled with smoky tikka, fresh veggies & tangy sauces.', price: '₹90–140', image: '/roll.png', tag: 'Filling', category: 'bites' },
  { id: 9, name: 'Bruschetta Rujutt', desc: 'Toasted artisan bread topped with our special flavorful mixtures.', price: '₹100–150', image: '/cafe-bruschetta.png', tag: 'Must Try', category: 'bites' },
  { id: 10, name: 'French Fries & Wedges', desc: 'Crispy, golden fries and seasoned potato wedges served hot.', price: '₹70–120', image: '/cafe-fries.png', tag: '', category: 'bites' },
  { id: 11, name: 'Side Appetizers & Starters', desc: 'A variety of delicious bite-sized starters to kick off your meal.', price: '₹90–160', image: '/cafe-appetizer.png', tag: '', category: 'bites' },
  { id: 12, name: 'Pasta (Penne & Spaghetti)', desc: 'Tossed in rich, creamy Alfredo or tangy Arrabbiata sauces.', price: '₹140–200', image: '/cafe-pasta.png', tag: '', category: 'bites' },
  { id: 13, name: 'Pizza', desc: 'Cheesy, thin-crust pizzas loaded with fresh vegetables and herbs.', price: '₹150–250', image: '/cafe-pizza.png', tag: 'Favourite', category: 'bites' },
  { id: 14, name: 'Soups & Salads', desc: 'Hearty, comforting soups and fresh, crisp salads.', price: '₹70–130', image: '/cafe-salad.png', tag: 'Healthy', category: 'bites' },
  { id: 15, name: 'Chaats', desc: 'Sweet, tangy, and spicy Indian street food classics.', price: '₹50–90', emoji: '🍲', tag: '', category: 'bites' },
  { id: 16, name: 'Desserts & Pastries', desc: 'Fudgy brownies, soft pastries, and sweet treats to end your meal.', price: '₹80–150', image: '/brownie.png', tag: '', category: 'desserts' },
];

function MenuCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="menu-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      id={`menu-item-${item.id}`}
    >
      <div className="menu-card__img-wrap">
        {item.image ? (
          <img src={item.image} alt={item.name} className="menu-card__img" loading="lazy" />
        ) : (
          <div className="menu-card__emoji-img" aria-label={item.name}>{item.emoji}</div>
        )}
        {item.tag && (
          <span className="menu-card__tag" aria-label={`Tag: ${item.tag}`}>{item.tag}</span>
        )}
      </div>
      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.desc}</p>
        <div className="menu-card__footer">
          <span className="menu-card__price gold">{item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(i => i.category === activeCategory);

  return (
    <section className="menu section-pad" id="menu" aria-label="Menu section">
      <div className="container">
        {/* Header */}
        <div className="menu__header">
          <div className="section-eyebrow">
            <span className="label gold">Our Menu</span>
          </div>
          <h2 className="display-lg menu__title">
            Crafted With <span className="gold-gradient">Passion</span>
          </h2>
          <p className="body-lg menu__subtitle">
            From soul-warming sips to satisfying bites — every item is made fresh, with love.
          </p>
          <div className="gold-divider" style={{ margin: '1.5rem auto' }} />
        </div>

        {/* Filter tabs */}
        <div className="menu__filters" role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`menu__filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              id={`filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="menu__grid">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Price range note */}
        <p className="menu__note body-sm">
          ✦ All prices are approximate. Menu subject to change. Budget-friendly options from ₹1.
        </p>
      </div>
    </section>
  );
}
