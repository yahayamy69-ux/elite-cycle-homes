import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import EstateFeaturesPage from './pages/EstateFeatures';
import DisclaimerPopup from './components/DisclaimerPopup';
import './EliteCycleApp.css';

const PAGES = { home: Home, about: About, contact: Contact, locations: Locations, features: EstateFeaturesPage };

function EliteCycleApp() {
  const [page, setPage] = useState('home');
  const PageComponent = PAGES[page] || Home;

  return (
    <div className="elite-app">
      <DisclaimerPopup />
      <Navbar currentPage={page} onNavigate={setPage} />
      <PageComponent onNavigate={setPage} />
    </div>
  );
}

export default EliteCycleApp;
