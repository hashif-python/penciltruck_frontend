import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import GallerySection from './pages/GallerySection';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import SchoolOnWheels from './pages/SchoolOnWheels';
import StreetLight from './pages/StreetLight';
import Gallery from './pages/Gallery';
import Donate from './pages/DonateSection.js';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <><HomeSection /><hr/><AboutSection /><hr/><Projects /><hr/><GallerySection />  <hr/><Donate /><hr/></> },
    { path: "/school-on-wheels", element: <SchoolOnWheels /> },
    { path: "/street-light", element: <StreetLight /> },
    { path: "/gallery", element: <Gallery /> },
    // Add more routes as needed
  ]);
  return routes; // This will render the route's element component
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />  
        <Footer />
      </div>
    </Router>
  );
}

export default App;
