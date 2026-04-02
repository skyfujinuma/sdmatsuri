import { useState } from 'react';
import './Food.css';

interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

const foods: FoodItem[] = [
  { id: 'yakitori', name: 'Yakitori', description: 'Grilled chicken skewers with teriyaki glaze.', image: '/food/yakitori.avif', price: '3 tickets [1 stick]\n5 tickets [2 sticks]' },
  { id: 'oyakodon', name: 'Oyakodon', description: 'Chicken and egg over rice in a sweet dashi broth.', image: '/food/oyakodon.avif', price: '4 tickets' },
  { id: 'gyoza', name: 'Gyoza', description: 'Pan-fried dumplings with savory filling and crispy bottom.', image: '/food/gyoza.avif', price: '3 tickets [4 gyoza]' },
  { id: 'okonomiyaki', name: 'Okonomiyaki', description: 'Savory Japanese pancake with cabbage, sauce and mayo.', image: '/food/okonomiyaki.avif', price: '4 tickets' },
  { id: 'ichigo-daifuku', name: 'Ichigo Daifuku', description: 'Mochi stuffed with sweet red bean paste and a whole strawberry.', image: '/food/ichigo-daifuku.avif', price: '2 tickets' },
  { id: 'onigiri', name: 'Onigiri', description: 'Rice balls wrapped in nori, filled with salmon or tuna.', image: '/food/onigiri.avif', price: '3 tickets' },
  { id: 'spam-musubi', name: 'Spam Musubi', description: 'Grilled Spam on rice wrapped in nori.', image: '/food/spam-musubi.avif', price: '3 tickets' },
  { id: 'yakisoba', name: 'Yakisoba', description: 'Stir-fried noodles with vegetables and savory sauce.', image: '/food/yakisoba.avif', price: '3 tickets' },
  { id: 'taiyaki', name: 'Taiyaki', description: 'Fish-shaped waffle filled with red bean paste or nutella.', image: '/food/taiyaki.avif', price: '3 tickets' },
  { id: 'takoyaki', name: 'Takoyaki', description: 'Octopus balls in a savory sauce.', image: '/food/takoyaki.avif', price: '6 tickets [5 takoyakis]' },
];

const drinks: FoodItem[] = [
  { id: 'matcha-latte', name: 'Matcha Latte', description: 'Creamy oat milk matcha latte.', image: '/drinks/matcha-latte.avif', price: '4 tickets [16 oz]' },
  { id: 'matcha-float', name: 'Matcha Float', description: 'Matcha latte with a scoop of vanilla ice cream.', image: '/drinks/matcha-float.avif', price: '4 tickets [16 oz cups]' },
  { id: 'water', name: 'Bottled Water', description: 'Cold, probably.', image: '/drinks/water.avif', price: '' },
];

function Food() {
  const [tab, setTab] = useState<'food' | 'drink'>('food');
  const items = tab === 'food' ? foods : drinks;

  return (
    <div className="food">
      <div className="food-container">
        <h1>Food & Drink</h1>
        <p className="food-intro">
          Authentic Japanese dishes and drinks you can find at Matsuri.
        </p>

        <div className="food-drink-tabs">
          <button
            type="button"
            className={`tab-btn ${tab === 'food' ? 'active' : ''}`}
            onClick={() => setTab('food')}
          >
            Food
          </button>
          <button
            type="button"
            className={`tab-btn ${tab === 'drink' ? 'active' : ''}`}
            onClick={() => setTab('drink')}
          >
            Drink
          </button>
        </div>

        <div className="food-grid">
          {items.map((item) => (
            <div key={item.id} className="food-card">
              <div className="food-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="food-image"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;

                    // If AVIF fails in the browser, try the JPEG version once.
                    if (img.src.endsWith('.avif') && !img.dataset.fallbackTried) {
                      img.dataset.fallbackTried = 'true';
                      img.src = img.src.replace(/\.avif$/i, '.jpg');
                      return;
                    }

                    img.style.display = 'none';
                    img.nextElementSibling?.classList.add('visible');
                  }}
                />
                <div className="food-image-placeholder">Add photo</div>
              </div>
              <div className="food-name-row">
                <h3 className="food-name">{item.name}</h3>
                {item.price ? (
                  <span className="food-price">{item.price}</span>
                ) : null}
              </div>
              <p className="food-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Food;
