import { useState } from 'react';
import styles from './ContactSection.module.css';

const OFFICE_ADDRESS = 'NOVARE CENTRAL WUSE ZONE 5, ABUJA.';
const EMAIL = 'elitecyclehomesltd@gmail.com';
const PHONE = '0707 274 4865';
const INSTAGRAM = 'https://www.instagram.com/elitecyclehomes?igsh=dDMxeDRoaXBtcWtj&utm_source=qr';
const TIKTOK = 'https://www.tiktok.com/@elite.cycle?_r=1&_t=ZS-93xSOYXSGvN';
const FACEBOOK = 'https://www.facebook.com/share/18LkgaoEL9/?mibextid=wwXIfr';

const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88 2.06V9.4a6.84 6.84 0 0 0-5.91-2.8A6.83 6.83 0 0 0 4 17.25a6.84 6.84 0 0 0 6.89 6.66 6.86 6.86 0 0 0 6.12-3.67v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.wrap}>
        <div className={styles.info}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p className={styles.officeLabel}>Office address</p>
          <div className={styles.lines}>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`} className={styles.line} target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}><IconLocation /></span>
              <span>{OFFICE_ADDRESS}</span>
            </a>
          </div>
          <div className={styles.contactBlocks}>
            <div className={styles.contactBlock}>
              <span className={styles.contactBlockTitle}>Call us</span>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className={styles.contactBlockLink}>
                <IconPhone /> {PHONE}
              </a>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactBlockTitle}>Write us</span>
              <a href={`mailto:${EMAIL}`} className={styles.contactBlockLink}>
                <IconMail /> {EMAIL}
              </a>
            </div>
          </div>
          <p className={styles.socialLabel}>Follow us</p>
          <div className={styles.socialButtons}>
            <a href={INSTAGRAM} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram />
              <span>Instagram</span>
            </a>
            <a href={TIKTOK} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <IconTikTok />
              <span>TikTok</span>
            </a>
            <a href={FACEBOOK} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook />
              <span>Facebook</span>
            </a>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>Name</label>
          <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          <label className={styles.label}>Email</label>
          <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
          <label className={styles.label}>Phone</label>
          <input type="tel" name="phone" placeholder="0700 000 0000" value={form.phone} onChange={handleChange} />
          <label className={styles.label}>Message</label>
          <textarea name="message" placeholder="How can we help you?" rows={4} value={form.message} onChange={handleChange} required />
          <button type="submit">{submitted ? 'Message sent' : 'Send message'}</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
