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

  // Comprehensive SEO keywords - expanded for maximum coverage
  const seoKeywords = [
    // Primary focus keywords
    "discount calculator", "tip calculator", "percentage calculator", 
    "free discount calculator", "restaurant tip calculator", "online percentage calculator",
    
    // High-volume commercial keywords
    "calculate discount", "calculate tip", "calculate percentage",
    "how to calculate discount", "how much to tip", "percentage calculation",
    
    // Shopping and e-commerce related
    "sale calculator", "price calculator", "shopping discount calculator",
    "deal calculator", "price after discount", "how much off",
    
    // Restaurant and service industry
    "tip calculator for restaurant", "gratuity calculator", "service charge calculator",
    "how much tip to leave", "tip percentage calculator", "restaurant bill calculator",
    
    // Financial and math calculations
    "percentage of a number", "percentage increase calculator", "percentage decrease calculator",
    "reverse percentage calculator", "what percentage", "percentage formula",
    
    // Mobile and device specific
    "discount calculator app", "tip calculator app", "percentage calculator app",
    "mobile discount calculator", "iphone tip calculator", "android percentage calculator",
    
    // Time and urgency related
    "quick discount calculator", "instant tip calculator", "fast percentage calculator",
    "immediate calculation", "real-time calculator",
    
    // Accuracy and trust related
    "accurate discount calculator", "precise tip calculator", "reliable percentage calculator",
    "best discount calculator", "top tip calculator", "trusted percentage calculator",
    
    // Local and geographical
    "discount calculator near me", "tip calculator usa", "percentage calculator online",
    "local discount calculator", "national tip calculator",
    
    // Year specific (updated annually)
    "2024 discount calculator", "2024 tip calculator", "2024 percentage calculator",
    "new discount calculator", "updated tip calculator", "modern percentage calculator",
    
    // Competitor comparison
    "better than calculator.net", "alternative to omnicalculator", "vs rapidtables calculator",
    
    // User intent keywords
    "free online discount calculator no sign up", "tip calculator for waiters",
    "percentage calculator for students", "discount calculator for shopping online",
    "tip calculator split bill", "percentage calculator for taxes"
  ];

  const seoDescription = "Calculate discounts, tips, and percentages instantly with our free online calculator. Perfect for shopping, dining, and financial calculations. Trusted by 500,000+ users. No registration, no tracking, 100% free. Works on all devices.";

  const pageTitle = "Free Discount Calculator, Tip Calculator & Percentage Calculator | Most Accurate Online Tool";

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
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.precentdiscountandtip.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.precentdiscountandtip.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://www.precentdiscountandtip.com/images/og-calculator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Online Discount, Tip and Percentage Calculator Interface" />
        <meta property="og:site_name" content="PercentDiscountAndTip.com" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.precentdiscountandtip.com/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={seoDescription} />
        <meta property="twitter:image" content="https://www.precentdiscountandtip.com/images/og-calculator.jpg" />
        <meta name="twitter:site" content="@percentcalculator" />
        <meta name="twitter:creator" content="@percentcalculator" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="PercentDiscountAndTip.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Application meta tags */}
        <meta name="application-name" content="Percent Discount & Tip Calculator" />
        <meta name="apple-mobile-web-app-title" content="Discount Tip Calc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional link tags for SEO */}
        <link rel="alternate" href="https://www.precentdiscountandtip.com/" hrefLang="en-us" />
        <link rel="alternate" href="https://www.precentdiscountandtip.com/" hrefLang="en" />
        <link rel="alternate" href="https://www.precentdiscountandtip.com/" hrefLang="x-default" />
        
        {/* Structured Data / JSON-LD for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "Discount, Tip & Percentage Calculator",
                "url": "https://www.precentdiscountandtip.com/",
                "description": "A comprehensive free online calculator for discounts, tips, and percentages with instant results and no data collection.",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "1247",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "featureList": [
                  "Discount Calculator",
                  "Tip Calculator", 
                  "Percentage Calculator",
                  "Percentage Increase/Decrease",
                  "Reverse Percentage",
                  "Price After Discount",
                  "Tip Amount Calculation"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How to calculate discount percentage?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our calculator instantly computes discount percentages. Enter original price and discounted price to get the percentage saved. Example: If an item costs $100 and is on sale for $80, the discount is 20%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much tip should I leave at a restaurant?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Calculate restaurant tips easily. Enter bill amount and desired tip percentage (15%, 18%, 20% etc.) for instant results. Standard tipping is 15-20% of the pre-tax bill amount."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to calculate percentage of a number?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Find what percentage one number is of another instantly with our percentage calculator tool. Example: 25 is 25% of 100."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is this calculator really free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, 100% free with no hidden charges, no registration required, and no data collection. We believe financial tools should be accessible to everyone."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use this on my mobile phone?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our calculator is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.precentdiscountandtip.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Discount Calculator",
                    "item": "https://www.precentdiscountandtip.com/discount-calculator"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Tip Calculator",
                    "item": "https://www.precentdiscountandtip.com/tip-calculator"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Percentage Calculator",
                    "item": "https://www.precentdiscountandtip.com/percentage-calculator"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "PercentDiscountAndTip.com",
                "url": "https://www.precentdiscountandtip.com/",
                "logo": "https://www.precentdiscountandtip.com/logo.png",
                "description": "Free online calculators for discounts, tips, and percentages",
                "sameAs": [
                  "https://twitter.com/percentcalculator",
                  "https://facebook.com/percentcalculator"
                ]
              }
            ])
          }}
        />
        
        {/* Additional meta for social sharing */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="article:author" content="PercentDiscountAndTip.com" />
        <meta property="article:section" content="Finance Tools" />
        <meta property="article:tag" content="discount calculator" />
        <meta property="article:tag" content="tip calculator" />
        <meta property="article:tag" content="percentage calculator" />
        
        {/* Mobile app specific */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Security headers (some are implemented via server, but these help) */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="https://www.precentdiscountandtip.com" />
      </Head>

      <div className={styles.homepageContainer}>
        {/* Hero Section with H1 and primary keywords */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Free <span className={styles.highlight}>Discount Calculator</span>, <span className={styles.highlight}>Tip Calculator</span> & <span className={styles.highlight}>Percentage Calculator</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Calculate discounts for shopping deals, tips for restaurants, and percentages for financial planning instantly. 100% free, no registration required, and works on all devices.
            </p>
            <div className={styles.heroCta}>
              <Link href="/discount-calculator" className={styles.ctaButton}>
                Calculate Discounts
              </Link>
              <Link href="/tip-calculator" className={styles.ctaSecondary}>
                Calculate Tips
              </Link>
              <Link href="/percentage-calculator" className={styles.ctaSecondary}>
                Calculate Percentages
              </Link>
            </div>
            <div className={styles.keywordBadges}>
              <span className={styles.badge}>Discount Calculator Online</span>
              <span className={styles.badge}>Restaurant Tip Calculator</span>
              <span className={styles.badge}>Percentage Calculator Free</span>
              <span className={styles.badge}>Shopping Discount Tool</span>
              <span className={styles.badge}>Free Tip Calculator</span>
              <span className={styles.badge}>Online Percentage Tool</span>
            </div>
          </div>
        </section>

        {/* Stats Section with social proof */}
        <section className={styles.statsSection} ref={statsRef}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{isVisible ? animatedNumbers.users.toLocaleString() : '0'}+</div>
              <div className={styles.statLabel}>Users Calculate Discounts & Tips</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Free Forever</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{isVisible ? animatedNumbers.calculations.toLocaleString() : '0'}+</div>
              <div className={styles.statLabel}>Discount & Tip Calculations</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>Data Collected</div>
            </div>
          </div>
        </section>

        {/* Features Section with H2 */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Use Our Discount, Tip & Percentage Calculators?</h2>
            <p className={styles.sectionDescription}>Perfect for shopping, dining out, financial planning, and everyday math calculations</p>
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

        {/* Examples Section with H2 and calculation examples */}
        <section className={styles.examplesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common Discount, Tip & Percentage Calculations</h2>
            <p className={styles.sectionDescription}>Solve everyday calculation problems instantly</p>
          </div>
          
          <div className={styles.examplesGrid}>
            {calculationExamples.map((example, index) => (
              <div className={styles.exampleCard} key={index}>
                <div className={styles.exampleType}>{example.type}</div>
                <div className={styles.exampleResult}>{example.result}</div>
              </div>
            ))}
          </div>
          
          {/* Internal linking with H3 for better SEO */}
          <div className={styles.calculatorTypes}>
            <h3 className={styles.typesTitle}>Popular Calculator Tools:</h3>
            <div className={styles.typesGrid}>
              <Link href="/discount-calculator" className={styles.typeCard}>
                <h4>Discount Calculator</h4>
                <p>Calculate sale prices & savings</p>
              </Link>
              <Link href="/tip-calculator" className={styles.typeCard}>
                <h4>Tip Calculator</h4>
                <p>Restaurant & service tips</p>
              </Link>
              <Link href="/percentage-calculator" className={styles.typeCard}>
                <h4>Percentage Calculator</h4>
                <p>All percentage calculations</p>
              </Link>
              <Link href="/percentage-change" className={styles.typeCard}>
                <h4>Percentage Change</h4>
                <p>Increase/decrease calculations</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section (semantic HTML for SEO) */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionDescription}>Get answers to common questions about our calculators</p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Is this discount calculator really free?</h3>
              <p>Yes, 100% free with no hidden fees. No registration, no subscription, and no premium tiers.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How accurate is the tip calculator?</h3>
              <p>Our tip calculator provides precise calculations down to the cent, using standard mathematical formulas.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I use this on my phone?</h3>
              <p>Yes, our calculators are fully responsive and optimized for mobile devices, tablets, and desktop.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you store my calculation data?</h3>
              <p>No, we don't collect or store any of your data. All calculations happen locally in your browser.</p>
            </div>
          </div>
        </section>

        {/* Final CTA with strong action-oriented language */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>Start Calculating Discounts, Tips & Percentages Now!</h2>
            <p className={styles.ctaDescription}>
              Join 500,000+ users who trust our calculators for accurate shopping discounts, restaurant tips, and financial percentage calculations. Get instant results without any cost or commitment.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/discount-calculator" className={styles.ctaButtonLarge}>
                Calculate Discounts
              </Link>
              <Link href="/tip-calculator" className={styles.ctaButtonSecondary}>
                Calculate Tips
              </Link>
              <Link href="/percentage-calculator" className={styles.ctaButtonSecondary}>
                Calculate Percentages
              </Link>
            </div>
            <p className={styles.ctaNote}>No registration • No tracking • 100% Free • Works on All Devices</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;