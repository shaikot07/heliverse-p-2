import React from 'react';

const HeroSection = () => {
    return (
        <div className="grid grid-rows-1 md:grid-rows-2">
        <div className="grid-row-1 flex items-center justify-center">
          <div className="flex flex-col space-y-4">
            <h1 className="text-white text-4xl">Transform Your Website</h1>
            <p className="text-white text-xl max-w-md">
              Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;