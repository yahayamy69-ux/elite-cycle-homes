import EstateFeatures from '../components/EstateFeatures';
import Footer from '../components/Footer';
import styles from './EstateFeatures.module.css';

function EstateFeaturesPage({ onNavigate }) {
  return (
    <>
      <main className={styles.page}>
        <h1 className={styles.title}>Estate Features</h1>
        <p className={styles.intro}>
          Premium amenities and infrastructure for elite living.
        </p>
        <EstateFeatures />
      </main>
      <Footer currentPage="features" onNavigate={onNavigate} />
    </>
  );
}

export default EstateFeaturesPage;
