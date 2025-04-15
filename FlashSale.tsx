import React from 'react';
import ProductCard from './ProductCard';

const FlashSale = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 2000,
      originalPrice: 3060,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=172&h=152&q=80"
    },
    // Add more products...
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end gap-20 mb-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#FFAD33] rounded"></div>
            <span className="text-base font-semibold">Today's</span>
          </div>
          <h2 className="text-4xl font-semibold text-[#FF9900]">Flash Sales</h2>
        </div>
        <div className="flex gap-4 text-4xl">
          <span>03</span>
          <span>:</span>
          <span>23</span>
          <span>:</span>
          <span>19</span>
          <span>:</span>
          <span>59</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
