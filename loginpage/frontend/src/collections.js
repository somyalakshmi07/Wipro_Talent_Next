import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Collections() {
  const [darkMode, setDarkMode] = useState(false);
  const [myArray, setMyArray] = useState([]);
  const [mySet, setMySet] = useState(new Set());
  const [myMap, setMyMap] = useState(new Map());
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [mergedArray, setMergedArray] = useState([]);
  const [arrayInput, setArrayInput] = useState('');
  const [setInput, setSetInput] = useState('');
  const [mapKeyInput, setMapKeyInput] = useState('');
  const [mapValueInput, setMapValueInput] = useState('');
  const [array1Input, setArray1Input] = useState('');
  const [array2Input, setArray2Input] = useState('');
  const [progress, setProgress] = useState(0);
  const [funFact, setFunFact] = useState('');

  // Fun facts
  const funFacts = [
    "Did you know? Arrays in JavaScript can hold multiple types of data at once!",
    "Sets automatically remove duplicate values - no duplicates allowed!",
    "Maps remember the original insertion order of their keys.",
    "Arrays are actually objects with special length property and methods.",
    "Sets are collections of unique values where each value can occur only once.",
    "Maps can use any value (both objects and primitives) as keys.",
    "The spread operator (...) is great for copying collections!"
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

  // --- Array Functions ---
  const createArray = () => {
    if (arrayInput) {
      const newArray = arrayInput.split(',').map(item => item.trim());
      setMyArray(newArray);
      showConfetti();
      updateProgress();
      showFunFact();
    }
  };

  const arrayPush = () => {
    const input = prompt("Enter element or comma-separated array:", "");
    if (input) {
      if (input.includes(',')) {
        const newElements = input.split(',').map(item => item.trim());
        setMyArray(prev => [...prev, ...newElements]);
      } else {
        setMyArray(prev => [...prev, input]);
      }
      showConfetti();
    }
  };

  const arrayPop = () => {
    if (myArray.length > 0) {
      const newArray = [...myArray];
      const popped = newArray.pop();
      setMyArray(newArray);
    }
  };

  const arrayShift = () => {
    if (myArray.length > 0) {
      const newArray = [...myArray];
      const shifted = newArray.shift();
      setMyArray(newArray);
    }
  };

  const arrayUnshift = () => {
    if (arrayInput) {
      setMyArray(prev => [arrayInput, ...prev]);
      showConfetti();
    }
  };

  const arraySort = () => {
    setMyArray(prev => [...prev].sort());
    showConfetti();
  };

  // --- Set Functions ---
  const createSet = () => {
    if (setInput) {
      const newSet = new Set(setInput.split(',').map(item => item.trim()));
      setMySet(newSet);
      showConfetti();
      updateProgress();
      showFunFact();
    }
  };

  const setAdd = () => {
    if (setInput) {
      setMySet(prev => {
        const newSet = new Set(prev);
        newSet.add(setInput);
        return newSet;
      });
      showConfetti();
    }
  };

  const setDelete = () => {
    if (setInput) {
      setMySet(prev => {
        const newSet = new Set(prev);
        newSet.delete(setInput);
        return newSet;
      });
    }
  };

  const setClear = () => {
    setMySet(new Set());
  };

  const setHas = () => {
    if (setInput) {
      const hasItem = mySet.has(setInput);
      alert(hasItem ? "Set has this item" : "Set does NOT have this item");
    }
  };

  // --- Map Functions ---
  const mapSet = () => {
    if (mapKeyInput && mapValueInput) {
      setMyMap(prev => {
        const newMap = new Map(prev);
        newMap.set(mapKeyInput, mapValueInput);
        return newMap;
      });
      showConfetti();
      updateProgress();
      showFunFact();
    }
  };

  const mapGet = () => {
    if (mapKeyInput) {
      const value = myMap.get(mapKeyInput);
      alert(value ? `Value for "${mapKeyInput}": ${value}` : `Key "${mapKeyInput}" not found`);
    }
  };

  const mapDelete = () => {
    if (mapKeyInput) {
      setMyMap(prev => {
        const newMap = new Map(prev);
        newMap.delete(mapKeyInput);
        return newMap;
      });
    }
  };

  const mapClear = () => {
    setMyMap(new Map());
  };

  const mapHas = () => {
    if (mapKeyInput) {
      const hasKey = myMap.has(mapKeyInput);
      alert(hasKey ? "Map has this key" : "Map does NOT have this key");
    }
  };

  // --- Array Merge Functions ---
  const createArray1 = () => {
    if (array1Input) {
      setArray1(array1Input.split(',').map(item => item.trim()));
    }
  };

  const createArray2 = () => {
    if (array2Input) {
      setArray2(array2Input.split(',').map(item => item.trim()));
    }
  };

  const mergeArrays = () => {
    createArray1();
    createArray2();
    setMergedArray([...array1, ...array2]);
    showConfetti();
    updateProgress();
    showFunFact();
  };

  const sortMergedArray = () => {
    createArray1();
    createArray2();
    setMergedArray([...array1, ...array2].sort((a, b) => a - b));
  };

  // Confetti effect (simplified for React)
  const showConfetti = () => {
    console.log("Confetti effect would show here!");
  };

  // Initialize with a fun fact
  useEffect(() => {
    showFunFact();
  }, []);

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
          max-width: 800px;
          margin: 40px auto;
          background: #fffbe7;
          border-radius: 18px;
          box-shadow: 0 4px 16px rgba(60,120,60,0.13);
          padding: 32px;
          border: 3px solid #b7e778;
          position: relative;
          overflow: hidden;
          z-index: 2;
        }
        body.night .container {
          background: #232946;
          border-color: #395886;
          color: #fff;
          box-shadow: 0 4px 24px rgba(35,41,70,0.18);
        }
        h2 {
          text-align: center;
          color: #388e3c;
          margin-bottom: 20px;
          font-size: 2em;
          letter-spacing: 1px;
        }
        body.night h2 {
          color: #ffe066;
        }
        h5 {
          text-align: center;
          color: #5b8c2a;
          margin-bottom: 12px;
          font-size: 1.1em;
        }
        body.night h5 {
          color: #ffe066;
        }
        .collection-section, .merge-arrays-section {
          margin-bottom: 28px;
          background: #e0ffe6;
          border-radius: 10px;
          padding: 18px 20px;
          box-shadow: 0 2px 6px rgba(60,120,60,0.06);
          border: 1.5px solid #b7e778;
          position: relative;
        }
        body.night .collection-section, body.night .merge-arrays-section {
          background: #2e3350;
          border-color: #395886;
        }
        .collection-item {
          margin-bottom: 15px;
          padding: 12px;
          background: #f8fff4;
          border-radius: 8px;
          border: 1px dashed #b7e778;
        }
        body.night .collection-item {
          background: #232946;
          border-color: #395886;
        }
        .collection-actions {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .collection-output {
          margin-top: 15px;
          padding: 12px;
          background: #f8fff4;
          border-radius: 8px;
          border: 1px solid #b7e778;
          min-height: 50px;
        }
        body.night .collection-output {
          background: #232946;
          border-color: #395886;
        }
        input[type="text"], input[type="number"], select {
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
        body.night input[type="text"], body.night input[type="number"], body.night select {
          background: #2e3350;
          color: #fff;
          border-color: #395886;
        }
        input[type="text"]:focus, input[type="number"]:focus, select:focus {
          border: 2.5px solid #388e3c;
          background: #eaffea;
        }
        body.night input[type="text"]:focus, body.night input[type="number"]:focus, body.night select:focus {
          border-color: #ffe066;
          background: #232946;
        }
        button, input[type="button"], input[type="submit"] {
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
        body.night button, body.night input[type="button"], body.night input[type="submit"] {
          background: linear-gradient(90deg, #232946 60%, #395886 100%);
          color: #ffe066;
        }
        button:hover, input[type="button"]:hover, input[type="submit"]:hover {
          background: linear-gradient(90deg, #5b8c2a 60%, #b7e778 100%);
          transform: scale(1.07);
        }
        body.night button:hover, body.night input[type="button"]:hover, body.night input[type="submit"]:hover {
          background: linear-gradient(90deg, #395886 60%, #232946 100%);
        }
        .eco-icon {
          font-size: 1.4em;
          margin-right: 6px;
          vertical-align: middle;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          color: #5b8c2a;
          font-size: 1em;
          opacity: 0.8;
        }
        body.night .footer {
          color: #ffe066;
        }
        .theme-toggle-btn {
          position: fixed;
          top: 18px;
          right: 28px;
          z-index: 2000;
          padding: 8px 18px;
          border-radius: 20px;
          border: none;
          background: linear-gradient(90deg, #b7e778 60%, #5b8c2a 100%);
          color: #fff;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(60,120,60,0.09);
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
          list-style: none;
          display: flex;
          justify-content: center;
          padding: 0;
          margin: 0;
        }
        nav li {
          margin: 0 20px;
        }
        nav a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          padding: 8px 15px;
          border-radius: 20px;
          transition: background-color 0.3s;
        }
        nav a:hover, nav a.active {
          background-color: #fffbe7;
          color: #388e3c;
        }
        body.night nav a:hover, body.night nav a.active {
          background-color: #ffe066;
          color: #232946;
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
          transition: width 0.7s;
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
        }
        body.night .eco-fun-fact {
          background: #232946;
          color: #ffe066;
          border-color: #395886;
        }
        @media (max-width: 768px) {
          .container {
            margin: 20px 15px;
            padding: 20px 15px;
          }
          input[type="text"], input[type="number"], select {
            width: 100%;
            margin-bottom: 10px;
          }
          .collection-actions {
            justify-content: center;
          }
        }
      `}</style>

      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/basic">Basic</Link></li>
          <li><Link to="/collections">Collections</Link></li>
        </ul>
      </nav>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? '🌙 Switch to Day' : '🌞 Switch to Night'}
      </button>

      <div className="container">
        <h2><span className="eco-icon">🌳</span>JAVA COLLECTIONS<span className="eco-icon">🌻</span></h2>
        
        {/* Array Section */}
        <div className="collection-section">
          <h5><span className="eco-icon">🌸</span>Array Operations</h5>
          <div className="collection-item">
            <input 
              type="text" 
              value={arrayInput}
              onChange={(e) => setArrayInput(e.target.value)}
              placeholder="Enter comma-separated values" 
            />
            <input type="button" value="Create Array" onClick={createArray} />
          </div>
          <div className="collection-actions">
            <button onClick={arrayPush}>Push</button>
            <button onClick={arrayPop}>Pop</button>
            <button onClick={arrayShift}>Shift</button>
            <button onClick={arrayUnshift}>Unshift</button>
            <button onClick={arraySort}>Sort</button>
          </div>
          <div className="collection-output">
            Array: [{myArray.join(', ')}] (Length: {myArray.length})
          </div>
        </div>

        {/* Merge Arrays Section */}
        <div className="merge-arrays-section">
          <h5><span className="eco-icon">🌸</span>Merge Arrays</h5>
          <div className="collection-item">
            <input 
              type="text" 
              value={array1Input}
              onChange={(e) => setArray1Input(e.target.value)}
              placeholder="Enter comma-separated values for Array 1" 
            />
          </div>
          <div className="collection-item">
            <input 
              type="text" 
              value={array2Input}
              onChange={(e) => setArray2Input(e.target.value)}
              placeholder="Enter comma-separated values for Array 2" 
            />
          </div>
          <div className="collection-actions">
            <button onClick={mergeArrays}>Merge Arrays</button>
            <button onClick={sortMergedArray}>Sort Merged Array</button>
          </div>
          <div className="collection-output">
            Merged Array: [{mergedArray.join(', ')}] (Length: {mergedArray.length})
          </div>
        </div>

        {/* Set Section */}
        <div className="collection-section">
          <h5><span className="eco-icon">🍃</span>Set Operations</h5>
          <div className="collection-item">
            <input 
              type="text" 
              value={setInput}
              onChange={(e) => setSetInput(e.target.value)}
              placeholder="Enter comma-separated values" 
            />
            <input type="button" value="Create Set" onClick={createSet} />
          </div>
          <div className="collection-actions">
            <button onClick={setAdd}>Add</button>
            <button onClick={setDelete}>Delete</button>
            <button onClick={setClear}>Clear</button>
            <button onClick={setHas}>Has</button>
          </div>
          <div className="collection-output">
            Set: {`{${Array.from(mySet).join(', ')}}`} (Size: {mySet.size})
          </div>
        </div>

        {/* Map Section */}
        <div className="collection-section">
          <h5><span className="eco-icon">🌻</span>Map Operations</h5>
          <div className="collection-item">
            <input 
              type="text" 
              value={mapKeyInput}
              onChange={(e) => setMapKeyInput(e.target.value)}
              placeholder="Key" 
              style={{width: '30%'}}
            />
            <input 
              type="text" 
              value={mapValueInput}
              onChange={(e) => setMapValueInput(e.target.value)}
              placeholder="Value" 
              style={{width: '30%'}}
            />
            <input type="button" value="Add to Map" onClick={mapSet} />
          </div>
          <div className="collection-actions">
            <button onClick={mapGet}>Get</button>
            <button onClick={mapDelete}>Delete</button>
            <button onClick={mapClear}>Clear</button>
            <button onClick={mapHas}>Has</button>
          </div>
          <div className="collection-output">
            Map: {`{${Array.from(myMap).map(([key, value]) => `${key} => ${value}`).join(', ')}}`} (Size: {myMap.size})
          </div>
        </div>

        {/* Progress Bar */}
        <div className="eco-progress-bar-bg">
          <div className="eco-progress-bar" />
        </div>

        {/* Fun Fact */}
        <div className="eco-fun-fact">{funFact}</div>

        <div className="footer">
          <span className="eco-icon">🌍</span>
          Collections help organize data in JavaScript!
          <span className="eco-icon">🌱</span>
        </div>
      </div>
    </div>
  );
}

export default Collections;