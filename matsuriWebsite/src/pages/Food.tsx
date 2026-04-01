import { useState } from 'react';
import './Food.css';

interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const foods: FoodItem[] = [
  { id: 'yakitori', name: 'Yakitori', description: 'Grilled chicken skewers with teriyaki glaze.', image: '/food/yakitori.avif' },
  { id: 'oyakodon', name: 'Oyakodon', description: 'Chicken and egg over rice in a sweet dashi broth.', image: '/food/oyakodon.avif' },
  { id: 'gyoza', name: 'Gyoza', description: 'Pan-fried dumplings with savory filling and crispy bottom.', image: '/food/gyoza.avif' },
  { id: 'okonomiyaki', name: 'Okonomiyaki', description: 'Savory Japanese pancake with cabbage, sauce and mayo.', image: '/food/okonomiyaki.avif' },
  { id: 'ichigo-daifuku', name: 'Ichigo Daifuku', description: 'Mochi stuffed with sweet red bean paste and a whole strawberry.', image: '/food/ichigo-daifuku.avif' },
  { id: 'onigiri', name: 'Onigiri', description: 'Rice balls wrapped in nori, filled with salmon or tuna.', image: '/food/onigiri.avif' },
  { id: 'spam-musubi', name: 'Spam Musubi', description: 'Grilled Spam on rice wrapped in nori.', image: '/food/spam-musubi.avif' },
  { id: 'yakisoba', name: 'Yakisoba', description: 'Stir-fried noodles with vegetables and savory sauce.', image: '/food/yakisoba.avif' },
  { id: 'taiyaki', name: 'Taiyaki', description: 'Fish-shaped waffle filled with red bean paste or nutella.', image: '/food/taiyaki.avif' },
  { id: 'takoyaki', name: 'Takoyaki', description: 'Octopus balls in a savory sauce.', image: '/food/takoyaki.avif' },
];

const drinks: FoodItem[] = [
  { id: 'matcha-latte', name: 'Matcha Latte', description: 'Creamy oat milk matcha latte.', image: '/drinks/matcha-latte.avif' },
  { id: 'matcha-float', name: 'Matcha Float', description: 'Matcha latte with a scoop of vanilla ice cream.', image: '/drinks/matcha-float.avif' },
  { id: 'water', name: 'Bottled Water', description: 'Cold, probably.', image: '/drinks/water.avif' },
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
              <h3 className="food-name">{item.name}</h3>
              <p className="food-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Food;
