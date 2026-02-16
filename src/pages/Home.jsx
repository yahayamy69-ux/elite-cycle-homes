import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import MeetTheTeam from '../components/MeetTheTeam';
import SiteLocations from '../components/SiteLocations';
import PresentWorks from '../components/PresentWorks';
import HouseModels from '../components/HouseModels';
import CustomerReviews from '../components/CustomerReviews';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Home({ onNavigate }) {
  const goToListings = () => onNavigate('locations');

  return (
    <>
      <Hero onExploreListings={goToListings} />
      <WhatWeDo />
      <MeetTheTeam />
      <SiteLocations />
      <PresentWorks />
      <HouseModels />
      <CustomerReviews />
      <ContactSection />
      <Footer currentPage="home" onNavigate={onNavigate} />
    </>
  );
}

export default Home;
