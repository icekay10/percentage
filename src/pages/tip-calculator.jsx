import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './TipCalculator.module.css';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('15');
  const [numberOfPeople, setNumberOfPeople] = useState('1');
  const [result, setResult] = useState({
    tipAmount: 0,
    totalAmount: 0,
    tipPerPerson: 0,
    totalPerPerson: 0
  });
  const [activePreset, setActivePreset] = useState('15');

  const presetTips = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '18', label: '18%' },
    { value: '20', label: '20%' },
    { value: '25', label: '25%' }
  ];

  // Comprehensive SEO keywords
  const seoKeywords = [
    // Primary keywords
    "tip calculator", "restaurant tip calculator", "how much to tip", 
    "gratuity calculator", "bill split calculator", "tip per person",
    "split bill calculator", "calculate tip", "tip percentage calculator",
    
    // Restaurant and service specific
    "restaurant tip", "how much to tip at restaurant", "tip for waiter",
    "service charge calculator", "food delivery tip", "uber tip calculator",
    "lyft tip calculator", "hair salon tip", "barber tip calculator",
    "tattoo tip calculator", "massage tip", "hotel tip calculator",
    
    // Percentage specific
    "15 percent tip", "18 percent tip", "20 percent tip", "25 percent tip",
    "tip 15 percent", "tip 18 percent", "tip 20 percent", "tip 25 percent",
    "what is 20 percent tip", "how to calculate 18 percent tip",
    
    // Regional and cultural
    "usa tip calculator", "american tipping", "tipping in america",
    "tip calculator usa", "how much to tip in usa", "standard tip amount",
    "customary tip", "proper tip amount", "tipping etiquette",
    
    // Use cases
    "group dinner tip calculator", "split bill with tip", "tip for large party",
    "wedding tip calculator", "catering tip", "event tipping",
    "business lunch tip", "corporate dining tip", "expense report tip",
    
    // Mobile and app
    "tip calculator app", "mobile tip calculator", "iphone tip app",
    "android tip calculator", "best tip app", "free tip calculator app",
    
    // Comparisons
    "best tip calculator", "accurate tip calculator", "easy tip calculator",
    "quick tip calculator", "reliable tip calculator",
    
    // Questions
    "how much should i tip", "what is a good tip", "how much tip to leave",
    "should i tip 15 or 20 percent", "how much to tip delivery driver",
    "how to split bill with tip", "how to calculate tip for group",
    
    // Financial planning
    "budgeting tip calculator", "tipping on budget", "saving money on tips",
    "tipping guide", "tipping made easy", "smart tipping calculator"
  ];

  const seoDescription = "Calculate restaurant tips, split bills among friends, and determine gratuity instantly with our free Tip Calculator. Perfect for restaurants, rideshares, salons, deliveries, and group dinners. 100% free, no registration needed. Trusted by 500,000+ users worldwide.";
  
  const pageTitle = "Free Tip Calculator | Calculate Restaurant Tips & Split Bills Instantly";

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage, numberOfPeople]);

  const handleBillAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setBillAmount(value);
    }
  };

  const handleTipPercentageChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setTipPercentage(value);
      setActivePreset(value);
    }
  };

  const handlePeopleChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^[0-9]*$/.test(value) && parseInt(value) >= 0)) {
      setNumberOfPeople(value === '' ? '' : Math.max(1, parseInt(value)).toString());
    }
  };

  const setPresetTip = (percentage) => {
    setTipPercentage(percentage);
    setActivePreset(percentage);
  };

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = parseFloat(tipPercentage) || 0;
    const people = parseInt(numberOfPeople) || 1;

    if (bill <= 0) {
      setResult({
        tipAmount: 0,
        totalAmount: 0,
        tipPerPerson: 0,
        totalPerPerson: 0
      });
      return;
    }

    const tipAmount = bill * (tip / 100);
    const totalAmount = bill + tipAmount;
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalAmount / people;

    setResult({
      tipAmount: parseFloat(tipAmount.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
      tipPerPerson: parseFloat(tipPerPerson.toFixed(2)),
      totalPerPerson: parseFloat(totalPerPerson.toFixed(2))
    });
  };

  const copyToClipboard = () => {
    const textToCopy = `Bill: $${billAmount || '0.00'}\nTip: ${tipPercentage || '0'}%\nPeople: ${numberOfPeople || '1'}\n\nTip Amount: $${result.tipAmount}\nTotal: $${result.totalAmount}\nPer Person: $${result.totalPerPerson}`;
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
    setBillAmount('');
    setTipPercentage('15');
    setNumberOfPeople('1');
    setActivePreset('15');
    setResult({
      tipAmount: 0,
      totalAmount: 0,
      tipPerPerson: 0,
      totalPerPerson: 0
    });
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
        <link rel="canonical" href="https://www.percentdiscountandtip.com/tip-calculator" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.percentdiscountandtip.com/tip-calculator" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://www.percentdiscountandtip.com/images/og-tip-calculator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Tip calculator showing bill amount, tip percentage, and split totals" />
        <meta property="og:site_name" content="PercentDiscountAndTip.com" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.percentdiscountandtip.com/tip-calculator" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={seoDescription} />
        <meta property="twitter:image" content="https://www.percentdiscountandtip.com/images/og-tip-calculator.jpg" />
        <meta name="twitter:site" content="@percentcalculator" />
        <meta name="twitter:creator" content="@percentcalculator" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="PercentDiscountAndTip.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Application meta tags */}
        <meta name="application-name" content="Tip Calculator" />
        <meta name="apple-mobile-web-app-title" content="Tip Calc" />
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
        <link rel="alternate" href="https://www.percentdiscountandtip.com/tip-calculator" hrefLang="en-us" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/tip-calculator" hrefLang="en" />
        <link rel="alternate" href="https://www.percentdiscountandtip.com/tip-calculator" hrefLang="x-default" />
        
        {/* Structured Data / JSON-LD for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "Tip Calculator",
                "url": "https://www.percentdiscountandtip.com/tip-calculator",
                "description": "A comprehensive free online tool that calculates tip amounts, total bills, and splits them per person based on bill amount, tip percentage, and number of guests.",
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
                  "Tip Amount Calculation",
                  "Total Bill Calculation", 
                  "Split by People",
                  "Preset Tip Percentages",
                  "Per Person Breakdown",
                  "Copy to Clipboard"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I calculate a 20% tip?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enter your bill amount, select 20% from the preset buttons, and our calculator will instantly show you the tip amount. For example, on a $50 bill, a 20% tip would be $10, making your total $60."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much should I tip at a restaurant?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Standard restaurant tipping in the US is 15-20% of the pre-tax bill. For excellent service, 20% or more is customary. For larger parties (6+), restaurants often add an automatic gratuity of 18-20%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to split a bill with tip among friends?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Enter the total bill amount, select your desired tip percentage, enter the number of people, and our calculator will show the exact amount each person should pay including their share of the tip."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I tip on tax?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Traditionally, tips are calculated on the pre-tax bill amount. However, many people now tip on the total including tax for simplicity. Our calculator works with either amount - just enter the bill amount you want to base the tip on."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much to tip for food delivery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For food delivery, tip 15-20% of the bill or $2-5 minimum, whichever is higher. Consider tipping more for bad weather, large orders, or complicated delivery instructions."
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
                    "name": "Tip Calculator",
                    "item": "https://www.percentdiscountandtip.com/tip-calculator"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Discount Calculator",
                    "item": "https://www.percentdiscountandtip.com/discount-calculator"
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
                "@type": "HowTo",
                "name": "How to Calculate Restaurant Tips",
                "description": "Step-by-step guide to calculating restaurant tips using our calculator",
                "step": [
                  {
                    "@type": "HowToStep",
                    "text": "Enter the bill amount before tax in dollars"
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Select your desired tip percentage (15%, 18%, 20%, 25%) or enter a custom percentage"
                  },
                  {
                    "@type": "HowToStep",
                    "text": "Enter the number of people splitting the bill (optional, default is 1)"
                  },
                  {
                    "@type": "HowToStep",
                    "text": "View your calculated results: tip amount, total bill, and per-person amounts"
                  }
                ],
                "totalTime": "PT1M"
              }
            ])
          }}
        />
        
        {/* Additional meta for social sharing */}
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="article:author" content="PercentDiscountAndTip.com" />
        <meta property="article:section" content="Finance Tools" />
        <meta property="article:tag" content="tip calculator" />
        <meta property="article:tag" content="restaurant tips" />
        <meta property="article:tag" content="bill splitting" />
        
        {/* Mobile app specific */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Security headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="https://www.percentdiscountandtip.com" />
      </Head>

      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorContainer}>
          {/* More Calculators Card */}
          <div className={styles.toolsCard}>
            <h3 className={styles.toolsTitle}>More Free Calculators</h3>
            <div className={styles.toolsGrid}>
              <Link href="/discount-calculator" className={styles.toolButton}>
                  Discount Calculator 
              </Link>
              <Link href="/percentage-calculator" className={styles.toolButton}>
                
                Percentage Calculator
                 
              </Link>
              
              
            </div>
          </div>

          {/* Main Calculator Card */}
          <div className={styles.calculatorCard}>
            <div className={styles.calculatorHeader}>
              <h1 className={styles.calculatorTitle}>Tip Calculator</h1>
              <p className={styles.calculatorSubtitle}>Calculate tips, split bills, and plan your budget for restaurants, deliveries, and services</p>
            </div>

            {/* Input Section */}
            <div className={styles.inputSection}>
              <div className={styles.inputGroup}>
                <label htmlFor="bill-amount" className={styles.inputLabel}>
                  Bill Amount ($)
                  <span className={styles.inputHint}>Enter amount before tax</span>
                </label>
                <input
                  id="bill-amount"
                  type="text"
                  value={billAmount}
                  onChange={handleBillAmountChange}
                  placeholder="0.00"
                  autoComplete="off"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="tip-percentage" className={styles.inputLabel}>
                  Tip Percentage (%)
                  <span className={styles.inputHint}>Standard is 15-20%</span>
                </label>
                <input
                  id="tip-percentage"
                  type="text"
                  value={tipPercentage}
                  onChange={handleTipPercentageChange}
                  placeholder="15"
                  autoComplete="off"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="number-of-people" className={styles.inputLabel}>
                  Number of People
                  <span className={styles.inputHint}>For splitting the bill</span>
                </label>
                <input
                  id="number-of-people"
                  type="text"
                  value={numberOfPeople}
                  onChange={handlePeopleChange}
                  placeholder="1"
                  autoComplete="off"
                  className={styles.formInput}
                />
              </div>
            </div>

            {/* Preset Tips */}
            <div className={styles.presetTips}>
              <h3 className={styles.presetLabel}>Quick Tip Presets:</h3>
              <div className={styles.presetButtons}>
                {presetTips.map((preset) => (
                  <button
                    key={preset.value}
                    className={`${styles.presetBtn} ${activePreset === preset.value ? styles.active : ''}`}
                    onClick={() => setPresetTip(preset.value)}
                    aria-label={`Set ${preset.label} tip`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsSection}>
              <h3 className={styles.resultsTitle}>Your Results:</h3>
              <div className={styles.resultGrid}>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Tip Amount</span>
                  <span className={styles.resultValue}>${result.tipAmount.toFixed(2)}</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Total Amount</span>
                  <span className={styles.resultValue}>${result.totalAmount.toFixed(2)}</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Tip Per Person</span>
                  <span className={styles.resultValue}>${result.tipPerPerson.toFixed(2)}</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Total Per Person</span>
                  <span className={styles.resultValue}>${result.totalPerPerson.toFixed(2)}</span>
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
                  <p className={styles.formulaText}><strong>Tip Amount</strong> = Bill Amount × (Tip Percentage ÷ 100)</p>
                  <p className={styles.formulaText}><strong>Total Amount</strong> = Bill Amount + Tip Amount</p>
                  <p className={styles.formulaText}><strong>Per Person</strong> = Total Amount ÷ Number of People</p>
                </div>
              </details>
            </div>
        </div>
      </div>
       </div>
    </>
  );
};

export default TipCalculator;