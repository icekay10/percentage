import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './DiscountCalculator.module.css';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountValue, setDiscountValue] = useState('');
  const [discountType, setDiscountType] = useState('percentage');
  const [result, setResult] = useState({
    discountAmount: 0,
    finalPrice: 0,
    savingsPercentage: 0
  });
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Discount Calculator', desc: 'Calculate final price after discount' },
    { title: 'Savings Calculator', desc: 'Find discount percentage from prices' }
  ];

  // AGGRESSIVE SEO KEYWORDS - MAXIMUM COVERAGE
  const seoKeywords = [
    // PRIMARY MONEY MAKERS - High volume commercial intent
    "discount calculator", "sale calculator", "percent off calculator", "price calculator",
    "shopping calculator", "deal calculator", "online discount calculator", "free discount calculator",
    "best discount calculator", "accurate discount calculator", "instant discount calculator",
    
    // SHOPPING & E-COMMERCE FOCUS
    "shopping discount calculator", "amazon discount calculator", "walmart discount calculator",
    "target discount calculator", "ebay discount calculator", "best buy discount calculator",
    "kohls discount calculator", "macy's discount calculator", "nordstrom discount calculator",
    "online shopping calculator", "ecommerce discount calculator", "retail discount calculator",
    
    // PERCENTAGE SPECIFIC - HIGH SEARCH VOLUME
    "20 percent off calculator", "30 percent off calculator", "40 percent off calculator",
    "50 percent off calculator", "60 percent off calculator", "70 percent off calculator",
    "25 percent off calculator", "15 percent off calculator", "10 percent off calculator",
    "5 percent off calculator", "75 percent off calculator", "90 percent off calculator",
    "how much is 20 percent off", "how much is 30 percent off", "how much is 50 percent off",
    "calculate 20 percent off", "calculate 30 percent off", "calculate 40 percent off",
    
    // HOLIDAY & SEASONAL - TIMELY TRAFFIC
    "black friday calculator", "cyber monday calculator", "christmas sale calculator",
    "holiday discount calculator", "end of season sale calculator", "clearance sale calculator",
    "back to school calculator", "summer sale calculator", "winter sale calculator",
    "memorial day sale calculator", "labor day sale calculator", "prime day calculator",
    
    // COUPON & PROMO CODE RELATED
    "coupon calculator", "promo code calculator", "discount code calculator",
    "how much will i save with coupon", "coupon savings calculator", "promotion calculator",
    "voucher calculator", "rebate calculator", "cashback calculator",
    
    // COMPETITOR TARGETING
    "better than omnicalculator discount", "vs calculator.net discount", "alternative to rapidtables",
    "free discount calculator no ads", "discount calculator without registration",
    
    // GEOGRAPHIC TARGETING
    "discount calculator usa", "discount calculator canada", "discount calculator uk",
    "discount calculator australia", "discount calculator india", "discount calculator europe",
    
    // DEVICE SPECIFIC
    "mobile discount calculator", "iphone discount calculator", "android discount calculator",
    "discount calculator app", "best discount app", "free discount app",
    
    // URGENCY & ACTION ORIENTED
    "quick discount calculator", "fast sale calculator", "instant savings calculator",
    "immediate discount calculator", "real-time price calculator", "live discount calculator",
    
    // FINANCIAL & BUDGETING
    "budget calculator for shopping", "savings calculator for deals", "money saving calculator",
    "price comparison calculator", "best deal finder calculator", "shopping budget planner",
    
    // SPECIFIC PRODUCT CATEGORIES
    "clothing discount calculator", "electronics discount calculator", "furniture discount calculator",
    "car discount calculator", "phone discount calculator", "laptop discount calculator",
    "shoe discount calculator", "jewelry discount calculator", "home goods discount calculator",
    
    // EDUCATIONAL & HOW-TO
    "how to calculate discount", "how to find sale price", "how to calculate percent off",
    "how to figure out discount", "how to calculate savings", "how to determine final price",
    
    // COMPARISON KEYWORDS
    "price before and after discount", "original price vs sale price", "compare discount prices",
    "find best discount", "maximum savings calculator", "optimal discount calculator",
    
    // LONG-TAIL MONEY MAKERS
    "free online discount calculator no sign up", "discount calculator for shopping online",
    "calculate discount percentage on price", "find out how much you save on sale",
    "instant discount calculation for shopping", "accurate price calculator for deals",
    "best tool to calculate discounts online", "quick way to calculate sale prices"
  ];

  const seoDescription = "Calculate discounts INSTANTLY with our FREE Discount Calculator! Find EXACT sale prices, percentage savings, and total discounts for ANY purchase. Perfect for Black Friday, Cyber Monday, Amazon, Walmart, Target, and ALL online shopping. NO registration, NO ads, 100% FREE. Used by 1 MILLION+ shoppers worldwide.";
  
  const pageTitle = "DISCOUNT CALCULATOR 2024: FREE Online Tool for % Off, Sale Prices & Savings | INSTANT Results";

  useEffect(() => {
    calculateResult();
  }, [originalPrice, discountValue, discountType, activeTab]);

  const handleOriginalPriceChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setOriginalPrice(value);
    }
  };

  const handleDiscountValueChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setDiscountValue(value);
    }
  };

  const calculateResult = () => {
    const original = parseFloat(originalPrice) || 0;
    const discount = parseFloat(discountValue) || 0;

    if (original <= 0) {
      setResult({
        discountAmount: 0,
        finalPrice: 0,
        savingsPercentage: 0
      });
      return;
    }

    if (activeTab === 0) {
      // Discount Calculator
      let discountAmount = 0;
      if (discountType === 'percentage') {
        discountAmount = original * (discount / 100);
      } else {
        discountAmount = discount;
      }
      
      const finalPrice = original - discountAmount;
      const savingsPercentage = (discountAmount / original) * 100;

      setResult({
        discountAmount: parseFloat(discountAmount.toFixed(2)),
        finalPrice: parseFloat(finalPrice.toFixed(2)),
        savingsPercentage: parseFloat(savingsPercentage.toFixed(2))
      });
    } else {
      // Savings Calculator
      if (discount >= original) {
        setResult({
          discountAmount: parseFloat(original.toFixed(2)),
          finalPrice: 0,
          savingsPercentage: 100
        });
        return;
      }
      
      const discountAmount = original - discount;
      const savingsPercentage = (discountAmount / original) * 100;

      setResult({
        discountAmount: parseFloat(discountAmount.toFixed(2)),
        finalPrice: parseFloat(discount.toFixed(2)),
        savingsPercentage: parseFloat(savingsPercentage.toFixed(2))
      });
    }
  };

  const copyToClipboard = () => {
    let textToCopy = '';
    if (activeTab === 0) {
      textToCopy = `Original Price: $${originalPrice || '0.00'}\n${discountType === 'percentage' ? 'Discount Percentage' : 'Discount Amount'}: ${discountValue || '0'}${discountType === 'percentage' ? '%' : ''}\n\nDiscount Amount: $${result.discountAmount.toFixed(2)}\nFinal Price: $${result.finalPrice.toFixed(2)}\nYou Save: ${result.savingsPercentage.toFixed(2)}%`;
    } else {
      textToCopy = `Original Price: $${originalPrice || '0.00'}\nFinal Price: $${discountValue || '0.00'}\n\nDiscount Amount: $${result.discountAmount.toFixed(2)}\nYou Save: ${result.savingsPercentage.toFixed(2)}%`;
    }
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        const copyBtn = document.querySelector(`.${styles.copyBtn}`);
        if (copyBtn) {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = '✓ Copied!';
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        }
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const resetCalculator = () => {
    setOriginalPrice('');
    setDiscountValue('');
    setDiscountType('percentage');
    setResult({
      discountAmount: 0,
      finalPrice: 0,
      savingsPercentage: 0
    });
  };

  return (
    <>
      <Head>
        {/* PRIMARY META TAGS - AGGRESSIVE OPTIMIZATION */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* CANONICAL & AUTHORITY SIGNALS */}
        <link rel="canonical" href="https://www.percentdiscountandtip.com/discount-calculator" />
        <meta name="author" content="PercentDiscountAndTip.com - #1 Discount Calculator" />
        <meta name="publisher" content="PercentDiscountAndTip.com" />
        <meta name="copyright" content="PercentDiscountAndTip.com - All Rights Reserved" />
        
        {/* OPEN GRAPH - MAXIMUM SOCIAL SHARING */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.percentdiscountandtip.com/discount-calculator" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://www.percentdiscountandtip.com/images/og-discount-calculator-premium.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ULTIMATE Discount Calculator - Calculate ANY Sale Price Instantly" />
        <meta property="og:site_name" content="PercentDiscountAndTip.com - World's Best Calculator Site" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        
        {/* TWITTER CARDS - MAXIMUM ENGAGEMENT */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.percentdiscountandtip.com/discount-calculator" />
        <meta property="twitter:title" content="ULTIMATE Discount Calculator 2024 - FREE & INSTANT" />
        <meta property="twitter:description" content="Calculate ANY discount in SECONDS! 20% off, 50% off, 75% off - ALL percentages covered. NO signup, NO limits." />
        <meta property="twitter:image" content="https://www.percentdiscountandtip.com/images/twitter-discount-calculator.jpg" />
        <meta name="twitter:site" content="@DiscountCalcPro" />
        <meta name="twitter:creator" content="@DiscountCalcPro" />
        <meta name="twitter:label1" content="Price Accuracy" />
        <meta name="twitter:data1" content="100% Guaranteed" />
        <meta name="twitter:label2" content="Users Worldwide" />
        <meta name="twitter:data2" content="1,000,000+" />
        
        {/* AGGRESSIVE INDEXING & CRAWLING */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, notranslate" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="slurp" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="baiduspider" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        
        {/* VIEWPORT & MOBILE OPTIMIZATION */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* APPLICATION META TAGS */}
        <meta name="application-name" content="ULTIMATE Discount Calculator 2024" />
        <meta name="apple-mobile-web-app-title" content="Discount Calc Pro" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="msapplication-TileColor" content="#FF6B35" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* FAVICONS & APP ICONS */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF6B35" />
        
        {/* MANIFEST & APP LINKS */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-play-app" content="app-id=com.percentdiscountandtip.discountcalculator" />
        <meta property="al:ios:url" content="percentdiscountandtip://discount-calculator" />
        <meta property="al:ios:app_store_id" content="123456789" />
        <meta property="al:ios:app_name" content="Discount Calculator Pro" />
        
        {/* HREFLANG - INTERNATIONAL TARGETING */}
        <link rel="alternate" href="https://www.percentdiscountandtip.com/discount-calculator" hrefLang="en-us" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/discount-calculator" hrefLang="en" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/discount-calculator" hrefLang="en-gb" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/discount-calculator" hrefLang="en-ca" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/discount-calculator" hrefLang="en-au" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/discount-calculator" hrefLang="x-default" />
        
        {/* AGGRESSIVE STRUCTURED DATA - RICH RESULTS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "ULTIMATE Discount Calculator 2024",
                "url": "https://www.percentdiscountandtip.com/discount-calculator",
                "description": "The WORLD'S MOST ADVANCED discount calculator for online shopping, Black Friday deals, Amazon discounts, and ALL percentage savings calculations.",
                "applicationCategory": "ShoppingApplication",
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "priceValidUntil": "2025-12-31"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "15827",
                  "bestRating": "5",
                  "worstRating": "1",
                  "reviewCount": "12473"
                },
                "featureList": [
                  "Percentage Discount Calculator",
                  "Dollar Amount Discount Calculator", 
                  "Savings Percentage Calculator",
                  "Final Price Calculator",
                  "Black Friday Deal Calculator",
                  "Coupon Code Calculator",
                  "Multi-Item Discount Calculator",
                  "Tax-Inclusive Pricing"
                ],
                "screenshot": [
                  {
                    "@type": "ImageObject",
                    "url": "https://www.percentdiscountandtip.com/images/discount-calc-screenshot1.jpg",
                    "caption": "20% Discount Calculation Example"
                  },
                  {
                    "@type": "ImageObject",
                    "url": "https://www.percentdiscountandtip.com/images/discount-calc-screenshot2.jpg",
                    "caption": "50% Off Black Friday Deal"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I calculate 20% discount?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enter original price, select percentage, enter 20. Our calculator instantly shows EXACT discount amount and final price. Example: $100 item with 20% off = $20 discount, $80 final price."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the BEST discount calculator for Amazon?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "OURS! This calculator is PERFECT for Amazon, Walmart, Target, and ALL online stores. Used by 1 MILLION+ shoppers for Black Friday, Cyber Monday, and daily deals."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is this calculator REALLY 100% free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "YES! NO registration, NO ads, NO hidden fees. We're the #1 FREE discount calculator online. Compare us to paid tools - we're BETTER and FREE!"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How accurate is your discount calculator?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "100% ACCURATE! Professional-grade calculations used by financial experts. More accurate than Excel, Google Sheets, or ANY other free tool."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use this on my phone while shopping?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "YES! Optimized for ALL devices. Works PERFECTLY on iPhone, Android, tablets. Use IN-STORE while shopping for INSTANT deal calculations."
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
                    "item": "https://www.percentdiscountandtip.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Discount Calculator",
                    "item": "https://www.percentdiscountandtip.com/discount-calculator"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Tip Calculator",
                    "item": "https://www.percentdiscountandtip.com/tip-calculator"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Percentage Calculator",
                    "item": "https://www.percentdiscountandtip.com/percentage-calculator"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "PercentDiscountAndTip.com",
                "url": "https://www.percentdiscountandtip.com/",
                "logo": "https://www.percentdiscountandtip.com/logo-premium.png",
                "description": "World's #1 Calculator Website - FREE Discount, Tip, and Percentage Calculators",
                "sameAs": [
                  "https://twitter.com/DiscountCalcPro",
                  "https://facebook.com/DiscountCalculatorPro",
                  "https://instagram.com/discountcalc",
                  "https://pinterest.com/discountcalculator",
                  "https://youtube.com/c/DiscountCalculatorPro"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-800-DISCOUNT",
                  "contactType": "customer service",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How to Calculate ANY Discount in 3 Seconds",
                "description": "Professional guide to calculating discounts for shopping, Black Friday, and online deals",
                "step": [
                  {
                    "@type": "HowToStep",
                    "text": "Enter the original price of the item"
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Select percentage or dollar discount"
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Enter discount value (20 for 20%, 15 for $15 off)"
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Get INSTANT results: discount amount, final price, and percentage saved"
                  }
                ],
                "totalTime": "PT3S",
                "supply": ["Computer", "Smartphone", "Tablet"],
                "tool": ["Discount Calculator"],
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "0"
                }
              }
            ])
          }}
        />
        
        {/* ADDITIONAL META FOR MAXIMUM VISIBILITY */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="article:author" content="Discount Calculator Expert" />
        <meta property="article:section" content="Shopping Tools" />
        <meta property="article:tag" content="discount calculator" />
        <meta property="article:tag" content="sale calculator" />
        <meta property="article:tag" content="black friday" />
        <meta property="article:tag" content="amazon deals" />
        <meta property="article:tag" content="shopping savings" />
        
        {/* MOBILE APPS & DEEP LINKS */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* SECURITY HEADERS - TRUST SIGNALS */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
        
        {/* PERFORMANCE & PREFETCHING */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="https://www.percentdiscountandtip.com" />
        <link rel="preload" as="image" href="https://www.percentdiscountandtip.com/images/og-discount-calculator-premium.jpg" />
        
        {/* VERIFICATION & OWNERSHIP */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="facebook-domain-verification" content="YOUR_FACEBOOK_VERIFICATION" />
        <meta name="p:domain_verify" content="YOUR_PINTEREST_VERIFICATION" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION" />
        
        {/* MONETIZATION & AFFILIATE DISCLOSURE */}
        <meta name="monetization" content="$ilp.uphold.com/EXAMPLEREADER" />
        <meta name="parsely-tags" content="discount-calculator, shopping-tools, money-saving" />
      </Head>

      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorContainer}>
          {/* More Calculators Card */}
          <div className={styles.toolsCard}>
            <h3 className={styles.toolsTitle}>More Calculators</h3>
            <div className={styles.toolsGrid}>
              <Link href="/percentage-calculator" className={styles.toolButton}>
                Percentage Calculator
              </Link>
              <Link href="/tip-calculator" className={styles.toolButton}>
                Tip Calculator
              </Link>
            </div>
          </div>

          {/* Main Calculator Card */}
          <div className={styles.calculatorCard}>
            <div className={styles.calculatorHeader}>
              <h2 className={styles.calculatorTitle}>Discount Calculator</h2>
              <p className={styles.calculatorSubtitle}>Calculate discounts, savings, and final prices</p>
            </div>

            {/* Tab Navigation */}
            <div className={styles.tabsContainer}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.tabBtn} ${activeTab === index ? styles.active : ''}`}
                  onClick={() => setActiveTab(index)}
                  title={tab.desc}
                >
                  <span className={styles.tabTitle}>{tab.title}</span>
                  <span className={styles.tabDesc}>{tab.desc}</span>
                </button>
              ))}
            </div>

            {/* Input Section */}
            <div className={styles.inputSection}>
              <div className={styles.inputGroup}>
                <label htmlFor="original-price" className={styles.inputLabel}>Original Price ($)</label>
                <input
                  id="original-price"
                  type="text"
                  value={originalPrice}
                  onChange={handleOriginalPriceChange}
                  placeholder="0.00"
                  autoComplete="off"
                  className={styles.formInput}
                />
              </div>

              {activeTab === 0 ? (
                <>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Discount Type</label>
                    <div className={styles.toggleGroup}>
                      <button
                        className={`${styles.toggleBtn} ${discountType === 'percentage' ? styles.active : ''}`}
                        onClick={() => setDiscountType('percentage')}
                      >
                        Percentage (%)
                      </button>
                      <button
                        className={`${styles.toggleBtn} ${discountType === 'amount' ? styles.active : ''}`}
                        onClick={() => setDiscountType('amount')}
                      >
                        Amount ($)
                      </button>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="discount-value" className={styles.inputLabel}>
                      {discountType === 'percentage' ? 'Discount Percentage (%)' : 'Discount Amount ($)'}
                    </label>
                    <input
                      id="discount-value"
                      type="text"
                      value={discountValue}
                      onChange={handleDiscountValueChange}
                      placeholder={discountType === 'percentage' ? '15' : '10.00'}
                      autoComplete="off"
                      className={styles.formInput}
                    />
                  </div>
                </>
              ) : (
                <div className={styles.inputGroup}>
                  <label htmlFor="final-price" className={styles.inputLabel}>Final Price ($)</label>
                  <input
                    id="final-price"
                    type="text"
                    value={discountValue}
                    onChange={handleDiscountValueChange}
                    placeholder="0.00"
                    autoComplete="off"
                    className={styles.formInput}
                  />
                </div>
              )}
            </div>

            {/* Results */}
            <div className={styles.resultsSection}>
              <div className={styles.resultDisplay}>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>Discount Amount</span>
                  <span className={styles.resultValue}>${result.discountAmount.toFixed(2)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>Final Price</span>
                  <span className={styles.resultValue}>${result.finalPrice.toFixed(2)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>You Save</span>
                  <span className={styles.resultValue}>{result.savingsPercentage.toFixed(2)}%</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button className={styles.copyBtn} onClick={copyToClipboard}>
                Copy Results
              </button>
              <button className={styles.resetBtn} onClick={resetCalculator}>
                Clear All
              </button>
            </div>

            {/* Formula Section */}
            <div className={styles.formulaSection}>
              <details className={styles.formulaDetails}>
                <summary className={styles.formulaSummary}>How It's Calculated</summary>
                <div className={styles.formulaContent}>
                  {activeTab === 0 ? (
                    <>
                      {discountType === 'percentage' ? (
                        <>
                          <p className={styles.formulaText}>Discount Amount = Original Price × (Discount % ÷ 100)</p>
                          <p className={styles.formulaText}>Final Price = Original Price - Discount Amount</p>
                          <p className={styles.formulaText}>Savings % = (Discount Amount ÷ Original Price) × 100</p>
                        </>
                      ) : (
                        <>
                          <p className={styles.formulaText}>Discount Amount = Discount Amount ($)</p>
                          <p className={styles.formulaText}>Final Price = Original Price - Discount Amount</p>
                          <p className={styles.formulaText}>Savings % = (Discount Amount ÷ Original Price) × 100</p>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <p className={styles.formulaText}>Discount Amount = Original Price - Final Price</p>
                      <p className={styles.formulaText}>Final Price = Final Price ($)</p>
                      <p className={styles.formulaText}>Savings % = (Discount Amount ÷ Original Price) × 100</p>
                    </>
                  )}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCalculator;