import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-page min-h-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className="register-content bg-[var(--dark-primary-color)] border-[var(--light-primary-color)] border-2 rounded-lg my-4 p-7">
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
          <div className="heading text-2xl text-center">Create an account</div>
          <div className="description text-[var(--tertiary-text-color)]">
            Enter your information to create a Compilo account
          </div>
        </div>
        <form className="register-form">
          <div className="register-input-div name-input space-y-2">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="register-input-div email-input space-y-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
          <div className="register-input-div password-input space-y-2">
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <div className="register-input-div confirm-password-input space-y-2">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" />
          </div>
          <div className="create-account-btn">
            <button className="create-account w-full bg-[var(--secondary-color)] text-[var(--primary-color)] my-1 py-2 rounded-lg">
              Create Account
            </button>
          </div>
          <div className="flex text-center justify-center my-2">
            Already have an account? &nbsp;
            <a href="/login" className="text-[var(--secondary-color)]">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
