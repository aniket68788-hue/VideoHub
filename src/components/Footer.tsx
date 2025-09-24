import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Video</span>
              <span className="text-white">Hub</span>
            </div>
            <p className="text-gray-400 mb-4">
              The world's leading video streaming platform. Discover, watch, and share amazing content from creators around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VideoHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}