import { useState, useEffect } from 'react';
import styles from './DisclaimerPopup.module.css';

const STORAGE_KEY = 'elite-cycle-disclaimer-seen';

function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) setVisible(true);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className={styles.modal}>
        <h2 id="disclaimer-title" className={styles.title}>Important Notice</h2>
        <p className={styles.text}>
          Elite Cycle Homes Limited does <strong>not</strong> accept payments for our services through personal bank accounts. 
          Please beware of scammers who may impersonate our company. Always verify payment details directly with us before making any transactions.
        </p>
        <button type="button" className={styles.btn} onClick={handleClose}>
          I Understand
        </button>
      </div>
    </div>
  );
}

export default DisclaimerPopup;
