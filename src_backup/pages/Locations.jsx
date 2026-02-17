import { useState } from 'react';
import SiteLocations from '../components/SiteLocations';
import HouseModels from '../components/HouseModels';
import Footer from '../components/Footer';
import styles from './Locations.module.css';

function Locations({ onNavigate }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <main className={styles.page}>
        <div className={styles.hero} style={{ backgroundImage: 'url(/hero-bg.png)' }}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Explore Listings</h1>
            <p className={styles.intro}>
              Our key estate locations in Abuja. Highlighting Katampe Extension and more.
            </p>
            <div className={styles.searchWrap}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search listings"
              />
            </div>
          </div>
        </div>
        <SiteLocations search={search} />
        <HouseModels />
      </main>
      <Footer currentPage="locations" onNavigate={onNavigate} />
    </>
  );
}

export default Locations;
