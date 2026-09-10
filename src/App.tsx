import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { CartProvider } from './context/CartContext';
import { ComingSoonModalProvider } from './context/ComingSoonModalContext';
import { WelcomeProvider, useWelcome } from './context/WelcomeContext';
import { MainLayout } from './components/MainLayout';
import { WelcomeScreen } from './components/WelcomeScreen';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProfileLayout } from './pages/profile/ProfileLayout';
import { ProfilePersonalInfoPage } from './pages/profile/ProfilePersonalInfoPage';
import { ProfileAddressesPage } from './pages/profile/ProfileAddressesPage';
import { ProfileOrdersPage } from './pages/profile/ProfileOrdersPage';
import { ProfileSettingsPage } from './pages/profile/ProfileSettingsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
  const { showWelcome, closeWelcome } = useWelcome();

  return (
    <>
      {/* Welcome splash screen on initial landing or when clicking ECOMANZA logo */}
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onEnter={closeWelcome} />
        )}
      </AnimatePresence>

      {/* Semantic Hierarchical Routing Architecture */}
      <Routes>
        {/* Root redirect to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Main Layout containing Header, Outlet, Cart Drawer & Footer */}
        <Route path="/home" element={<MainLayout />}>
          {/* Primary Landing / Home */}
          <Route index element={<HomePage />} />

          {/* Catalog & Product Detail routes */}
          <Route path="productos" element={<ProductsPage />} />
          <Route path="productos/:id" element={<ProductDetailPage />} />

          {/* User Account / Profile Area with Nested Sub-routes */}
          <Route path="perfil" element={<ProfileLayout />}>
            <Route index element={<Navigate to="datos" replace />} />
            <Route path="datos" element={<ProfilePersonalInfoPage />} />
            <Route path="direcciones" element={<ProfileAddressesPage />} />
            <Route path="pedidos" element={<ProfileOrdersPage />} />
            <Route path="ajustes" element={<ProfileSettingsPage />} />
          </Route>

          {/* Thematic Brand Routes */}
          <Route path="sostenibilidad" element={<SustainabilityPage />} />
          <Route path="contacto" element={<ContactPage />} />

          {/* Catch-all 404 inside layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Fallback for any other top-level unmatched path */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WelcomeProvider>
        <CartProvider>
          <ComingSoonModalProvider>
            <AppContent />
          </ComingSoonModalProvider>
        </CartProvider>
      </WelcomeProvider>
    </BrowserRouter>
  );
}
