import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-[22px] h-[45px] bg-[#FFAD33] rounded"></div>
          <span className="text-lg font-semibold">Featured</span>
        </div>
        <h2 className="text-4xl font-semibold text-[#FF9900]">New Arrival</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-black rounded overflow-hidden col-span-1 lg:col-span-2 h-[678px] relative">
          <img 
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=577&h=577&q=80"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-9 text-white">
            <h3 className="text-2xl font-semibold mb-4">PlayStation 5</h3>
            <p className="mb-4 max-w-sm">Black and White version of the PS5 coming out on sale.</p>
            <button className="text-lg hover:underline">Shop Now</button>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-[#0D0D0D] rounded overflow-hidden h-[320px] relative">
            <img 
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=488&h=323&q=80"
              alt="Women's Collections"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-7 text-white">
              <h3 className="text-2xl font-semibold mb-4">Women's Collections</h3>
              <p className="mb-4">Featured woman collections that give you another vibe.</p>
              <button className="text-lg hover:underline">Shop Now</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {['Speakers', 'Perfume'].map((title, index) => (
              <div key={index} className="bg-black rounded overflow-hidden h-[320px] relative">
                <img 
                  src={index === 0 
                    ? "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=215&h=250&q=80"
                    : "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=227&h=229&q=80"
                  }
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="mb-2">{index === 0 ? 'Amazon wireless speakers' : 'GUCCI INTENSE OUD EDP'}</p>
                  <button className="text-lg hover:underline">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
