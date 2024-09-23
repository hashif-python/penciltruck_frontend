import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import GallerySection from './pages/GallerySection';
import Projects from './pages/Projects';
import SchoolOnWheels from './pages/SchoolOnWheels';
import StreetLight from './pages/StreetLight';
import Gallery from './pages/Gallery';
import Donate from './pages/DonateSection';
import PaymentScreen from './pages/PaymentScreen';
import DonatePage from './pages/DonateScreen';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/school-on-wheels", element: <SchoolOnWheels /> },
    { path: "/street-light", element: <StreetLight /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <AboutSection /> },
    { path: "/donate", element: <Donate /> },
    {path:"/donate-screen",element:<DonatePage/>},
    {path:"/payment",element:<PaymentScreen/>},
  ]);
  return routes;
};

const Home = () => (
  <>
    <HomeSection />
    <hr />
    <AboutSection />
    <hr />
    <Projects />
    <hr />
    <GallerySection />
    <hr />
    <Donate />
  </>
);

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <AppRoutes /> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;