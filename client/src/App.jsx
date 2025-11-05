import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
