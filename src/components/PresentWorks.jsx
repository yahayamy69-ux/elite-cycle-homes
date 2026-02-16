import styles from './PresentWorks.module.css';

const WORKS = ['/work-1.png', '/work-2.png', '/work-3.png', '/work-4.png', '/work-5.png', '/work-6.png'];

function PresentWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Present Works</h2>
      <p className={styles.subtitle}>Our ongoing development in Katampe Extension</p>
      <div className={styles.grid}>
        {WORKS.map((img, i) => (
          <div key={i} className={styles.card}>
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
