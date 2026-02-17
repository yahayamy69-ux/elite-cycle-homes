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
        <h2 className={styles.heading}>Join Elite Cycle Homes Associates Network</h2>
        <p className={styles.greeting}>Assalamu Alaikum and welcome!</p>
        
        <div className={styles.mainText}>
          <p>We're excited to have you on board. Elite Cycle Homes is a fast-growing real estate development company with active projects across <strong>Katampe Extension, Karsana, Idu, Apo-Gude, and ACO Lugbe</strong>, and we are expanding our team of serious, result-driven Sales Associates.</p>
        </div>

        <div className={styles.highlightBox}>
          <h3>💰 Commission-Based Opportunity</h3>
          <ul className={styles.benefitsList}>
            <li>7% commission on every successful sale</li>
            <li>Immediate payment after client confirmation</li>
            <li>Top performers may qualify for full-time employment</li>
            <li>5 confirmed Katampe sales earn an all-expenses-paid trip to Qatar 🇶🇦</li>
          </ul>
        </div>

        <div className={styles.mainText}>
          <p>You are free to source clients, attend inspections, and close deals independently, while we provide full support, materials, and closing assistance.</p>
          
          <h4 className={styles.subHeading}>📊 Marketing Support</h4>
          <p>We support serious marketing initiatives. If you need funding for any strategy (ads, outreach, events, promotions), kindly submit a brief proposal with your plan, target audience, expected outcome, and budget. Management will review and approve viable requests.</p>
          
          <p className={styles.closing}><strong>Let's stay professional, proactive, and focused on closing deals.</strong></p>
        </div>

        <a href="https://forms.gle/C7JzwtLfr7p9T6BA9" target="_blank" rel="noopener noreferrer" className={styles.joinBtn}>
          Join Us Today
        </a>

        <p className={styles.signature}>
          Welcome to the team.<br/>
          <strong>M.B. Laminu</strong><br/>
          Head of HR, Elite Cycle Homes Limited
        </p>
      </div>
    </section>
  );
}

export default AffiliateAgents;
