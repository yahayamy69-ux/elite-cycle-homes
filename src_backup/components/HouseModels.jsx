import { useEffect, useRef, useState } from 'react';
import styles from './HouseModels.module.css';

const MODELS = ['/3d-model-1.png', '/3d-model-2.png', '/3d-model-3.png'];

function HouseModels() {
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

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.heading}>Our House Designs</h2>
      <p className={styles.sub}>Explore 3D models of our premium homes in Katampe Extension.</p>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {MODELS.map((img, i) => (
          <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className={styles.imageWrap}>
              <img src={img} alt={`3D model ${i + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HouseModels;
