import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>PercentDiscount&Tip</h3>
            <p className={styles.footerDescription}>
              Free, fast, and accurate percentage, discount, and tip calculator.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Tools</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <Link href="/percentage-calculator" className={styles.footerLink}>
                  Percentage Calculator
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/discount-calculator" className={styles.footerLink}>
                  Discount Calculator
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/tip-calculator" className={styles.footerLink}>
                  Tip Calculator
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/tip-calculators-stress-free-dining-and-service-payments" className={styles.footerLink}>
                  Tip Calculators: Stress-Free Dining and Service Payments
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/discount-calculators-save-more-while-shopping" className={styles.footerLink}>
                  Discount Calculators: Save More While Shopping
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/percentage-calculators-beyond-discounts-and-tips" className={styles.footerLink}>
                  Percentage Calculators Beyond Discounts and Tips
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/percentage-calculators-beyond-discounts-and-tips" className={styles.footerLink}>
                  Percentage Calculators Beyond Discounts and Tips
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/advanced-uses-of-percentage-calculators" className={styles.footerLink}>
                  Advanced Uses of Percentage Calculators
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/privacy-policy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} PercentDiscount&Tip. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;