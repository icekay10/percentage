import { useState } from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.privacyContainer}>
      <div className={styles.privacyCard}>
        <div className={styles.privacyHeader}>
          <h1 className={styles.privacyTitle}>Privacy Policy</h1>
        </div>
        
        <div className={styles.privacyContent}>
          <div className={styles.introSection}>
            <p className={styles.introText}>
              At Percentage Calculator, we are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our free online percentage calculator.
            </p>
          </div>
          
          {/* Section 1: No Data Collection */}
          <div className={styles.privacySection}>
            <button 
              className={styles.sectionHeader} 
              onClick={() => toggleSection(1)}
              aria-expanded={activeSection === 1}
            >
              <span className={styles.sectionTitle}>1. We Don't Collect or Store Any Personal Data</span>
              <span className={styles.expandIcon}>{activeSection === 1 ? '−' : '+'}</span>
            </button>
            <div className={`${styles.sectionContent} ${activeSection === 1 ? styles.expanded : ''}`}>
              <p>
                Our Percentage Calculator is designed to be completely anonymous. We do not collect, store, or process any personal information from our users. When you use our calculator:
              </p>
              <ul className={styles.sectionList}>
                <li>All calculations happen locally in your browser</li>
                <li>No data is sent to our servers</li>
                <li>We don't use cookies to track your activity</li>
                <li>We don't require account creation or login</li>
                <li>Your calculation history remains private on your device</li>
              </ul>
              <p>
                This means you can use our calculator with complete confidence that your data remains yours alone.
              </p>
            </div>
          </div>
          
          {/* Section 2: How Our Calculator Works */}
          <div className={styles.privacySection}>
            <button 
              className={styles.sectionHeader} 
              onClick={() => toggleSection(2)}
              aria-expanded={activeSection === 2}
            >
              <span className={styles.sectionTitle}>2. How Our Calculator Works</span>
              <span className={styles.expandIcon}>{activeSection === 2 ? '−' : '+'}</span>
            </button>
            <div className={`${styles.sectionContent} ${activeSection === 2 ? styles.expanded : ''}`}>
              <p>
                Our Percentage Calculator is a client-side application that runs entirely in your web browser. This means:
              </p>
              <ul className={styles.sectionList}>
                <li>All calculations are performed on your device</li>
                <li>No information about your calculations is transmitted over the internet</li>
                <li>The application works even when you're offline (once loaded)</li>
                <li>We have no way to identify or track individual users</li>
              </ul>
              <p>
                Since everything happens locally on your device, your privacy is inherently protected.
              </p>
            </div>
          </div>
          
          {/* Section 3: Third-Party Services */}
          <div className={styles.privacySection}>
            <button 
              className={styles.sectionHeader} 
              onClick={() => toggleSection(3)}
              aria-expanded={activeSection === 3}
            >
              <span className={styles.sectionTitle}>3. Third-Party Services</span>
              <span className={styles.expandIcon}>{activeSection === 3 ? '−' : '+'}</span>
            </button>
            <div className={`${styles.sectionContent} ${activeSection === 3 ? styles.expanded : ''}`}>
              <p>
                We may use minimal third-party services for analytics purposes, but these services are configured to respect your privacy:
              </p>
              <ul className={styles.sectionList}>
                <li>We use anonymized analytics to understand general usage patterns</li>
                <li>No personally identifiable information is collected</li>
                <li>IP addresses are anonymized or not collected</li>
                <li>We don't use advertising or tracking cookies</li>
              </ul>
              <p>
                If you prefer not to be included in our anonymous analytics, you can use browser extensions or settings to block these services.
              </p>
            </div>
          </div>
          
          {/* Section 4: Your Rights */}
          <div className={styles.privacySection}>
            <button 
              className={styles.sectionHeader} 
              onClick={() => toggleSection(4)}
              aria-expanded={activeSection === 4}
            >
              <span className={styles.sectionTitle}>4. Your Rights</span>
              <span className={styles.expandIcon}>{activeSection === 4 ? '−' : '+'}</span>
            </button>
            <div className={`${styles.sectionContent} ${activeSection === 4 ? styles.expanded : ''}`}>
              <p>
                Since we don't collect or store any personal data, there's no data for you to access, modify, or delete. However, you still have the following rights:
              </p>
              <ul className={styles.sectionList}>
                <li>You can stop using our calculator at any time</li>
                <li>You can clear your browser data to remove any locally stored information</li>
                <li>You can contact us with any privacy concerns (though we can't delete data we don't have)</li>
              </ul>
              <p>
                We believe in transparency and will always be honest about what data we do or don't collect.
              </p>
            </div>
          </div>
          
          {/* Section 5: Changes to This Policy */}
          <div className={styles.privacySection}>
            <button 
              className={styles.sectionHeader} 
              onClick={() => toggleSection(5)}
              aria-expanded={activeSection === 5}
            >
              <span className={styles.sectionTitle}>5. Changes to This Policy</span>
              <span className={styles.expandIcon}>{activeSection === 5 ? '−' : '+'}</span>
            </button>
            <div className={`${styles.sectionContent} ${activeSection === 5 ? styles.expanded : ''}`}>
              <p>
                We may update this Privacy Policy from time to time. If we ever decide to start collecting user data (which we currently have no plans to do), we will:
              </p>
              <ul className={styles.sectionList}>
                <li>Update this policy with clear explanations of what data we collect and why</li>
                <li>Provide notice of the changes on our website</li>
                <li>Give users the option to opt-in or opt-out of data collection</li>
                <li>Maintain our commitment to user privacy</li>
              </ul>
              <p>
                We recommend checking this page periodically for any updates.
              </p>
            </div>
          </div>                  
        </div>
        
        <div className={styles.privacyFooter}>
          <p>Thank you for using Percentage Calculator. We value your trust and are committed to protecting your privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;