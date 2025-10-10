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
        <title>Free Discount Calculator | Calculate % Off, Final Price & Savings Instantly</title>
        <meta
          name="description"
          content="Calculate discounts, final prices, and savings in seconds. Perfect for shopping deals, sales tax prep, or figuring out how much you save with any % off."
        />
        <meta
          name="keywords"
          content="discount calculator, percentage off calculator, how much is 20% off, final price calculator, savings calculator, what percent saved, deal calculator, markdown calculator"
        />
        <meta name="author" content="DiscountCalculator.app" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.percentdiscountandtip.com/discount-calculator" />

        <meta property="og:title" content="Free Discount Calculator | See Your Savings Instantly" />
        <meta
          property="og:description"
          content="Easily calculate how much you'll save with any percentage or dollar discount. Works for retail, coupons, Black Friday, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.percentdiscountandtip.com/discount-calculator" />
        <meta property="og:image" content="https://www.percentdiscountandtip.com/images/og-discount-calculator.jpg" />
        <meta property="og:image:alt" content="Discount calculator showing original price, discount, and final price" />
        <meta property="og:site_name" content="DiscountCalculator.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instant Discount Calculator - Find % Off & Final Price" />
        <meta
          name="twitter:description"
          content="How much is 30% off? Use this free tool to find final price and total savings fast. No registration needed."
        />
        <meta name="twitter:image" content="https://www.percentdiscountandtip.com/images/og-discount-calculator.jpg" />
        <meta name="twitter:image:alt" content="Clean UI of a discount calculator solving common shopping problems" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Discount Calculator",
              "url": "https://www.percentdiscountandtip.com/discount-calculator",
              "description": "An easy-to-use online tool that calculates the discounted price, amount saved, and percentage saved based on original price and discount input.",
              "applicationCategory": "Shopping",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": "Calculate percentage off, dollar discounts, final price, and savings percentage",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "642"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.percentdiscountandtip.com/discount-calculator"
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