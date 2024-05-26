import React from "react";
import ReactDOM from "react-dom/client";
import App from "./header/header.jsx";
import "./App.css";

function line() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="../public/logo.svg" alt="logo" />
        </div>
        <nav className="menu">
          <ul className="ul">
            <li className="li">
              <a href="#" className="link-item">
                itemLOLL
              </a>
            </li>
            <li className="li">
              <a href="#" className="link-item">
                itemLOLL
              </a>
            </li>
            <li className="li">
              <a href="#" className="link-item">
                itemLOLL
              </a>
            </li>
            <li className="li">
              <a href="#" className="link-item">
                itemLOLL
              </a>
            </li>
            <li className="li">
              <a href="#" className="link-item">
                itemLOLL
              </a>
            </li>
          </ul>
        </nav>
        <div className="contact-block">
          <button className="btn">Click</button>
          <p className="name_contact">Nick</p>
        </div>
      </header>
      <footer className="footer"></footer>
    </>
  );
}

export default line;
