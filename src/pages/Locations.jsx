import SiteLocations from '../components/SiteLocations';
import HouseModels from '../components/HouseModels';
import Footer from '../components/Footer';
import styles from './Locations.module.css';

function Locations({ onNavigate }) {
  return (
    <>
      <main className={styles.page}>
        <h1 className={styles.title}>Explore Listings</h1>
        <p className={styles.intro}>
          Our key estate locations in Abuja. Highlighting Katampe Extension and more.
        </p>
        <SiteLocations />
        <HouseModels />
      </main>
      <Footer currentPage="locations" onNavigate={onNavigate} />
    </>
  );
}

export default Locations;
