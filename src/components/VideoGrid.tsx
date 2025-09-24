import React from 'react';
import VideoCard from './VideoCard';

export default function VideoGrid() {
  // Sample video data
  const videos = [
    {
      title: "Amazing Nature Documentary: Wildlife in 4K",
      duration: "15:32",
      views: "2.1M views",
      thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2FFGGH3CGFS-adult-film-star-sexy-mia-khalifa-hot-cleavage-4x6-photograph-a5%3Fsrsltid%3DAfmBOooqNTCY8hzfVCZs5jPtvktRkaxg5m0whXGXgwMz-Cj-sQrFd4xy&psig=AOvVaw3aWGqLTNBqfv5KW5Vt5urj&ust=1758827511363000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjw9KyN8o8DFQAAAAAdAAAAABAE?auto=compress&cs=tinysrgb&w=400",
      channel: "Nature Films",
      uploadTime: "2 days ago"
    },
    {
      title: "Cooking Masterclass: Italian Pasta Techniques",
      duration: "22:45",
      views: "856K views",
      thumbnail: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Chef's Kitchen",
      uploadTime: "1 week ago"
    },
    {
      title: "Tech Review: Latest Smartphone Features",
      duration: "18:20",
      views: "1.5M views",
      thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Tech Today",
      uploadTime: "3 days ago"
    },
    {
      title: "Fitness Workout: Full Body Training",
      duration: "35:15",
      views: "923K views",
      thumbnail: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Fit Life",
      uploadTime: "5 days ago"
    },
    {
      title: "Travel Vlog: Exploring Ancient Cities",
      duration: "28:10",
      views: "1.2M views",
      thumbnail: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Wanderlust",
      uploadTime: "1 day ago"
    },
    {
      title: "Music Production: Beat Making Tutorial",
      duration: "42:33",
      views: "678K views",
      thumbnail: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Beat Makers",
      uploadTime: "4 days ago"
    },
    {
      title: "Art Tutorial: Digital Painting Basics",
      duration: "31:25",
      views: "445K views",
      thumbnail: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Digital Arts",
      uploadTime: "6 days ago"
    },
    {
      title: "Science Explained: Quantum Physics Made Simple",
      duration: "19:48",
      views: "2.3M views",
      thumbnail: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Science Hub",
      uploadTime: "2 weeks ago"
    },
    {
      title: "Gaming Review: Latest RPG Adventure",
      duration: "25:17",
      views: "1.8M views",
      thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Game Central",
      uploadTime: "3 days ago"
    },
    {
      title: "Home Design: Modern Interior Ideas",
      duration: "16:55",
      views: "734K views",
      thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Design Studio",
      uploadTime: "1 week ago"
    },
    {
      title: "Photography Tips: Portrait Lighting Techniques",
      duration: "21:30",
      views: "567K views",
      thumbnail: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Photo Pro",
      uploadTime: "5 days ago"
    },
    {
      title: "Business Strategy: Startup Success Stories",
      duration: "38:42",
      views: "892K views",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      channel: "Entrepreneur TV",
      uploadTime: "2 days ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
}
