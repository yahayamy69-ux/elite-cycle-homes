import styles from './Navbar.module.css';

function Navbar({ currentPage, onNavigate }) {
  const go = (page) => (e) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo} onClick={go('home')}>
        <img src="/logo.png" alt="Elite Cycle Homes" className={styles.logoImg} />
      </a>
      <ul className={styles.links}>
        <li><a href="/" onClick={go('home')} className={currentPage === 'home' ? styles.active : ''}>Home</a></li>
        <li><a href="/about" onClick={go('about')} className={currentPage === 'about' ? styles.active : ''}>About</a></li>
        <li><a href="/locations" onClick={go('locations')} className={currentPage === 'locations' ? styles.active : ''}>Explore Listings</a></li>
        <li><a href="/contact" onClick={go('contact')} className={currentPage === 'contact' ? styles.active : ''}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
