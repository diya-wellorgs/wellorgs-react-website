import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { lazy, Suspense, useState } from 'react';

import CookiesSettings from './components/CookiesSettings';
import Footer from './components/footer/Footer';
import ParticleBackground from './components/hero/ParticleBackground';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [showCookieSettings, setShowCookieSettings] = useState(true);
  return (
    <BrowserRouter>
      <Navbar />

      <div className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* <Route
              path="/cookies"
              element={<CookiesSettings />}
            /> */}
          </Routes>
        </Suspense>
      </div>

      {/* {
      showCookieSettings && (
        <CookiesSettings showCookieBanner={showCookieSettings} setShowCookieBanner={setShowCookieSettings} />
      )
    } */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
