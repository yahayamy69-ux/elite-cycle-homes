import styles from './WhatWeDo.module.css';

function WhatWeDo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What We Do</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>🏠</div>
          <h3>Smart Homes in Katampe Extension</h3>
          <p>
            We provide premium smart homes located in Katampe Extension, designed for modern living and long-term value. Strategic location, contemporary design, and future-ready features — built for elite standards.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🚀</div>
          <h3>Built for Young, Business-Focused Individuals</h3>
          <p>
            Our properties are tailored for ambitious professionals and entrepreneurs who understand the power of smart investment. We create spaces that match your drive, lifestyle, and vision.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🤝</div>
          <h3>Reliability You Can Trust</h3>
          <p>
            Transparency, secure documentation, and a seamless process from start to finish. With Elite Cycle Homes, you're not just buying property — you're investing with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
