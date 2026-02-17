import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './EstateFeatures.module.css';

const FEATURES = [
  {
    title: 'Central Security Room',
    description: '24/7 monitored central security operations for comprehensive estate safety.',
  },
  {
    title: 'Automatic Number Plate Recognition',
    description: 'ANPR systems at entry points for efficient access control and visitor management.',
  },
  {
    title: '24/7 Electricity',
    description: 'Uninterrupted power supply ensuring comfort and reliability around the clock.',
  },
  {
    title: 'Centralized Gas System',
    description: 'Safe, efficient centralized gas distribution for all residential units.',
  },
];

function EstateFeatures() {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section ref={ref} className={styles.section}>
      <h2 className={styles.heading}>Estate Features</h2>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {FEATURES.map((feature, i) => (
          <div key={feature.title} className={styles.card} style={{ transitionDelay: visible ? `${i * 0.1}s` : 0 }}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EstateFeatures;
