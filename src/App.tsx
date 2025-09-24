import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CategoryTabs from './components/CategoryTabs';
import VideoGrid from './components/VideoGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <CategoryTabs />
          <VideoGrid />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;