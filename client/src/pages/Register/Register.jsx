import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { name, email, password, confirmPassword } = form;

      if (password != confirmPassword) {
        alert("Passwords do not match!");
      } else {
        console.log(form);

        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            name: name,
            email: email,
            password: password,
          }
        );
        const result=response?.data;
        if(result){
          alert('User registered successfully')
          navigate('/login')
        }
        else{
          alert("User registration failed")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        <header className="p-2 pb-6 text-s ">
          <div className="heading text-2xl text-center">Create an account</div>
          <div className="description text-[var(--tertiary-text-color)]">
            Enter your information to create a Compilo account
          </div>
        </header>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-input-div name-input space-y-2">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="register-input-div email-input space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="someone@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="register-input-div password-input space-y-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange}/>
          </div>

          <div className="register-input-div confirm-password-input space-y-2">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}/>
          </div>

          <div className="create-account-btn">
            <button
              className="create-account w-full bg-[var(--secondary-color)] text-[var(--primary-color)] my-1 py-2 rounded-lg"
              type="submit"
            >
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
