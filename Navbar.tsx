import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import { useStore } from '../lib/store';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const user = useStore(state => state.user);
  const cart = useStore(state => state.cart);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully');
    }
  };

  return (
    <nav className="bg-[#FFC300] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[106px]">
          <div className="flex items-center gap-8">
            <img src="https://via.placeholder.com/123x33" alt="Logo" className="h-8" />
            <div className="hidden md:flex items-center gap-12">
              <a href="/" className="text-black hover:border-b border-black">Home</a>
              <a href="/contact" className="text-black hover:border-b border-black">Contact</a>
              <a href="/about" className="text-black hover:border-b border-black">About</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-[357px] h-12 pl-12 pr-4 rounded bg-white text-gray-600"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm">{user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="text-black hover:text-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={onAuthClick}
                  className="flex items-center gap-2 text-black hover:text-gray-700"
                >
                  <User className="w-6 h-6" />
                  <span>Sign In</span>
                </button>
              )}
              <div className="relative">
                <ShoppingCart className="w-6 h-6 cursor-pointer" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
