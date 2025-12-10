'use client';
import Link from 'next/link';
import Head from 'next/head';
import styles from './AboutUs.module.css';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Percentage Calculator</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to our homepage to calculate percentages instantly with our free, private calculator." 
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutHeader}>
            <h1 className={styles.aboutTitle}>404 - Page Not Found</h1>
            <p className={styles.aboutSubtitle}>Oops! Looks like you've wandered off the calculation path</p>
          </div>
          
          <div className={styles.aboutContent}>
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionHeading}>What Might Have Happened?</h2>
              <div className={styles.privacyFeatures}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🔍</div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Moved or Deleted</h3>
                    <p className={styles.featureDescription}>The page you're looking for may have been moved or removed from our site.</p>
                  </div>
                </div>
                
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>⌨️</div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Typo in URL</h3>
                    <p className={styles.featureDescription}>There might be a typo in the web address you entered.</p>
                  </div>
                </div>
                
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🔗</div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Outdated Link</h3>
                    <p className={styles.featureDescription}>The link you followed could be outdated or broken.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionHeading}>Get Back to Calculating</h2>
              <p className={styles.sectionText}>
                While this page isn't available, our percentage calculator is always ready to help. 
                Calculate discounts, tips, percentages, and more with our free, private tool.
              </p>
              <div className={styles.privacyHighlight}>
                <p className={styles.sectionText}>
                  <strong>Privacy First:</strong> All calculations happen in your browser. No data stored, no tracking, complete privacy.
                </p>
              </div>
            </section>
            
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionHeading}>Our Commitment to You</h2>
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <span className={styles.valueNumber}>01</span>
                  <div className={styles.valueContent}>
                    <h3 className={styles.valueTitle}>Always Free</h3>
                    <p className={styles.valueDescription}>Our percentage calculator remains completely free with no hidden fees or ads.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueNumber}>02</span>
                  <div className={styles.valueContent}>
                    <h3 className={styles.valueTitle}>Complete Privacy</h3>
                    <p className={styles.valueDescription}>Your calculations never leave your device. We respect your privacy.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueNumber}>03</span>
                  <div className={styles.valueContent}>
                    <h3 className={styles.valueTitle}>Instant Results</h3>
                    <p className={styles.valueDescription}>Get accurate percentage calculations in seconds, no registration required.</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueNumber}>04</span>
                  <div className={styles.valueContent}>
                    <h3 className={styles.valueTitle}>Accessible to All</h3>
                    <p className={styles.valueDescription}>Designed for students, shoppers, professionals, and everyday users.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionHeading}>Ready to Calculate?</h2>
              <p className={styles.sectionText}>
                Let's get you back to what you came for. Our percentage calculator is just one click away.
              </p>
              <div className={styles.ctaContainer}>
                <Link href="/" className={styles.ctaButton}>
                  Go to Percentage Calculator
                </Link>
                <p className={styles.ctaSubtext}>
                  Free • Private • No Sign-up Required
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Additional styles specific to 404 page */
        .privacyHighlight {
          background: rgba(102, 126, 234, 0.1);
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 30px 0;
          border-radius: 0 12px 12px 0;
        }

        .ctaContainer {
          text-align: center;
          margin-top: 40px;
          padding: 30px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border-radius: 16px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .ctaButton {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 18px 40px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          margin-bottom: 15px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .ctaButton:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .ctaButton:active {
          transform: translateY(-1px);
        }

        .ctaSubtext {
          font-size: 0.95rem;
          opacity: 0.9;
          margin-top: 10px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .privacyHighlight {
            padding: 15px;
            margin: 25px 0;
          }

          .ctaContainer {
            padding: 25px 20px;
            margin-top: 30px;
          }

          .ctaButton {
            padding: 16px 30px;
            font-size: 1rem;
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .privacyHighlight {
            padding: 12px;
            margin: 20px 0;
          }

          .ctaContainer {
            padding: 20px 15px;
            margin-top: 25px;
          }

          .ctaButton {
            padding: 14px 25px;
            font-size: 0.95rem;
          }
        }

        /* Focus states for accessibility */
        .ctaButton:focus-visible {
          outline: 3px solid rgba(102, 126, 234, 0.5);
          outline-offset: 3px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .ctaButton {
            transition: none;
          }
          
          .ctaButton:hover {
            transform: none;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .ctaButton:hover {
            transform: none;
          }
          
          .ctaButton:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </>
  );
};

export default Custom404;