import { useEffect, useRef, useState } from 'react';
import styles from './PresentWorks.module.css';

const WORKS = ['/work-1.png', '/work-2.png', '/work-3.png', '/work-4.png', '/work-5.png', '/work-6.png'];

function PresentWorks() {
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
      <h2 className={styles.heading}>Present Works</h2>
      <p className={styles.subtitle}>Our ongoing development in Katampe Extension</p>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {WORKS.map((img, i) => (
          <div key={i} className={styles.card} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className={styles.imageWrap}>
              <img src={img} alt={`Work in progress ${i + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PresentWorks;
