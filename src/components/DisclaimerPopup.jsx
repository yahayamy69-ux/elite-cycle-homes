import { useState } from 'react';
import styles from './DisclaimerPopup.module.css';

function DisclaimerPopup() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className={styles.modal}>
        <h2 id="disclaimer-title" className={styles.title}>⚠️ IMPORTANT FRAUD ALERT</h2>
        
        <div className={styles.warningBox}>
          <p className={styles.warningText}>
            <strong>DO NOT PAY INTO PERSONAL ACCOUNTS</strong>
          </p>
          <p className={styles.warningText}>
            Elite Cycle Homes Limited does <strong>NOT</strong> accept payments through personal bank accounts, mobile money transfers to individuals, or cash payments to unofficial agents.
          </p>
        </div>

        <div className={styles.disclaimerBox}>
          <h3 className={styles.disclaimerTitle}>LEGAL DISCLAIMER</h3>
          <p className={styles.text}>
            Verify all payments through our official channels only:
          </p>
          <ul className={styles.contactList}>
            <li>📞 Phone: <strong>0707 274 4865</strong></li>
            <li>📧 Email: <strong>elitecyclehomesltd@gmail.com</strong></li>
            <li>📍 Office: <strong>NOVARE CENTRAL WUSE ZONE 5, ABUJA</strong></li>
          </ul>
          <p className={styles.text}>
            <strong>Liability Waiver:</strong> Elite Cycle Homes Limited is not responsible for any losses incurred through unauthorized third parties or fraudulent schemes. All transactions must be verified directly with our company before payment.
          </p>
        </div>

        <button type="button" className={styles.closeBtn} onClick={handleClose} aria-label="Close disclaimer">
          ✕
        </button>
      </div>
    </div>
  );
}

export default DisclaimerPopup;
