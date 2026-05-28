// Basic Page Structure for Prototype
// Using Tailwind for a "Premium Foodie" vibe: Deep Greens, Gold accents, high-contrast white.

import React from 'react';

const PrototypeHome = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Berlin Naija Foodie</h1>
          <p className="text-xl mb-8 opacity-90">Authentic Naija Flavors, Delivered to Your Door.</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
            Order Now 🍲
          </button>
        </div>
      </header>

      {/* Menu Preview Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-stone-200 animate-pulse"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-xl">Jollof Special {i}</h3>
                  <span className="font-semibold text-emerald-700">€15.00</span>
                </div>
                <p className="text-slate-500 text-sm mb-4">Smoky, spicy, and perfectly seasoned. Served with plantain.</p>
                <button className="w-full py-2 px-4 bg-emerald-100 text-emerald-800 rounded-lg font-medium hover:bg-emerald-200 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrototypeHome;
