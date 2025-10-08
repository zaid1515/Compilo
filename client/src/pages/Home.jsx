import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <div className="logo">
          <div className="logo-text"></div>
          <div className="logo-img"></div>
        </div>
        <div className="auth-buttons">
          <div className="login-btn">
            <button href="#">Login</button>
          </div>
          <div className="signup-btn">
            <button href="#">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="heading">Collaborate. Code. Create.</div>
        <div className="description">
          A full-stack, real-time collaborative code editor that enables
          multiple developers to simultaneously write, run, and review code from
          the browser.
        </div>
        <div className="homepg-btn">
          <div className="get-started-btn">
            <button href="#">Get Started</button>
          </div>
          <div className="demo-btn">
               <button>Try Demo</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-heading">Key Features</div>
        <div className="features-list">
          <div className="feature-list-item">
            <li>Real-time Collaboration</li>
          </div>

          <div className="feature-list-item">
            <li>Multi-language Extension</li>
          </div>

          <div className="feature-list-item">
            <li>Role-based Access </li>
          </div>

          <div className="feature-list-item">
            <li>Code Review System</li>
          </div>

          <div className="feature-list-item">
            <li>Version History</li>
          </div>

          <div className="feature-list-item">
            <li>Advanced Editor</li>
          </div>
        </div>
        <div className="footer">
          &copy; 2025 Compilo. All rights reserved.
        </div>
      </div>
    </div>
  );
}
