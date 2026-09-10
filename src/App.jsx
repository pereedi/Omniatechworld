import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import DeviceModal from './components/common/DeviceModal';

import HeroSection from './components/sections/HeroSection';
import ExplorePillars from './components/sections/ExplorePillars';
import ProductShowcase from './components/sections/ProductShowcase';
import SoundstageSection from './components/sections/SoundstageSection';
import CinematicVideoSection from './components/sections/CinematicVideoSection';
import DiscoveryMatrix from './components/sections/DiscoveryMatrix';
import ComparisonTable from './components/sections/ComparisonTable';
import TechnologySection from './components/sections/TechnologySection';
import KingsChatOrderHub from './components/sections/KingsChatOrderHub';

import { PRODUCTS } from './data/products';

export default function App() {
  const [modalProductId, setModalProductId] = useState(null);
  const [selectedOrderProduct, setSelectedOrderProduct] = useState(null);

  const activeProduct = PRODUCTS.find((p) => p.id === modalProductId) || null;

  const handleOpenDeviceModal = (productId) => {
    setModalProductId(productId);
  };

  const handleCloseDeviceModal = () => {
    setModalProductId(null);
  };

  const handleSelectOrder = (product) => {
    setSelectedOrderProduct(product);
  };

  return (
    <div className="w-full bg-surface min-h-screen flex flex-col antialiased text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Sticky Glassmorphic Header */}
      <Navbar
        onOpenChatOrder={() => setSelectedOrderProduct(null)}
        onOpenDeviceModal={handleOpenDeviceModal}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-1 flex flex-col">
        {/* 1. Hero Showcase Carousel */}
        <HeroSection onOpenDeviceModal={handleOpenDeviceModal} />

        {/* 2. Core Brand Explore Pillars */}
        <ExplorePillars />

        {/* 3. Flagship Smartphone Editorial Showcase */}
        <ProductShowcase onOpenDeviceModal={handleOpenDeviceModal} />

        {/* 4. Acoustic Purity & Tactile Craftsmanship */}
        <SoundstageSection />

        {/* 5. 16:9 4K Cinematic Launch Film & Video Controls */}
        <CinematicVideoSection />

        {/* 6. 4-Pillar Discovery Bento Matrix */}
        <DiscoveryMatrix />

        {/* 7. Side-by-Side Device Comparison Matrix */}
        <ComparisonTable onOpenDeviceModal={handleOpenDeviceModal} />

        {/* 8. Silicon Architecture & System Deep Dive */}
        <TechnologySection />

        {/* 9. KingsChat Direct Order & Experience Hub */}
        <KingsChatOrderHub selectedProduct={selectedOrderProduct} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenDeviceModal={handleOpenDeviceModal} />

      {/* Global Interactive Device Inspection Modal Drawer */}
      <DeviceModal
        product={activeProduct}
        isOpen={Boolean(activeProduct)}
        onClose={handleCloseDeviceModal}
        onSelectOrder={handleSelectOrder}
      />
    </div>
  );
}
