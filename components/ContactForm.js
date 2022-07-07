import { useState } from "react";
import styles from '../styles/contactForm.module.css'
import Button from '../components/Button'
import { useContext } from "react";
import { ThemeContext } from "./Themes/ThemeContext";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  const {theme} = useContext(ThemeContext)

  if (submitted) {
    return (
      <div style={{textAlign: 'center'}} className={styles.submitted}>
        <h2>Merci !</h2>
        <p>Je vous recontacterai au plus vite 😊</p>
      </div>
    );
  }

  return (
    <form
      action={"https://public.herotofu.com/v1/eacd0c40-f2e2-11ec-8ed8-456386acdd98"}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className={theme ==='dark' ? styles.form : `${styles.form} ${styles.form_light}`}
    >
      <div>
        <p className={styles.title}>Parlez-moi de votre projet :</p>
        <input type="text" placeholder="Votre nom" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Votre message" name="message" required />
      </div>
      <div>
        <Button type='submit' className='contact_button' lightClassName='contactButton_light'>Envoyer un message</Button>
      </div>
    </form>
  );
};

export default ContactForm;