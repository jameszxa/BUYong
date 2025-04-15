import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[660px] w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1477&h=660&q=80"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-5xl font-bold mb-4">Discover Amazing Products</h1>
          <p className="text-white text-xl mb-8">Shop the latest trends with incredible deals</p>
          <button className="bg-[#FFAD33] text-white px-8 py-3 rounded-md hover:bg-[#FF9900] transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
