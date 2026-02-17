import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './CustomerReviews.module.css';

const REVIEWS = [
  { name: 'Nazir Ahmad', rating: 5, text: 'Outstanding experience from start to finish. Professional team and transparent process. Highly recommend Elite Cycle Homes.' },
  { name: 'Alhaji Bello', rating: 4.5, text: 'Quality homes in a great location. Documentation was clear and the team was very supportive throughout.' },
  { name: 'Abdallah Ali Dallah', rating: 4, text: 'Smart investment. The property in Katampe Extension meets exactly what we were looking for.' },
  { name: 'Shehu Umar Gandu', rating: 5, text: 'Elite Cycle Homes delivered on their promise. Reliable and trustworthy — will do business again.' },
  { name: 'Aminu Ibrahim', rating: 3.5, text: 'Good value and professional handling. Minor delays but overall satisfied with the outcome.' },
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => <span key={`f-${i}`} className={styles.starFull}>★</span>)}
      {half && <span className={styles.starHalf}>★</span>}
      {Array.from({ length: empty }, (_, i) => <span key={`e-${i}`} className={styles.starEmpty}>★</span>)}
    </div>
  );
}

function CustomerReviews() {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section ref={ref} className={styles.section}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {REVIEWS.map((review, i) => (
          <div key={review.name} className={styles.card} style={{ transitionDelay: visible ? `${i * 0.08}s` : 0 }}>
            <StarRating rating={review.rating} />
            <p className={styles.text}>"{review.text}"</p>
            <p className={styles.name}>— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
