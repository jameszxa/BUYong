import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { supabase } from './lib/supabase';
import { useStore } from './lib/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlashSale from './components/FlashSale';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryShowcase from './components/CategoryShowcase';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const setUser = useStore(state => state.setUser);
  const loadCart = useStore(state => state.loadCart);

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email! });
        loadCart();
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email! });
        loadCart();
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser, loadCart]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FlashSale />
                <FeaturedProducts />
                <CategoryShowcase />
              </>
            } />
            {/* Add more routes here */}
          </Routes>
        </main>
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
