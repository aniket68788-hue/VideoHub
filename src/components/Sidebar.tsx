import React from 'react';
import { Home, TrendingUp, Clock, Heart, Bookmark, Settings } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: TrendingUp, label: 'Trending', active: false },
    { icon: Clock, label: 'Recent', active: false },
    { icon: Heart, label: 'Favorites', active: false },
    { icon: Bookmark, label: 'Watch Later', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const categories = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Documentary', 
    'Animation', 'Romance', 'Thriller', 'Adventure'
  ];

  return (
    <aside className="hidden lg:block w-64 bg-gray-900 min-h-screen p-4">
      {/* Main Navigation */}
      <nav className="space-y-2 mb-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              item.active 
                ? 'bg-orange-600 text-white' 
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Categories */}
      <div>
        <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">
          Categories
        </h3>
        <div className="space-y-1">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors text-sm"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}