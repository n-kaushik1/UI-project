// src/components/MainLayout.js
import React from 'react';
import AboutMeWidget from './AboutMeWidget';
import GalleryWidget from './GalleryWidget';

function MainLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200"></div>
      <div className="w-1/2 p-4 flex flex-col space-y-4">
        <AboutMeWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default MainLayout; // Ensure this is a default export
