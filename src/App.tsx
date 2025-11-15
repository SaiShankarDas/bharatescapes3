import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/common/Loader';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ToursPage = lazy(() => import('./pages/ToursPage'));
const StaysPage = lazy(() => import('./pages/StaysPage'));
const WhereaboutsPage = lazy(() => import('./pages/WhereaboutsPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const TourRegistrationPage = lazy(() => import('./pages/TourRegistrationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="tours" element={<ToursPage />} />
              <Route path="stays" element={<StaysPage />} />
              <Route path="stays/whereabouts" element={<WhereaboutsPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="tour-registration" element={<TourRegistrationPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
