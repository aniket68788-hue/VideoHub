import React from 'react';
import { Play, Clock, Eye, Heart } from 'lucide-react';

interface VideoCardProps {
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  channel: string;
  uploadTime: string;
}

export default function VideoCard({ title, duration, views, thumbnail, channel, uploadTime }: VideoCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-800">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
          <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={48} />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-medium text-sm mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-gray-400 text-xs mb-2">
          <span className="hover:text-orange-500 cursor-pointer">{channel}</span>
          <span>{uploadTime}</span>
        </div>

        <div className="flex items-center justify-between text-gray-400 text-xs">
          <div className="flex items-center space-x-1">
            <Eye size={12} />
            <span>{views}</span>
          </div>
          <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Heart size={12} />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}