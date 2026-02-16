import styles from './SiteLocations.module.css';

const LOCATIONS = [
  {
    title: 'Katampe Extension',
    description: 'Our flagship development. Premium smart homes in a strategic, high-value area — contemporary design and future-ready features for elite living.',
    image: '/location-4.png',
  },
  {
    title: 'Idu by Train Station',
    description: 'Prime location near transportation hub. Strategic investment opportunity with excellent connectivity and growth potential.',
    image: '/location-3.png',
  },
  {
    title: 'Apo/Gude District',
    description: 'Emerging development area with modern infrastructure. Ideal for families and professionals seeking quality living.',
    image: '/location-2.png',
  },
  {
    title: 'Karsana',
    description: 'Premium residential development in a well-planned district. Modern homes designed for contemporary lifestyles.',
    image: '/location-1.png',
  },
];

function SiteLocations() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Site Locations</h2>
      <div className={styles.grid}>
        {LOCATIONS.map((loc) => (
          <div key={loc.title} className={styles.card}>
            {loc.image && (
              <div className={styles.imageWrap}>
                <img src={loc.image} alt={loc.title} />
              </div>
            )}
            <div className={styles.body}>
              <h3>{loc.title}</h3>
              <p>{loc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SiteLocations;
