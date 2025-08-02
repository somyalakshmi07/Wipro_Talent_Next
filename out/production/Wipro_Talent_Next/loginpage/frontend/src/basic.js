import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Basic() {
  const [darkMode, setDarkMode] = useState(false);
  const [palindromeInput, setPalindromeInput] = useState('');
  const [palindromeResult, setPalindromeResult] = useState('');
  const [palindromeDescription, setPalindromeDescription] = useState('');
  const [fibonacciInput, setFibonacciInput] = useState('');
  const [fibonacciResult, setFibonacciResult] = useState('');
  const [fibonacciDescription, setFibonacciDescription] = useState('');
  const [factorialInput, setFactorialInput] = useState('');
  const [factorialResult, setFactorialResult] = useState('');
  const [factorialDescription, setFactorialDescription] = useState('');
  const [progress, setProgress] = useState(0);
  const [funFact, setFunFact] = useState('');
  const [animatePalindrome, setAnimatePalindrome] = useState(false);
  const [animateFibonacci, setAnimateFibonacci] = useState(false);
  const [animateFactorial, setAnimateFactorial] = useState(false);

  // Fun facts
  const funFacts = [
    "Did you know? 0 is the only number that can't be represented in Roman numerals!",
    "A palindrome reads the same forwards and backwards, like 12321.",
    "The Fibonacci sequence appears in pinecones and sunflowers!",
    "Factorials grow super fast: 5! = 120, 10! = 3,628,800!",
    "Math is everywhere in nature, from leaves to honeycombs!",
    "Every even number greater than 2 can be written as the sum of two primes (Goldbach's conjecture).",
    "The word 'mathematics' comes from the Greek word 'mathema' meaning 'knowledge'."
  ];

  // Show a random fun fact
  const showFunFact = () => {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(fact);
  };

  // Update progress bar
  const updateProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Check palindrome
  const checkPalindrome = () => {
    if (!palindromeInput) {
      setPalindromeResult("Please enter a number.");
      setPalindromeDescription("A palindrome is a number that reads the same backward as forward, like 121 or 1331.");
      setAnimatePalindrome(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const isPalindrome = palindromeInput === palindromeInput.split('').reverse().join('');
      const result = isPalindrome 
        ? `Yes! ${palindromeInput} is a palindrome!`
        : `No, ${palindromeInput} is not a palindrome.`;
      
      setPalindromeResult(result);
      setAnimatePalindrome(true);
      
      if (isPalindrome) {
        setPalindromeDescription(`🎉 Great! <b>${palindromeInput}</b> reads the same forwards and backwards.<br>That makes it a palindrome!`);
        showConfetti();
        updateProgress();
        showFunFact();
      } else {
        setPalindromeDescription(`Oops! <b>${palindromeInput}</b> does not read the same forwards and backwards.<br>Try another number!`);
        showFunFact();
      }
    }, 300);
  };

  // Calculate Fibonacci sequence
  const calculateFibonacci = () => {
    const n = parseInt(fibonacciInput);
    if (isNaN(n)) {
      setFibonacciResult("Please enter a positive integer.");
      setFibonacciDescription("The Fibonacci sequence starts with 0 and 1. Each next number is the sum of the two before it.");
      setAnimateFibonacci(false);
      return;
    }

    let a = 0, b = 1, c;
    let result = [a];
    for (let i = 2; i < n; i++) {
      c = a + b;
      result.push(c);
      a = b;
      b = c;
    }
    if (n > 1) result.push(b);

    setFibonacciResult('Fibonacci series: ' + result.join(', '));
    setAnimateFibonacci(true);
    setFibonacciDescription(`🌱 The Fibonacci sequence for <b>${n}</b> terms is shown above. Notice how each number is the sum of the two before it!`);
    showConfetti();
    updateProgress();
    showFunFact();
  };

  // Calculate factorial
  const calculateFactorial = () => {
    const n = parseInt(factorialInput);
    if (isNaN(n) || n < 0) {
      setFactorialResult("Please enter a non-negative integer.");
      setFactorialDescription("The factorial of a number n (written as n!) is the product of all positive integers up to n.");
      setAnimateFactorial(false);
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }

    setFactorialDescription(`🌻 The factorial of <b>${n}</b> means multiplying all numbers from 1 to ${n}.<br>So ${n}! = ${factorial}`);
    setAnimateFactorial(true);
    setFactorialResult('Factorial: ' + factorial);
    showConfetti();
    updateProgress();
    showFunFact();
  };

  // Show confetti
  const showConfetti = () => {
    // In a real app, you might use a confetti library or implement a more sophisticated solution
    console.log("Confetti effect would show here!");
  };

  // Create falling leaves/stars
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, you would create DOM elements for the falling leaves/stars
      console.log("Creating falling element");
    }, 900);

    showFunFact();
    return () => clearInterval(interval);
  }, [darkMode]);

  // Reset animations after they complete
  useEffect(() => {
    if (animatePalindrome) {
      const timer = setTimeout(() => setAnimatePalindrome(false), 600);
      return () => clearTimeout(timer);
    }
  }, [animatePalindrome]);

  useEffect(() => {
    if (animateFibonacci) {
      const timer = setTimeout(() => setAnimateFibonacci(false), 600);
      return () => clearTimeout(timer);
    }
  }, [animateFibonacci]);

  useEffect(() => {
    if (animateFactorial) {
      const timer = setTimeout(() => setAnimateFactorial(false), 600);
      return () => clearTimeout(timer);
    }
  }, [animateFactorial]);

  return (
    <div className={`app ${darkMode ? 'night' : ''}`}>
      <style jsx global>{`
        body {
          font-family: 'Comic Sans MS', 'Comic Sans', cursive, Arial, sans-serif;
          background: linear-gradient(135deg, #b7e778 0%, #e0ffe6 100%);
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
        body.night {
          background: linear-gradient(135deg, #232946 0%, #395886 100%);
        }
        .container {
          max-width: 420px;
          margin: 40px auto;
          background: #fffbe7;
          border-radius: 18px;
          box-shadow: 0 4px 16px rgba(60,120,60,0.13);
          padding: 32px 32px 24px 32px;
          border: 3px solid #b7e778;
          position: relative;
          overflow: hidden;
          animation: ecoBounce 3s infinite alternate;
          z-index: 2;
        }
        body.night .container {
          background: #232946;
          border-color: #395886;
          color: #fff;
          box-shadow: 0 4px 24px rgba(35,41,70,0.18);
        }
        .waving-plant {
          position: fixed;
          left: 18px;
          bottom: 18px;
          font-size: 2.7em;
          z-index: 1001;
          animation: plantWave 2.5s ease-in-out infinite alternate;
          transform-origin: bottom center;
          pointer-events: none;
        }
        .waving-leaf {
          position: fixed;
          right: 22px;
          bottom: 24px;
          font-size: 2em;
          z-index: 1001;
          animation: leafWave 2s ease-in-out infinite alternate;
          transform-origin: bottom left;
          pointer-events: none;
        }
        @keyframes plantWave {
          0% { transform: rotate(-5deg) scale(1);}
          50% { transform: rotate(8deg) scale(1.05);}
          100% { transform: rotate(-5deg) scale(1);}
        }
        @keyframes leafWave {
          0% { transform: rotate(0deg) scale(1);}
          50% { transform: rotate(-18deg) scale(1.08);}
          100% { transform: rotate(0deg) scale(1);}
        }
        h2 {
          text-align: center;
          color: #388e3c;
          margin-bottom: 10px;
          font-size: 2em;
          letter-spacing: 1px;
          text-shadow: 1px 1px 0 #e0ffe6;
        }
        body.night h2 {
          color: #ffe066;
        }
        h5 {
          text-align: center;
          color: #5b8c2a;
          margin-bottom: 12px;
          font-size: 1.1em;
          letter-spacing: 0.5px;
        }
        body.night h5 {
          color: #ffe066;
        }
        .section {
          margin-bottom: 28px;
          background: #e0ffe6;
          border-radius: 10px;
          padding: 18px 10px 14px 10px;
          box-shadow: 0 2px 6px rgba(60,120,60,0.06);
          border: 1.5px solid #b7e778;
          position: relative;
        }
        body.night .section {
          background: #2e3350;
          border-color: #395886;
        }
        .section:before {
          content: "🌼";
          font-size: 1.5em;
          position: absolute;
          top: 8px;
          right: 16px;
          opacity: 0.18;
          pointer-events: none;
        }
        input[type="text"], input[type="number"] {
          width: 65%;
          padding: 10px;
          margin-right: 10px;
          border: 2px solid #b7e778;
          border-radius: 6px;
          font-size: 1.1em;
          background: #f8fff4;
          transition: border 0.2s;
          outline: none;
        }
        body.night input[type="text"], body.night input[type="number"] {
          background: #2e3350;
          color: #fff;
          border-color: #395886;
        }
        input[type="text"]:focus, input[type="number"]:focus {
          border: 2.5px solid #388e3c;
          background: #eaffea;
        }
        body.night input[type="text"]:focus, body.night input[type="number"]:focus {
          border-color: #ffe066;
          background: #232946;
        }
        input[type="button"], button {
          padding: 10px 18px;
          background: linear-gradient(90deg, #b7e778 60%, #5b8c2a 100%);
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.1em;
          font-weight: bold;
          box-shadow: 0 2px 6px rgba(60,120,60,0.09);
          transition: background 0.2s, transform 0.1s;
        }
        body.night input[type="button"], body.night button {
          background: linear-gradient(90deg, #232946 60%, #395886 100%);
          color: #ffe066;
        }
        input[type="button"]:hover, button:hover {
          background: linear-gradient(90deg, #5b8c2a 60%, #b7e778 100%);
          transform: scale(1.07);
        }
        body.night input[type="button"]:hover, body.night button:hover {
          background: linear-gradient(90deg, #395886 60%, #232946 100%);
        }
        .result {
          margin-top: 12px;
          color: #388e3c;
          font-weight: bold;
          text-align: center;
          font-size: 1.1em;
          min-height: 24px;
          letter-spacing: 0.5px;
        }
        body.night .result {
          color: #ffe066;
        }
        .eco-icon {
          font-size: 1.4em;
          margin-right: 6px;
          vertical-align: middle;
        }
        .footer {
          text-align: center;
          margin-top: 18px;
          color: #5b8c2a;
          font-size: 1em;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }
        body.night .footer {
          color: #ffe066;
        }
        .animated-output {
          animation: popIn 0.6s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes popIn {
          0% { transform: scale(0.7); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes ecoBounce {
          0% { box-shadow: 0 4px 16px rgba(60,120,60,0.13);}
          50% { box-shadow: 0 8px 32px rgba(60,120,60,0.18);}
          100% { box-shadow: 0 4px 16px rgba(60,120,60,0.13);}
        }
        body.night .container {
          animation: none;
          box-shadow: 0 4px 24px rgba(35,41,70,0.18);
        }
        .output-description {
          text-align: center;
          color: #5b8c2a;
          font-size: 1em;
          margin-top: 6px;
          min-height: 24px;
          transition: color 0.3s;
        }
        body.night .output-description {
          color: #ffe066;
        }
        .math-toddles {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-bottom: 10px;
          margin-top: 8px;
        }
        .toddle {
          font-size: 2.2em;
          display: inline-block;
          animation: toddleBounce 1.8s cubic-bezier(.68,-0.55,.27,1.55) infinite;
          animation-delay: var(--delay);
          filter: drop-shadow(0 2px 2px #b7e77888);
          will-change: transform;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .toddle:hover {
          transform: scale(1.2) rotate(-10deg);
        }
        @keyframes toddleBounce {
          0%, 100% { transform: translateY(0);}
          20% { transform: translateY(-12px) scale(1.1);}
          40% { transform: translateY(0) scale(1);}
          60% { transform: translateY(-8px) scale(1.05);}
          80% { transform: translateY(0);}
        }
        .eco-progress-bar-bg {
          width: 100%;
          height: 16px;
          background: #e0ffe6;
          border-radius: 8px;
          margin: 18px 0 8px 0;
          overflow: hidden;
          border: 1.5px solid #b7e778;
        }
        body.night .eco-progress-bar-bg {
          background: #232946;
          border-color: #395886;
        }
        .eco-progress-bar {
          height: 100%;
          width: ${progress}%;
          background: linear-gradient(90deg, #b7e778 60%, #5b8c2a 100%);
          border-radius: 8px;
          transition: width 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
        body.night .eco-progress-bar {
          background: linear-gradient(90deg, #ffe066 60%, #395886 100%);
        }
        .eco-fun-fact {
          text-align: center;
          color: #388e3c;
          font-size: 1.1em;
          margin: 10px 0 0 0;
          min-height: 28px;
          font-style: italic;
          background: #e0ffe6;
          border-radius: 8px;
          padding: 6px 10px;
          box-shadow: 0 1px 4px rgba(60,120,60,0.07);
        }
        body.night .eco-fun-fact {
          background: #232946;
          color: #ffe066;
          border-color: #395886;
        }
        .theme-toggle-btn {
          position: fixed;
          top: 18px;
          right: 28px;
          z-index: 2000;
          display: block;
          margin: 0;
          padding: 8px 18px;
          border-radius: 20px;
          border: none;
          background: linear-gradient(90deg, #b7e778 60%, #5b8c2a 100%);
          color: #fff;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(60,120,60,0.09);
          transition: background 0.2s, color 0.2s;
        }
        body.night .theme-toggle-btn {
          background: linear-gradient(90deg, #232946 60%, #395886 100%);
          color: #ffe066;
        }
        nav {
          background-color: #388e3c;
          padding: 10px 0;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          text-align: center;
        }
        body.night nav {
          background-color: #232946;
        }
        nav ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: inline-block;
        }
        nav li {
          display: inline-block;
          margin: 0 20px;
        }
        nav a {
          color: #fffbe7;
          text-decoration: none;
          font-size: 1.3em;
          padding: 8px 15px;
          border-radius: 20px;
          transition: background-color 0.3s, color 0.3s;
        }
        nav a:hover, nav a.active {
          background-color: #fffbe7;
          color: #388e3c;
          font-weight: bold;
        }
        body.night nav a:hover, body.night nav a.active {
          background-color: #ffe066;
          color: #232946;
        }
      `}</style>

      <nav>
            <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/basic">Basic</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            </ul>
        </nav>

      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
      >
        {darkMode ? '🌙 Switch to Day' : '🌞 Switch to Night'}
      </button>

      <span className="waving-plant">🌱</span>
      <span className="waving-leaf">🍃</span>

      <div className="container">
        <div className="math-toddles">
          <span className="toddle" style={{ '--delay': '0s' }}>🧮</span>
          <span className="toddle" style={{ '--delay': '0.2s' }}>🔢</span>
          <span className="toddle" style={{ '--delay': '0.4s' }}>🌿</span>
          <span className="toddle" style={{ '--delay': '0.6s' }}>🦋</span>
          <span className="toddle" style={{ '--delay': '0.8s' }}>🍀</span>
        </div>

        <h2>
          <span className="eco-icon">🌳</span>
          Number Utilities
          <span className="eco-icon">🌻</span>
        </h2>

        <div className="section">
          <h5><span className="eco-icon">🌸</span>Palindrome Checker</h5>
          <input 
            type="text" 
            value={palindromeInput}
            onChange={(e) => setPalindromeInput(e.target.value)}
            placeholder="Enter the number" 
          />
          <input 
            type="button" 
            value="Check" 
            onClick={checkPalindrome}
          />
          <div className={`result ${animatePalindrome ? 'animated-output' : ''}`}>
            {palindromeResult}
          </div>
          <div 
            className="output-description" 
            dangerouslySetInnerHTML={{ __html: palindromeDescription }}
          />
        </div>

        <div className="section">
          <h5><span className="eco-icon">🍃</span>Fibonacci Series</h5>
          <input 
            type="text" 
            value={fibonacciInput}
            onChange={(e) => setFibonacciInput(e.target.value)}
            placeholder="Enter the number" 
          />
          <input 
            type="button" 
            value="Check" 
            onClick={calculateFibonacci}
          />
          <div className={`result ${animateFibonacci ? 'animated-output' : ''}`}>
            {fibonacciResult}
          </div>
          <div 
            className="output-description" 
            dangerouslySetInnerHTML={{ __html: fibonacciDescription }}
          />
        </div>

        <div className="section">
          <h5><span className="eco-icon">🌻</span>Factorial Calculator</h5>
          <input 
            type="text" 
            value={factorialInput}
            onChange={(e) => setFactorialInput(e.target.value)}
            placeholder="Enter the number" 
          />
          <input 
            type="button" 
            value="Check" 
            onClick={calculateFactorial}
          />
          <div className={`result ${animateFactorial ? 'animated-output' : ''}`}>
            {factorialResult}
          </div>
          <div 
            className="output-description" 
            dangerouslySetInnerHTML={{ __html: factorialDescription }}
          />
        </div>

        <div className="eco-progress-bar-bg">
          <div className="eco-progress-bar" />
        </div>

        <div className="eco-fun-fact">{funFact}</div>

        <div className="footer">
          <span className="eco-icon">🌍</span>
          Let's keep learning and keep our planet green!
          <span className="eco-icon">🌱</span>
        </div>
      </div>
    </div>
  );
}

export default Basic;