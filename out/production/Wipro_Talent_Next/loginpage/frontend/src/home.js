import React, { useState } from 'react';
import { Link} from 'react-router-dom'; 
function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
        h1 {
          text-align: center;
          color: #388e3c;
          margin-bottom: 20px;
          font-size: 2.5em;
          letter-spacing: 1px;
          text-shadow: 1px 1px 0 #e0ffe6;
        }
        body.night h1 {
          color: #ffe066;
        }
        h2 {
          color: #5b8c2a;
          margin-top: 30px;
          font-size: 1.8em;
          border-bottom: 2px solid #b7e778;
          padding-bottom: 5px;
        }
        body.night h2 {
          color: #ffe066;
          border-color: #395886;
        }
        p {
          font-size: 1.1em;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .bio-section {
          background: #e0ffe6;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 25px;
          box-shadow: 0 2px 6px rgba(60,120,60,0.06);
          border: 1.5px solid #b7e778;
        }
        body.night .bio-section {
          background: #2e3350;
          border-color: #395886;
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
          transition: background 0.2s, color 0.2s;
        }
        body.night .theme-toggle-btn {
          background: linear-gradient(90deg, #232946 60%, #395886 100%);
          color: #ffe066;
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
        .highlight {
          background-color: #f8fff4;
          padding: 2px 5px;
          border-radius: 4px;
          font-weight: bold;
        }
        body.night .highlight {
          background-color: #2e3350;
          color: #ffe066;
        }
        nav {
      background-color: #388e3c; /* A darker green from the theme */
      padding: 10px 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      text-align: center;
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
      `}</style>
        
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
      >
        {darkMode ? '🌙 Switch to Day' : '🌞 Switch to Night'}
      </button>
       <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/basic">Basic</Link></li>
          <li><Link to="/collections">Collections</Link></li>
        </ul>
      </nav>

      <div className="container">
        <h1>Welcome to My Developer Portfolio</h1>
        
        <div className="bio-section">
          <h2>About Me</h2>
          <p>
            Hello! I'm <span className="highlight">G Somya Lakshmi</span>, a passionate developer currently in my 7th semester of the <span className="highlight">Artificial Intelligence and Machine Learning</span> program.
          </p>
          <p>
            I have a strong interest in <span className="highlight">Java development</span> and creating tools that make programming more accessible and efficient. My journey in software development began with simple Java applications, and I've since grown to appreciate the elegance and power of well-structured code.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring fellow students in their programming journey.
          </p>
        </div>

        <div className="bio-section">
          <h2>Java Development</h2>
          <p>
            Java has been my primary programming language since I started my computer science journey. What I love most about Java is its:
          </p>
          <ul>
            <li><span className="highlight">Platform independence</span> - Write once, run anywhere</li>
            <li><span className="highlight">Strong OOP principles</span> - Clean and maintainable code structure</li>
            <li><span className="highlight">Rich ecosystem</span> - Vast collection of libraries and frameworks</li>
            <li><span className="highlight">Performance</span> - Just-in-time compilation for efficient execution</li>
          </ul>
          <p>
            I specialize in creating <span className="highlight">educational tools</span> that help students grasp complex Java concepts through interactive examples and visualizations.
          </p>
        </div>

        <div className="bio-section">
          <h2>Collections Framework</h2>
          <p>
            The Java Collections Framework is one of my favorite topics to work with and teach. It provides:
          </p>
          <ul>
            <li><span className="highlight">Interfaces</span> - List, Set, Queue, Map, etc.</li>
            <li><span className="highlight">Implementations</span> - ArrayList, HashSet, LinkedList, HashMap, etc.</li>
            <li><span className="highlight">Algorithms</span> - Sorting, searching, and other common operations</li>
          </ul>
          <p>
            I've developed several small utilities that demonstrate collection operations visually, helping students understand how different data structures work under the hood.
          </p>
        </div>

        <div className="footer">
          <p>Let's connect and collaborate on interesting Java projects!</p>
          <p>© 2023 G Somya Lakshmi - AI & ML Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;