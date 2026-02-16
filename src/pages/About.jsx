import Footer from '../components/Footer';
import styles from './About.module.css';

function About({ onNavigate }) {
  return (
    <>
      <main className={styles.page}>
        <h1 className={styles.title}>About Elite Cycle Homes</h1>
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            To redefine the real estate landscape in Abuja by delivering premium homes and investment opportunities for business-focused individuals. We combine smart properties with reliable ownership for elite living.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Our Vision</h2>
          <p>
            To be the trusted choice for young professionals and entrepreneurs seeking quality smart homes in prime locations like Katampe Extension, with transparency and secure documentation at every step.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why Trust Us</h2>
          <ul>
            <li>Transparency and secure documentation from start to finish</li>
            <li>Properties built for modern living and long-term value</li>
            <li>Tailored for ambitious, business-focused individuals</li>
            <li>Strategic locations and future-ready features</li>
          </ul>
        </section>
      </main>
      <Footer currentPage="about" onNavigate={onNavigate} />
    </>
  );
}

export default About;
