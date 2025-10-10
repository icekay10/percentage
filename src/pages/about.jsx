import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutCard}>
        <div className={styles.aboutHeader}>
          <h1 className={styles.aboutTitle}>About Percentage Calculator</h1>
          <p className={styles.aboutSubtitle}>Free, Private, and Easy-to-Use Percentage Calculations</p>
        </div>
        
        <div className={styles.aboutContent}>
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeading}>Our Mission</h2>
            <p className={styles.sectionText}>
              At Percentage Calculator, we believe that mathematical tools should be accessible to everyone—free of charge, 
              without hidden fees, and with complete respect for your privacy. We've created a simple yet powerful 
              percentage calculator that helps students, professionals, and everyday users solve math problems quickly 
              and accurately.
            </p>
          </section>
          
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeading}>Privacy First Approach</h2>
            <div className={styles.privacyFeatures}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔒</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>No Data Storage</h3>
                  <p className={styles.featureDescription}>We don't store any of your calculations or personal information. Your privacy is protected by design.</p>
                </div>
              </div>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🌐</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Client-Side Processing</h3>
                  <p className={styles.featureDescription}>All calculations happen right in your browser. Your data never leaves your device.</p>
                </div>
              </div>
              
              <div className={styles.feature}>
                <div className={styles.featureIcon}>👁️</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>No Tracking</h3>
                  <p className={styles.featureDescription}>We don't use cookies, analytics, or any other tracking mechanisms. Your usage remains private.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeading}>Completely Free Service</h2>
            <p className={styles.sectionText}>
              Our percentage calculator is completely free to use—now and forever. We don't show ads, 
              we don't have premium features, and we don't require registration. We believe that essential 
              math tools should be available to everyone without barriers.
            </p>
          </section>
          
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeading}>Who We Serve</h2>
            <div className={styles.audienceGrid}>
              <div className={styles.audienceItem}>
                <h3 className={styles.audienceTitle}>Students</h3>
                <p className={styles.audienceDescription}>Quickly solve percentage problems for homework, tests, and study sessions.</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 className={styles.audienceTitle}>Shoppers</h3>
                <p className={styles.audienceDescription}>Calculate discounts, sales tax, and tips with ease during shopping.</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 className={styles.audienceTitle}>Professionals</h3>
                <p className={styles.audienceDescription}>Handle financial calculations, data analysis, and business metrics efficiently.</p>
              </div>
              <div className={styles.audienceItem}>
                <h3 className={styles.audienceTitle}>Everyday Users</h3>
                <p className={styles.audienceDescription}>Solve common percentage problems that come up in daily life.</p>
              </div>
            </div>
          </section>
          
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeading}>Our Values</h2>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <span className={styles.valueNumber}>01</span>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>Simplicity</h3>
                  <p className={styles.valueDescription}>We design tools that are intuitive and easy to use for everyone.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueNumber}>02</span>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>Privacy</h3>
                  <p className={styles.valueDescription}>We respect your right to privacy and never collect your data.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueNumber}>03</span>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>Accessibility</h3>
                  <p className={styles.valueDescription}>We believe math tools should be free and available to all.</p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <span className={styles.valueNumber}>04</span>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>Accuracy</h3>
                  <p className={styles.valueDescription}>We ensure our calculations are precise and reliable.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={styles.aboutSection}>
            <h2 className={styles.sectionHeading}>Have Questions?</h2>
            <p className={styles.sectionText}>
              We're committed to providing the best possible experience for our users. 
              If you have any questions, suggestions, or feedback, we'd love to hear from you. 
              While we don't track users, you can reach out through our contact form (coming soon).
            </p>
          </section>
        </div> 
      </div>
    </div>
  );
};

export default AboutUs;