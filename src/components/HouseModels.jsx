import styles from './HouseModels.module.css';

const MODELS = ['/3d-model-1.png', '/3d-model-2.png', '/3d-model-3.png'];

function HouseModels() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our House Designs</h2>
      <p className={styles.sub}>Explore 3D models of our premium homes in Katampe Extension.</p>
      <div className={styles.grid}>
        {MODELS.map((img, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={img} alt={`3D model ${i + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HouseModels;
