import { useState } from 'react';
import PillNav from './components/PillNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import EstateFeaturesPage from './pages/EstateFeatures';
import DisclaimerPopup from './components/DisclaimerPopup';
import Chatbot from './components/Chatbot';
import './EliteCycleApp.css';

const PAGES = { home: Home, about: About, contact: Contact, locations: Locations, features: EstateFeaturesPage };

function EliteCycleApp() {
  const [page, setPage] = useState('home');
  const PageComponent = PAGES[page] || Home;

  const navItems = [
    { label: 'Home', href: '/', pageName: 'home' },
    { label: 'About', href: '/about', pageName: 'about' },
    { label: 'Explore Listings', href: '/locations', pageName: 'locations' },
    { label: 'Estate Features', href: '/features', pageName: 'features' },
    { label: 'Contact', href: '/contact', pageName: 'contact' },
  ];

  return (
    <div className="elite-app">
      <DisclaimerPopup />
      <PillNav
        logo="/logo.png"
        logoAlt="Elite Cycle Homes"
        items={navItems}
        currentPage={page}
        onNavigate={setPage}
        className="elite-navbar"
        baseColor="#2563eb"
        pillColor="#ffffff"
        pillTextColor="#2563eb"
        hoveredPillTextColor="#1e40af"
      />
      <PageComponent onNavigate={setPage} />
      <Chatbot />
    </div>
  );
}

export default EliteCycleApp;
