import { useEffect, useRef, useState } from 'react';
import styles from './MeetTheTeam.module.css';

const TEAM = [
  { name: 'Engr Abubakar', role: 'CEO', description: 'Driving vision and strategy for Elite Cycle Homes.', image: '/team-abubakar.png' },
  { name: 'Barr Khadija', role: 'Head of Legal', description: 'Head of Legal at Elite Cycle Homes.', image: null },
];

function MeetTheTeam() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.heading}>Meet the Team</h2>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {TEAM.map((member, i) => (
          <div key={member.name} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={styles.avatar}>
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <span className={styles.placeholder}>{member.name.charAt(0)}</span>
              )}
            </div>
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.desc}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;
