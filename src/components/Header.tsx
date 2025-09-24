import React, { useState } from 'react';
import { Search, Menu, User, Upload, Bell } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded"
            >
              <Menu size={20} />
            </button>
            <div className="text-2xl font-bold">
              <span className="text-orange-500">Video</span>
              <span className="text-white">Hub</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 px-4 pr-12 focus:outline-none focus:border-orange-500 focus:bg-gray-800"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition-colors">
              <Upload size={16} />
              <span className="text-sm font-medium">Upload</span>
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 px-4 pr-12 focus:outline-none focus:border-orange-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-orange-500 font-medium">Home</a>
            <a href="#" className="block py-2 hover:text-orange-500">Categories</a>
            <a href="#" className="block py-2 hover:text-orange-500">Popular</a>
            <a href="#" className="block py-2 hover:text-orange-500">New</a>
          </nav>
        </div>
      )}
    </header>
  );
}