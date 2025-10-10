import { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactCard}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact Us</h1>
          <p className={styles.contactSubtitle}>Get in touch with us - we'd love to hear from you</p>
        </div>
        
        <form 
          className={styles.contactForm}
          action="https://formsubmit.co/your@email.com" 
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New contact from Percentage Calculator!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
                placeholder="Your name"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="Message subject"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={styles.formTextarea}
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitBtn} ${isSubmitted ? styles.submitted : ''}`}
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              <>
                <span className={styles.checkmark}>✓</span>
                Message Sent!
              </>
            ) : (
              'Send Message'
            )}
          </button>
          
          {isSubmitted && (
            <div className={styles.successMessage}>
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          )}
        </form>
        
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📧</div>
            <div className={styles.infoContent}>
              <h4>Powered by FormSubmit</h4>
              <p>Secure form handling with instant delivery</p>
            </div>
          </div>
        </div>

        <div className={styles.contactFooter}>
          <p>We value your privacy • No data stored • Secure transmission</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;