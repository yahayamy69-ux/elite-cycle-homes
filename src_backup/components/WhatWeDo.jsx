import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './WhatWeDo.module.css';

const ITEMS = [
  {
    title: 'Consultation',
    description: 'Our experts provide personalized property consultation to help you find the perfect investment. We assess your needs, budget, and goals to recommend the best options across our premium locations in Abuja.',
  },
  {
    title: 'Design and Automation',
    description: 'We offer cutting-edge architectural design and smart home automation. From modern floor plans to integrated systems for lighting, security, and climate control — we create homes that are both beautiful and intelligent.',
  },
  {
    title: 'Construction',
    description: 'Elite Cycle Homes delivers quality construction with attention to detail. We use premium materials and adhere to strict standards, ensuring every project meets our commitment to excellence and durability.',
  },
  {
    title: 'Project Management',
    description: 'From planning to delivery, our project management team oversees every phase. We coordinate timelines, contractors, and resources so your project stays on track and meets the highest standards.',
  },
  {
    title: 'Smart Investment',
    description: 'We help clients make informed real estate decisions. Our team provides market insights, investment analysis, and guidance on properties that offer strong returns and long-term value in Abuja\'s growing market.',
  },
];

function WhatWeDo() {
  const [expanded, setExpanded] = useState(null);
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section ref={ref} className={styles.section}>
      <h2 className={styles.heading}>What We Do</h2>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            className={`${styles.card} ${expanded === item.title ? styles.expanded : ''}`}
            style={{ transitionDelay: visible ? `${i * 0.08}s` : 0 }}
            onClick={() => setExpanded(expanded === item.title ? null : item.title)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setExpanded(expanded === item.title ? null : item.title);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <h3>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
