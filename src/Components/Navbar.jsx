import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navbar}`) && !event.target.closest(`.${styles.menuToggle}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Percentage Calculator', path: '/percentage-calculator' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <div className={styles.navbarLogo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoText}>PercentDiscount&Tip</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navbarItem}>
              <Link
                href={item.path}
                className={`${styles.navbarLink} ${isActive(item.path) ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;