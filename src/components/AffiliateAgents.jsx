import { useEffect, useRef, useState } from 'react';
import styles from './AffiliateAgents.module.css';

function AffiliateAgents() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <h2 className={styles.heading}>Affiliate Agents</h2>
        <p className={styles.comingSoon}>Coming Soon</p>
        <p className={styles.desc}>Partner with Elite Cycle Homes. Our affiliate agent program is launching soon.</p>
      </div>
    </section>
  );
}

export default AffiliateAgents;
