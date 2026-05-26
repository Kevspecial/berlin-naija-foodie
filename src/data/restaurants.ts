export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
  location: string;
  phone: string;
  hours: string;
  menu: { name: string; price: string }[];
  specialty: string;
}

export const GOLDEN_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'The Naija Kitchen',
    cuisine: 'Traditional Nigerian',
    rating: 4.8,
    description: 'Authentic Jollof and Pounded Yam that tastes like home. The gold standard of Naija food in Berlin.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141fb2340?auto=format&fit=crop&w=800&q=80',
    tags: ['Jollof', 'Pounded Yam', 'Fine Dining'],
    location: 'Mitte, Berlin',
    phone: '+49 123 456 7890',
    hours: '11:00 AM - 10:00 PM',
    specialty: 'Smoky Party Jollof',
    menu: [
      { name: 'Party Jollof Rice', price: '€12.50' },
      { name: 'Pounded Yam & Egusi', price: '€18.00' },
      { name: 'Grilled Croaker Fish', price: '€22.00' },
    ],
  },
  {
    id: '2',
    name: 'Lagos Vibes Grill',
    cuisine: 'Grilled & Suya',
    rating: 4.5,
    description: 'The best Suya in the city. Smoky, spicy, and served with the perfect side of onions.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694483aa3?auto=format&fit=crop&w=800&q=80',
    tags: ['Suya', 'Grilled Fish', 'Street Food'],
    location: 'Kreuzberg, Berlin',
    phone: '+49 987 654 3210',
    hours: '4:00 PM - 11:00 PM',
    specialty: 'Beef Suya with Extra Spice',
    menu: [
      { name: 'Beef Suya Platter', price: '€15.00' },
      { name: 'Grilled Chicken Wings', price: '€11.00' },
      { name: 'Asun (Spicy Goat)', price: '€16.00' },
    ],
  },
  {
    id: '3',
    name: 'Egusi Palace',
    cuisine: 'Soups & Swallows',
    rating: 4.7,
    description: 'Specializing in rich Egusi and Okra soups. Heavy on the flavor, light on the wait time.',
    image: 'https://images.unsplash.com/photo-1504674900247-087707f67533?auto=format&fit=crop&w=800&q=80',
    tags: ['Egusi', 'Eba', 'Home-style'],
    location: 'Neukölln, Berlin',
    phone: '+49 555 444 3322',
    hours: '12:00 PM - 9:00 PM',
    specialty: 'Seafood Okra Soup',
    menu: [
      { name: 'Egusi Soup & Eba', price: '€17.00' },
      { name: 'Okra Soup & Fufu', price: '€17.00' },
      { name: 'Moin Moin (2pcs)', price: '€6.00' },
    ],
  }
];
