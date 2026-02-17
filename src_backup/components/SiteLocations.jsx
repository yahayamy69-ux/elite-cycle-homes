import { useEffect, useRef, useState } from 'react';
import styles from './SiteLocations.module.css';

/* Picture 4=Apo, Picture 5=Katampe, Picture 6=Karsana, Picture 7=Idu */
const LOCATIONS = [
  {
    title: 'Katampe Extension',
    description: 'Our flagship development. Premium smart homes in a strategic, high-value area — contemporary design and future-ready features for elite living.',
    image: '/location-katampe.png',
  },
  {
    title: 'Idu by Train Station',
    description: 'Prime location near transportation hub. Strategic investment opportunity with excellent connectivity and growth potential.',
    image: '/location-idu.png',
  },
  {
    title: 'Apo/Gude District',
    description: 'Emerging development area with modern infrastructure. Ideal for families and professionals seeking quality living.',
    image: '/location-apoguide.png',
  },
  {
    title: 'Karsana',
    description: 'Premium residential development in a well-planned district. Modern homes designed for contemporary lifestyles.',
    image: '/location-karsana.png',
  },
];

function SiteLocations({ search = '' }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = search.trim()
    ? LOCATIONS.filter(
        (l) =>
          l.title.toLowerCase().includes(search.toLowerCase()) ||
          l.description.toLowerCase().includes(search.toLowerCase())
      )
    : LOCATIONS;

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.heading}>Site Locations</h2>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {filtered.map((loc, i) => (
          <div key={loc.title} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
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
