import React from 'react';

const CategoryShowcase = () => {
  return (
    <section className="bg-[#4D4D4D] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-medium leading-tight">Clean and fragrant soy wax</h2>
            <p className="text-lg">Made for your home and for your wellness</p>
            
            <div className="space-y-4">
              {[
                { title: 'Eco-sustainable:', desc: 'All recyclable materials, 0% CO2 emissions' },
                { title: 'Hyphoallergenic:', desc: '100% natural, human friendly ingredients' },
                { title: 'Handmade:', desc: 'All candles are craftly made with love.' },
                { title: 'Long burning:', desc: 'No more waste. Created for last long.' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-3.5 h-3.5 bg-white" />
                  <p>
                    <span className="font-medium">{item.title}</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <button className="bg-black text-white px-11 py-2 rounded">
              Learn more
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1602874801007-aa87a76542a3?auto=format&fit=crop&w=594&h=446&q=80"
              alt="Candle showcase"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
