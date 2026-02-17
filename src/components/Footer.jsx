import styles from './Footer.module.css';

const MOTTO = 'Redefining the real estate landscape in Abuja, Elite Cycle Homes provides premium homes and investment opportunities for business-focused individuals. Smart properties. Reliable ownership. Elite living.';

function Footer({ currentPage, onNavigate }) {
  const go = (page) => (e) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <strong>Elite Cycle Homes</strong>
          <p className={styles.motto}>{MOTTO}</p>
        </div>
        <div className={styles.quick}>
          <strong>Quick Links</strong>
          <ul>
            <li><a href="/" onClick={go('home')}>Home</a></li>
            <li><a href="/about" onClick={go('about')}>About</a></li>
            <li><a href="/locations" onClick={go('locations')}>Explore Listings</a></li>
            <li><a href="/features" onClick={go('features')}>Estate Features</a></li>
            <li><a href="/contact" onClick={go('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Elite Cycle Homes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
