import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './PercentageCalculator.module.css';

const PercentageCalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [inputs, setInputs] = useState({ x: '', y: '' });
  const [result, setResult] = useState('Enter values to calculate');
  const [formula, setFormula] = useState('');

  const tabs = [
    { title: '% of Value', desc: 'Find X% of Y' },
    { title: 'Find %', desc: 'X is what % of Y?' },
    { title: '% Change', desc: 'Increase/Decrease from X to Y' },
    { title: 'Add %', desc: 'X increased by Y%' },
    { title: 'Subtract %', desc: 'X decreased by Y%' }
  ];

  useEffect(() => {
    calculateResult();
  }, [inputs, activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setInputs(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateResult = () => {
    const x = parseFloat(inputs.x);
    const y = parseFloat(inputs.y);

    if (isNaN(x) || isNaN(y) || (activeTab === 2 && x === 0)) {
      setResult('Enter values to calculate');
      setFormula('');
      return;
    }

    switch (activeTab) {
      case 0:
        setResult(`${inputs.x}% of ${inputs.y} is ${(x / 100 * y).toFixed(2)}`);
        setFormula(`Formula: (${x} ÷ 100) × ${y} = ${(x / 100 * y).toFixed(2)}`);
        break;
      case 1:
        setResult(`${inputs.x} is ${((x / y) * 100).toFixed(2)}% of ${inputs.y}`);
        setFormula(`Formula: (${x} ÷ ${y}) × 100 = ${((x / y) * 100).toFixed(2)}%`);
        break;
      case 2:
        const change = ((y - x) / x) * 100;
        const changeType = change >= 0 ? 'increase' : 'decrease';
        setResult(`From ${inputs.x} to ${inputs.y} is a ${Math.abs(change).toFixed(2)}% ${changeType}`);
        setFormula(`Formula: ((${y} - ${x}) ÷ ${x}) × 100 = ${change.toFixed(2)}%`);
        break;
      case 3:
        setResult(`${inputs.x} increased by ${inputs.y}% is ${(x * (1 + y / 100)).toFixed(2)}`);
        setFormula(`Formula: ${x} × (1 + ${y}/100) = ${(x * (1 + y / 100)).toFixed(2)}`);
        break;
      case 4:
        setResult(`${inputs.x} decreased by ${inputs.y}% is ${(x * (1 - y / 100)).toFixed(2)}`);
        setFormula(`Formula: ${x} × (1 - ${y}/100) = ${(x * (1 - y / 100)).toFixed(2)}`);
        break;
      default:
        setResult('Enter values to calculate');
        setFormula('');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
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
    setInputs({ x: '', y: '' });
    setResult('Enter values to calculate');
    setFormula('');
  };

  const getInputLabels = () => {
    switch (activeTab) {
      case 0: return { x: 'Percentage (%)', y: 'Value' };
      case 1: return { x: 'Part', y: 'Whole' };
      case 2: return { x: 'Original Value', y: 'New Value' };
      case 3: return { x: 'Value', y: 'Percentage (%)' };
      case 4: return { x: 'Value', y: 'Percentage (%)' };
      default: return { x: 'Value X', y: 'Value Y' };
    }
  };

  const labels = getInputLabels();

  return (
    <>
      <Head>
        <title>Free Online Percentage Calculator | Instant Results for % of, Increase, Tip & More</title>
        <meta
          name="description"
          content="Calculate percentages instantly: find X% of Y, percentage change, increases, decreases, tips, and discounts. Accurate, private, and 100% free."
        />
        <meta
          name="keywords"
          content="percentage calculator, what is X percent of Y, percent increase calculator, tip calculator, discount calculator, percentage change, online math tool, free calculator"
        />
        <link rel="canonical" href="https://www.percentdiscountandtip.com/percentage-calculator" />

        <meta property="og:title" content="Free Percentage Calculator | Solve Any % Problem in Seconds" />
        <meta
          property="og:description"
          content="Fast, accurate percentage calculations for students, shoppers, and professionals. No installation, no tracking, always free."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.percentdiscountandtip.com/percentage-calculator" />
        <meta property="og:image" content="https://www.percentdiscountandtip.com/images/og-percentage-calculator.jpg" />
        <meta property="og:image:alt" content="Clean interface of a percentage calculator solving real-world problems" />
        <meta property="og:site_name" content="PercentageCalculator.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instant Percentage Calculator - Free & Private" />
        <meta
          name="twitter:description"
          content="Solve any percentage problem in seconds. Trusted by over 500k users monthly."
        />
        <meta name="twitter:image" content="https://www.percentdiscountandtip.com/images/og-percentage-calculator.jpg" />
        <meta name="twitter:image:alt" content="Easy-to-use percentage calculator with multiple modes" />

        <meta name="author" content="PercentageCalculator.app" />
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Percentage Calculator",
              "url": "https://www.percentdiscountandtip.com/percentage-calculator",
              "description": "A fast, free, and privacy-focused web app that calculates percentages, percentage changes, tips, discounts, and more with instant results.",
              "applicationCategory": "Utilities",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": "Calculate X% of Y, reverse percentage, percentage increase/decrease, add/subtract percentage",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "867"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.percentdiscountandtip.com/percentage-calculator"
              }
            })
          }}
        />
      </Head>

      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorContainer}>
          
          {/* More Calculators Card */}
          <div className={styles.toolsCard}>
            <h3 className={styles.toolsTitle}>More Calculators</h3>
            <div className={styles.toolsGrid}>
              <Link href="/discount-calculator" className={styles.toolButton}>
                Discount Calculator
              </Link>
              <Link href="/tip-calculator" className={styles.toolButton}>
                Tip Calculator
              </Link>
            </div>
          </div>

          {/* Main Calculator Card */}
          <div className={styles.calculatorCard}>
            <div className={styles.calculatorHeader}>
              <h2 className={styles.calculatorTitle}>Percentage Calculator</h2>
              <p className={styles.calculatorSubtitle}>Quick, easy percentage calculations for everyone</p>
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
                <label htmlFor="x-input" className={styles.inputLabel}>{labels.x}</label>
                <input
                  id="x-input"
                  type="text"
                  name="x"
                  value={inputs.x}
                  onChange={handleInputChange}
                  placeholder="Enter number"
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="y-input" className={styles.inputLabel}>{labels.y}</label>
                <input
                  id="y-input"
                  type="text"
                  name="y"
                  value={inputs.y}
                  onChange={handleInputChange}
                  placeholder="Enter number"
                  className={styles.formInput}
                />
              </div>
            </div>
            
            {/* Result Display */}
            <div className={styles.resultSection}>
              <div className={styles.resultDisplay}>
                <p className={styles.resultText}>{result}</p>
              </div>
              
              <div className={styles.actionButtons}>
                <button className={styles.copyBtn} onClick={copyToClipboard}>
                  Copy Result
                </button>
                <button className={styles.resetBtn} onClick={resetCalculator}>
                  Clear
                </button>
              </div>
            </div>
            
            {/* Formula Section */}
            <div className={styles.formulaSection}>
              <details className={styles.formulaDetails}>
                <summary className={styles.formulaSummary}>Show Calculation Formula</summary>
                <div className={styles.formulaContent}>
                  <p className={styles.formulaText}>{formula || 'Calculation formula will appear here'}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PercentageCalculator;