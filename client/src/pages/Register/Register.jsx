import React from "react";
import './Register.css'

export default function Register() {
  return (
    <div className="register-page min-h-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className="register-content bg-[var(--dark-primary-color)] border-[var(--light-primary-color)] border-2 rounded-lg p-12">
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
            class="lucide lucide-code-xml h-8 w-8"
          >
            <path d="m18 16 4-4-4-4"></path>
            <path d="m6 8-4 4 4 4"></path>
            <path d="m14.5 4-5 16"></path>
          </svg>
        </div>
        <div className="heading text-2xl text-center">Create an account</div>
        <div className="description">
          Enter your information to create a Compilo account
        </div>
        <div className="register-form p-6">
          <div className="register-input name-input space-y-2">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Enter your name"/>
          </div>
          <div className="register-input email-input space-y-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
          <div className="register-input password-input space-y-2">
               <label htmlFor="password">Password</label>
               <input type="text"/>
          </div>
          <div className="register-input confirm-password-input space-y-2">
               <label htmlFor="confirm-password">Confirm Password</label>
               <input type="text"/>
          </div>
        </div>
      </div>
    </div>
  );
}
