import React, { useState } from 'react';
import { Search, MapPin, Star, Phone, Clock, Utensils, X } from 'lucide-react';
import { GOLDEN_RESTAURANTS, Restaurant } from '../data/restaurants';

export default function RestaurantDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const filteredRestaurants = GOLDEN_RESTAURANTS.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-yellow-50 text-slate-900 font-sans p-6">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12 py-10">
        <h1 className="text-5xl md:text-7xl font-black text-orange-600 mb-4 uppercase tracking-tighter">
          Berlin Naija <span className="text-green-600">Foodie</span>
        </h1>
        <p className="text-xl text-slate-600 font-medium">Find the most authentic Nigerian flavors in the heart of Berlin.</p>
      </header>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input 
          type="text"
          placeholder="Search for Jollof, Suya, or a restaurant..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-4 border-orange-500 bg-white text-lg font-bold shadow-[8px_8px_0px_0px_rgba(234,88,12,1)] focus:outline-none focus:ring-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Directory Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <div 
            key={restaurant.id} 
            onClick={() => setSelectedRestaurant(restaurant)}
            className="bg-white border-4 border-slate-900 rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group"
          >
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-56 object-cover border-b-4 border-slate-900 group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-black text-slate-900">{restaurant.name}</h2>
                <div className="flex items-center bg-yellow-400 px-2 py-1 rounded-lg border-2 border-slate-900 font-bold text-sm">
                  <Star className="h-3 w-3 mr-1 fill-slate-900" />
                  {restaurant.rating}
                </div>
              </div>
              <p className="text-orange-600 font-bold mb-3">{restaurant.cuisine}</p>
              <p className="text-slate-600 mb-4 line-clamp-2">{restaurant.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {restaurant.tags.map(tag => (
                  <span key={tag} className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md border border-green-200">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-slate-500 font-medium text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {restaurant.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl font-bold text-slate-400">No flavors found. Try searching for "Jollof"! 🦞</p>
        </div>
      )}

      {/* Detail Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border-4 border-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative h-64 w-full">
              <img src={selectedRestaurant.image} alt={selectedRestaurant.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedRestaurant(null)}
                className="absolute top-4 right-4 bg-white border-2 border-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-black text-slate-900">{selectedRestaurant.name}</h2>
                <div className="flex items-center bg-yellow-400 px-3 py-1 rounded-lg border-2 border-slate-900 font-bold">
                  <Star className="h-4 w-4 mr-1 fill-slate-900" />
                  {selectedRestaurant.rating}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center text-slate-700 font-bold text-lg">
                    <Phone className="h-5 w-5 mr-3 text-orange-600" />
                    {selectedRestaurant.phone}
                  </div>
                  <div className="flex items-center text-slate-700 font-bold text-lg">
                    <Clock className="h-5 w-5 mr-3 text-orange-600" />
                    {selectedRestaurant.hours}
                  </div>
                  <div className="flex items-center text-slate-700 font-bold text-lg">
                    <MapPin className="h-5 w-5 mr-3 text-orange-600" />
                    {selectedRestaurant.location}
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 border-2 border-orange-200 rounded-2xl">
                    <p className="text-orange-800 font-black uppercase text-sm mb-2">House Specialty</p>
                    <p className="text-xl font-bold text-slate-900">{selectedRestaurant.specialty}</p>
                  </div>
                </div>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Utensils className="h-5 w-5 mr-2 text-slate-600" />
                    <h3 className="text-xl font-black text-slate-900 uppercase">Quick Menu</h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedRestaurant.menu.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                        <span className="font-bold text-slate-700">{item.name}</span>
                        <span className="font-black text-orange-600">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t-2 border-slate-100">
                <p className="text-slate-600 italic font-medium leading-relaxed">
                  "{selectedRestaurant.description}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
