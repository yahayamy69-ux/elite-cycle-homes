import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './QuoteSection.module.css';

const QUOTE = '"Success in real estate is not about luck — it\'s about vision, strategic choices, and building lasting value. Every great property begins with a dream and ends with a legacy."';
const ATTRIBUTION = '— Engr Abubakar A Yahaya, CEO, Elite Cycle Homes';

function QuoteSection() {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <section ref={ref} className={styles.section} style={{ backgroundImage: 'url(/team-abubakar.png)' }}>
      <div className={styles.overlay} />
      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <blockquote className={styles.quote}>{QUOTE}</blockquote>
        <cite className={styles.attribution}>{ATTRIBUTION}</cite>
      </div>
    </section>
  );
}

export default QuoteSection;
