import React, { useState } from 'react';

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = [
    'All', 'Popular', 'New', 'Trending', 'Most Viewed', 'Top Rated', 'Recent'
  ];

  return (
    <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}