import "./header.scss";
import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <a href="#" className="item-link">
                Works
              </a>
            </li>
            <li className="li">
              <a href="#" className="item-link">
                Blog
              </a>
            </li>
            <li className="li">
              <a href="#" className="item-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
