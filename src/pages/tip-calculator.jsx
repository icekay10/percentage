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
        <title>Free Tip Calculator | Split Bill & Calculate Tips Instantly</title>
        <meta
          name="description"
          content="Calculate tips, split bills, and find per-person totals in seconds. Perfect for restaurants, rideshares, salons, and group dinners. 100% free."
        />
        <meta
          name="keywords"
          content="tip calculator, how much to tip, split bill calculator, restaurant tip, tip per person, gratuity calculator, bill splitter, tip percentage"
        />
        <meta name="author" content="TipCalculator.app" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.percentdiscountandtip.com/tip-calculator" />

        <meta property="og:title" content="Free Tip Calculator | Split Bills & Calculate Gratuity Fast" />
        <meta
          property="og:description"
          content="Easily calculate how much to tip and split checks among friends. Works for restaurants, taxis, haircuts, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.percentdiscountandtip.com/tip-calculator" />
        <meta property="og:image" content="https://www.percentdiscountandtip.com/images/og-tip-calculator.jpg" />
        <meta property="og:image:alt" content="Tip calculator showing bill amount, tip, and split total" />
        <meta property="og:site_name" content="TipCalculator.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instant Tip Calculator - Split Bills & Calculate Tips" />
        <meta
          name="twitter:description"
          content="How much should you tip? Use this free tool to calculate tip amounts and split bills fast. No registration needed."
        />
        <meta name="twitter:image" content="https://www.percentdiscountandtip.com/images/og-tip-calculator.jpg" />
        <meta name="twitter:image:alt" content="Clean UI of a tip calculator solving common dining scenarios" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tip Calculator",
              "url": "https://www.percentdiscountandtip.com/tip-calculator",
              "description": "An easy-to-use online tool that calculates tip amounts, total bills, and splits them per person based on bill amount, tip percentage, and number of guests.",
              "applicationCategory": "Finance",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": "Calculate tip amount, total bill, split by people, preset tip options",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "573"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.percentdiscountandtip.com/tip-calculator"
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
              <Link href="/discount-calculator" className={styles.toolButton}>
                Discount Calculator
              </Link>
            </div>
          </div>

          {/* Main Calculator Card */}
          <div className={styles.calculatorCard}>
            <div className={styles.calculatorHeader}>
              <h2 className={styles.calculatorTitle}>Tip Calculator</h2>
              <p className={styles.calculatorSubtitle}>Calculate tips, split bills, and plan your budget</p>
            </div>

            {/* Input Section */}
            <div className={styles.inputSection}>
              <div className={styles.inputGroup}>
                <label htmlFor="bill-amount" className={styles.inputLabel}>Bill Amount ($)</label>
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
                <label htmlFor="tip-percentage" className={styles.inputLabel}>Tip Percentage (%)</label>
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
                <label htmlFor="number-of-people" className={styles.inputLabel}>Number of People</label>
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
              <p className={styles.presetLabel}>Quick Tip Presets:</p>
              <div className={styles.presetButtons}>
                {presetTips.map((preset) => (
                  <button
                    key={preset.value}
                    className={`${styles.presetBtn} ${activePreset === preset.value ? styles.active : ''}`}
                    onClick={() => setPresetTip(preset.value)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsSection}>
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
                  <p className={styles.formulaText}>Tip Amount = Bill Amount × (Tip Percentage ÷ 100)</p>
                  <p className={styles.formulaText}>Total Amount = Bill Amount + Tip Amount</p>
                  <p className={styles.formulaText}>Per Person = Total Amount ÷ Number of People</p>
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