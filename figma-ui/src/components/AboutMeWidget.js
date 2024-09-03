// src/components/AboutMeWidget.js
import React, { useState } from 'react';

function AboutMeWidget() {
  const [activeTab, setActiveTab] = useState('aboutMe');

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4">
      {/* Tab buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('aboutMe')}
          className={`p-2 ${activeTab === 'aboutMe' ? 'bg-gray-700' : ''}`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab('experiences')}
          className={`p-2 ${activeTab === 'experiences' ? 'bg-gray-700' : ''}`}
        >
          Experiences
        </button>
        <button
          onClick={() => setActiveTab('recommended')}
          className={`p-2 ${activeTab === 'recommended' ? 'bg-gray-700' : ''}`}
        >
          Recommended
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'aboutMe' && <div>Hello! this is aboutMe tab.</div>}
        {activeTab === 'experiences' && <div>Experiences content goes here...</div>}
        {activeTab === 'recommended' && <div>Recommended content goes here...</div>}
      </div>
    </div>
  );
}

export default AboutMeWidget; // Ensure this is a default export
