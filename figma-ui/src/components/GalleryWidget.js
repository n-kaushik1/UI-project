import React, { useState } from 'react';
import image1 from '../assets/img-camp.jpg';
import image2 from '../assets/img-ads.jpg';
import image3 from '../assets/img-adminstats.jpg';

function GalleryWidget() {
  const [images, setImages] = useState([image1, image2, image3]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Gallery</h2>
        <div>
          <label className="bg-green-500 p-2 rounded cursor-pointer">
            + Add Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-auto rounded"
            />
            <button
              onClick={() => handleImageDelete(index)}
              className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center"
              style={{ transform: 'translate(50%, -50%)' }}
              aria-label="Delete Image"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;
