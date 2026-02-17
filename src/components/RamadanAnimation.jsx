import { useEffect, useState } from 'react';
import styles from './RamadanAnimation.module.css';

function RamadanAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.moon}></div>
        
        <div className={styles.stars}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={styles.star}
              style={{
                '--delay': `${i * 0.1}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.mainText}>Ramadan Mubarak</h1>
          <p className={styles.subText}>Blessed Ramadan</p>
          
          <div className={styles.lanterns}>
            <div className={styles.lantern}>🏮</div>
            <div className={styles.lantern}>🏮</div>
            <div className={styles.lantern}>🏮</div>
          </div>
        </div>

        <div className={styles.mosque}>🕌</div>
      </div>
    </div>
  );
}

export default RamadanAnimation;
