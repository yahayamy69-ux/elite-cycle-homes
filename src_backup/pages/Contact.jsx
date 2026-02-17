import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import styles from './Contact.module.css';

function Contact({ onNavigate }) {
  return (
    <>
      <main className={styles.page}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.intro}>
          Get in touch with our team. We're here to help with your property journey.
        </p>
      </main>
      <ContactSection />
      <Footer currentPage="contact" onNavigate={onNavigate} />
    </>
  );
}

export default Contact;
