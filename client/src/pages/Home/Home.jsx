import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="navbar flex m-5">
        <div className="logo flex ">
          <div className="logo-img p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--secondary-color)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-code-xml h-8 w-8"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
          </div>
          <div className="logo-text text-2xl font-bold p-1.5">Compilo</div>
        </div>
        <div className="auth-buttons flex m-1 w-screen justify-end gap-2">
          <div className="login-btn p-2 px-3 m-2">
            <button href="#">Login</button>
          </div>
          <div className="signup-btn p-2 px-3 m-2 bg-[var(--secondary-color)] border-0 rounded-md">
            <button href="#">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="home-content mx-90 mb-20">
        <div className="heading text-6xl font-bold text-center p-4 pt-20">
          Collaborate. Code. Create.
        </div>
        <div className="description text-xl text-center p-4">
          A full-stack, real-time collaborative code editor that enables
          multiple developers to simultaneously write, run, and review code from
          the browser.
        </div>
        <div className="homepg-btn flex m-1 justify-center gap-2 p-3">
          <div className="get-started-btn p-2 px-8 m-2 bg-[var(--secondary-color)] border-0 rounded-md ">
            <button href="#">Get Started &rarr;</button>
          </div>
          <div className="demo-btn p-2 px-8 m-2 border-2 border-white rounded-md">
            <button>Try Demo</button>
          </div>
        </div>
      </div>

      <div className="features m-4 mb-12">
        <div className="feature-heading text-3xl font-bold text-center p-5 m-2">
          Key Features
        </div>

        <div className="features-list grid grid-cols-3 gap-8 p-4 list-none">
          <div className="feature-list-item">
            <div className="list-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users h-10 w-10 text-emerald-500"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <li className="text-xl font-bold py-3">Real-time Collaboration</li>
            <p className="list-item-desc text-2">
              Code together with live cursors and synchronization via Socket.io.
            </p>
          </div>

          <div className="feature-list-item">
            <div className="list-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-terminal h-10 w-10 text-emerald-500"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" x2="20" y1="19" y2="19"></line>
              </svg>
            </div>
            <li className="text-xl font-bold py-3">Multi-language Extension</li>
            <p className="list-item-desc">
              Run code in various languages using secure Docker sandboxing.
            </p>
          </div>

          <div className="feature-list-item">
            <div className="list-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield h-10 w-10 text-emerald-500"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <li className="text-xl font-bold py-3">Role-based Access </li>
            <p className="list-item-desc">
              Control who can view or edit your projects with granular
              permissions.
            </p>
          </div>

          <div className="feature-list-item">
            <div className="list-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-square h-10 w-10 text-emerald-500"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <li className="text-xl font-bold py-3">Code Review System</li>
            <p className="list-item-desc">
              Add inline comments and track resolutions for effective code
              reviews.
            </p>
          </div>

          <div className="feature-list-item">
            <div className="list-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-history h-10 w-10 text-emerald-500"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M12 7v5l4 2"></path>
              </svg>
            </div>
            <li className="text-xl font-bold py-3">Version History</li>
            <p className="list-item-desc">
              Track changes and roll back to previous versions when needed.
            </p>
          </div>

          <div className="feature-list-item">
            <div className="list-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-code-xml h-10 w-10 text-emerald-500"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <li className="text-xl font-bold py-3">Advanced Editor</li>
            <p className="list-item-desc">
              Feature-rich code editor with syntax highlighting and
              auto-completion.
            </p>
          </div>
        </div>
      </div>
      <div className="footer text-center text-lg py-8 bg-gray-900">
        &copy; 2025 Compilo. All rights reserved.
      </div>
    </div>
  );
}
