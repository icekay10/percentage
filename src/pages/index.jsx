import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({ users: 0, calculations: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const features = [
    {
      title: "Instant Results",
      description: "Get percentage calculations in milliseconds with our optimized engine.",
      icon: "⚡"
    },
    {
      title: "5 Calculation Types",
      description: "From basic percentages to increase/decrease calculations - all in one tool.",
      icon: "🔄"
    },
    {
      title: "Zero Data Collection",
      description: "Your calculations stay private. Nothing is stored or transmitted.",
      icon: "🛡️"
    },
    {
      title: "Mobile Friendly",
      description: "Works perfectly on any device - phone, tablet, or desktop.",
      icon: "📱"
    },
    {
      title: "No Registration",
      description: "Start calculating immediately - no sign-up or personal info required.",
      icon: "🆓"
    },
    {
      title: "Always Free",
      description: "No hidden fees, premium tiers, or subscription requirements. Ever.",
      icon: "💯"
    }
  ];

  const calculationExamples = [
    { type: "What is 15% of 200?", result: "30" },
    { type: "15 is what % of 60?", result: "25%" },
    { type: "Percentage change from 50 to 75?", result: "50% increase" },
    { type: "100 increased by 20%", result: "120" },
    { type: "80 decreased by 25%", result: "60" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const targetUsers = 500000;
    const targetCalculations = 2500000;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentUsers = 0;
    let currentCalculations = 0;
    const usersIncrement = targetUsers / steps;
    const calculationsIncrement = targetCalculations / steps;

    const timer = setInterval(() => {
      currentUsers += usersIncrement;
      currentCalculations += calculationsIncrement;
      
      setAnimatedNumbers({
        users: Math.min(Math.floor(currentUsers), targetUsers),
        calculations: Math.min(Math.floor(currentCalculations), targetCalculations)
      });

      if (currentUsers >= targetUsers && currentCalculations >= targetCalculations) {
        clearInterval(timer);
        setAnimatedNumbers({
          users: targetUsers,
          calculations: targetCalculations
        });
      }
    }, stepDuration);
  };

  return (
    <>
      <Head>
        <title>Free Percentage, Discount & Tip Calculator | Instant, Accurate & Private</title>
        <meta
          name="description"
          content="Calculate percentages, discounts, and tips instantly. No registration, always free, zero data collection. Trusted by over 500k users worldwide."
        />
        <meta name="keywords" content="percentage calculator, discount calculator, tip calculator, percent of number, percentage change, free online calculator" />
        <meta name="author" content="PercentageCalculator.app" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Free Percentage, Discount & Tip Calculator | Fast & Private" />
        <meta
          property="og:description"
          content="Lightning-fast, 100% free percentage, discount, and tip calculator. No sign-up, no tracking, works on all devices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.percentdiscountandtip.com/" />
        <meta property="og:image" content="https://www.percentdiscountandtip.com/images/og-calculator.jpg" />
        <meta property="og:image:alt" content="Free online percentage, discount, and tip calculator interface" />
        <meta property="og:site_name" content="PercentageCalculator.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Percentage, Discount & Tip Calculator | Always Free" />
        <meta
          name="twitter:description"
          content="Solve any percentage problem in seconds. Used by students, shoppers, and professionals daily."
        />
        <meta name="twitter:image" content="https://www.percentdiscountandtip.com/images/og-calculator.jpg" />
        <meta name="twitter:image:alt" content="Easy-to-use percentage calculator with clean UI" />

        <link rel="canonical" href="https://www.percentdiscountandtip.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Percentage, Discount & Tip Calculator",
              "url": "https://www.percentdiscountandtip.com/",
              "description": "A fast, accurate, and completely free web app for calculating percentages, discounts, and tips without collecting user data.",
              "applicationCategory": "Utilities",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1247"
              },
              "featureList": "5 calculation types: percentage of number, percentage change, reverse percentage, discount, tip"
            })
          }}
        />
      </Head>

      <div className={styles.homepageContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              The Ultimate <span className={styles.highlight}>Percentage, Discount, and Tip Calculators</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Fast, accurate, and completely free percentage, discount, and tip calculations for everyone - students, professionals, and everyday users.
            </p>
            <div className={styles.heroCta}>
              <Link href="/percentage-calculator" className={styles.ctaButton}>
                Start Calculating
              </Link>
              <Link href="/about" className={styles.ctaSecondary}>
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.statsSection} ref={statsRef}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{isVisible ? animatedNumbers.users.toLocaleString() : '0'}</div>
              <div className={styles.statLabel}>Happy Users</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Free to Use</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{isVisible ? animatedNumbers.calculations.toLocaleString() : '0'}</div>
              <div className={styles.statLabel}>Calculations Made</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>Data Collected</div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our Percentage, Discount, and Tip Calculators?</h2>
            <p className={styles.sectionDescription}>Designed with simplicity and functionality in mind</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onTouchStart={() => setActiveFeature(index)}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.examplesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common Percentage, Discount, and Tip Calculations</h2>
            <p className={styles.sectionDescription}>See how easy it is to solve everyday percentage, discount, and tip problems</p>
          </div>
          
          <div className={styles.examplesGrid}>
            {calculationExamples.map((example, index) => (
              <div className={styles.exampleCard} key={index}>
                <div className={styles.exampleType}>{example.type}</div>
                <div className={styles.exampleResult}>{example.result}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>Ready to Simplify Your Percentage, Discount, and Tip Calculations?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of users who trust our calculator for quick, accurate, and private percentage, discount, and tip calculations.
            </p>
            <Link href="/percentage-calculator" className={styles.ctaButtonLarge}>
              Start Calculating Now - It&apos;s Free!
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;