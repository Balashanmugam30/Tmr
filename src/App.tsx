import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';

import { HomePage } from '@/pages/HomePage';
import { ServicesIndexPage } from '@/pages/ServicesIndexPage';
import { CarWashPage } from '@/pages/CarWashPage';
import { DetailingPage } from '@/pages/DetailingPage';
import { CeramicCoatingPage } from '@/pages/CeramicCoatingPage';
import { PpfPage } from '@/pages/PpfPage';
import { SunControlFilmsPage } from '@/pages/SunControlFilmsPage';
import { CarAccessoriesPage } from '@/pages/CarAccessoriesPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesIndexPage />} />
          <Route path="services/car-wash-cleaning" element={<CarWashPage />} />
          <Route path="services/detailing-paint-care" element={<DetailingPage />} />
          <Route path="services/ceramic-coating" element={<CeramicCoatingPage />} />
          <Route path="services/ppf-paint-protection" element={<PpfPage />} />
          <Route path="services/sun-control-films" element={<SunControlFilmsPage />} />
          <Route path="services/car-accessories" element={<CarAccessoriesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
