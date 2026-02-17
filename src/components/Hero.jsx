import styles from './Hero.module.css';

function Hero({ onExploreListings }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: 'url(/hero-bg.png)' }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Elite Cycle Homes</h1>
        <p className={styles.motto}>
          Luxury living in strategic locations across Abuja
        </p>
        <button type="button" className={styles.cta} onClick={onExploreListings}>
          Explore Listings
        </button>
      </div>
    </section>
  );
}

export default Hero;
