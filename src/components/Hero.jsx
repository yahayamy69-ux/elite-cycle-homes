import styles from './Hero.module.css';

function Hero({ onExploreListings }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: 'url(/hero-bg.png)' }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Elite Cycle Homes</h1>
        <p className={styles.motto}>
          Redefining the real estate landscape in Abuja, Elite Cycle Homes provides premium homes and investment opportunities for business-focused individuals. Smart properties. Reliable ownership. Elite living.
        </p>
        <button type="button" className={styles.cta} onClick={onExploreListings}>
          Explore Listings
        </button>
      </div>
    </section>
  );
}

export default Hero;
