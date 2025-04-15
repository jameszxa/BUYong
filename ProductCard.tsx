import React from 'react';
import { Heart } from 'lucide-react';
import { useStore } from '../lib/store';
import toast from 'react-hot-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  original_price: number;
  discount?: number;
  rating: number;
  reviews_count: number;
  image_url: string;
}

const ProductCard = ({
  id,
  name,
  price,
  original_price,
  discount,
  rating,
  reviews_count,
  image_url
}: ProductCardProps) => {
  const { user, addToCart, loading } = useStore();

  const handleAddToCart = async () => {
    if (!user) {
      toast.error('Please sign in to add items to cart');
      return;
    }

    try {
      await addToCart(id, 1);
      toast.success('Added to cart!');
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative bg-[#F5F5F5] h-[250px] rounded overflow-hidden group">
        {discount && (
          <div className="absolute top-3 left-3 bg-[#FFAD33] text-white px-3 py-1 rounded">
            -{discount}%
          </div>
        )}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
          <Heart size={20} />
        </button>
        <div className="flex items-center justify-center h-full">
          <img src={image_url} alt={name} className="max-h-[180px] w-auto" />
        </div>
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {loading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium text-base">{name}</h3>
        <div className="flex gap-3">
          <span className="text-[#FF9900] font-medium">₱{price}</span>
          <span className="text-gray-500 line-through">₱{original_price}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-5 h-5 rounded ${
                  i < rating ? 'bg-[#FFAD33]' : 'bg-black bg-opacity-25'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-500">({reviews_count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
