import React from "react";
import '../Register/Register.css'

export default function Login() {
  return (
    <div className="login-page min-h-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className="login-content bg-[var(--dark-primary-color)] border-[var(--light-primary-color)] border-2 rounded-lg my-4 p-7">
        <div className="logo-img flex justify-around">
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
            class="lucide lucide-code-xml h-10 w-10"
          >
            <path d="m18 16 4-4-4-4"></path>
            <path d="m6 8-4 4 4 4"></path>
            <path d="m14.5 4-5 16"></path>
          </svg>
        </div>
        <div className="p-6">
          <div className="heading text-2xl text-center">Login to Compilo</div>
          <div className="description text-[var(--tertiary-text-color)]">
            Enter your credentials to access your account
          </div>
        </div>
        <form className="login-form">
          <div className="login-input-div email-input space-y-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
          <div className="login-input-div password-input space-y-2">
            <div className="password-div flex">
               <label htmlFor="password">Password</label>
               <a href='/forgot-password' className="forgot-password"></a>
            </div>
            <input type="password" />
          </div>
          <div className="login-account-btn">
            <button className="login-account w-full bg-[var(--secondary-color)] text-[var(--primary-color)] my-1 py-2 rounded-lg">
              Sign In
            </button>
          </div>
          <div className="flex text-center justify-center my-2">
            Don't have an account? &nbsp;
            <a href="/register" className="text-[var(--secondary-color)]">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
