const About = () => (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h2>About This Application</h2>
  
      <p>
        The <strong>Loan Calculator</strong> is a responsive, interactive web application built with <strong>React.js</strong> and styled using <strong>Material UI</strong>. It allows users to:
      </p>
  
      <ul>
        <li>Calculate monthly loan EMIs (Equated Monthly Installments)</li>
        <li>View a detailed amortization schedule of principal and interest</li>
        <li>Convert EMI into multiple currencies using live exchange rates</li>
        <li>Switch between Light and Dark modes for better user experience</li>
      </ul>
  
      <hr />
      <h3>🧠 Objective</h3>
      <p>
        This app was designed as a technical challenge to demonstrate proficiency in modern React development, state management using Context API, dynamic form handling, third-party API integration, and UI design using Material UI.
      </p>
  
      <hr />
      <h3>✅ Key Features</h3>
      <ul>
        <li>EMI calculation using the industry-standard financial formula</li>
        <li>Interactive amortization table with monthly breakdown</li>
        <li>Live currency conversion using ExchangeRate API</li>
        <li>Theme toggle (Light/Dark) using Material UI theming</li>
        <li>404 Not Found page for unmatched routes</li>
        <li>Global state management via React Context API</li>
        <li>Reusable hooks for API calls and logic abstraction</li>
        <li>Error boundary to catch and handle unexpected runtime issues</li>
      </ul>
  
      <hr />
      <h3>🧮 EMI Formula</h3>
      <code style={{ display: 'block', background: '#eee', padding: '1rem' }}>
        EMI = [P × R × (1 + R)<sup>N</sup>] / [(1 + R)<sup>N</sup> – 1]
      </code>
      <ul>
        <li><strong>P</strong> = Principal loan amount</li>
        <li><strong>R</strong> = Monthly interest rate (annual interest / 12 / 100)</li>
        <li><strong>N</strong> = Number of monthly installments (years × 12)</li>
      </ul>
  
      <hr />
      <h3>🌍 Exchange Rate API Integration</h3>
      <p>
        The app uses the <strong>ExchangeRate API</strong> to fetch live conversion rates for over 160 currencies.
      </p>
      <p>
        <strong>Sample API Endpoint:</strong><br />
        <code>https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</code>
      </p>
      <p>
        You need to register at <a href="https://www.exchangerate-api.com" target="_blank" rel="noreferrer">exchangerate-api.com</a> to get a free API key and replace <code>YOUR_API_KEY</code> in the code.
      </p>
  
      <hr />
      <h3>🛠 Technologies Used</h3>
      <ul>
        <li><strong>React.js</strong> – SPA development with hooks and routing</li>
        <li><strong>Material UI</strong> – UI components and theme customization</li>
        <li><strong>Axios</strong> – HTTP client for API requests</li>
        <li><strong>ExchangeRate API</strong> – Real-time currency data</li>
        <li><strong>Vite</strong> – Lightning-fast build tool</li>
      </ul>
  
      <hr />
      <h3>📦 Project Submission Instructions</h3>
      <ul>
        <li>Host the application using a platform like <strong>Netlify</strong>, <strong>Vercel</strong>, or <strong>GitHub Pages</strong></li>
        <li>Push your complete code to a public <strong>GitHub repository</strong></li>
        <li>Ensure your <code>README.md</code> includes:</li>
        <ul>
          <li>Live Demo URL</li>
          <li>Installation & Setup instructions</li>
          <li>Project features and screenshots</li>
        </ul>
        <li>Ensure code readability, modularity, and commit consistency</li>
        <li>Ensure mobile responsiveness and cross-browser compatibility</li>
      </ul>
  
      <p style={{ marginTop: '2rem' }}>
        🎉 Thank you for exploring this project! Your feedback and suggestions are welcome.
      </p>
    </div>
  );
  
  export default About;
  