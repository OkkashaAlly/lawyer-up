import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blue.png";

export default function Header() {
  const [toggleDisplay, setToggleDisplay] = useState("none");

  useEffect(
    _ => {
      const navBar = document.querySelector(".navigation__menu");
      navBar.style.display = toggleDisplay;
    },
    [toggleDisplay]
  );

  const show = _ => {
    if (toggleDisplay === "none") {
      setToggleDisplay("block");
    } else {
      setTimeout(() => {
        setToggleDisplay("none");
      }, 1000);
    }
  };

  return (
    <>
      <header className="section-header">
        <div className="header">
          {/* <!-- Logo --> */}
          <Link to="/" className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo" />
          </Link>
          {/* <!-- User Name --> */}
          <div className="header__user-box">
            <span className="header__user-name">Lawyer Up</span>
          </div>
        </div>
        {/* <!-- NAVIGATION ######### --> */}
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="nav-toggle"
          />
          <label
            onClick={show}
            htmlFor="nav-toggle"
            className="navigation__button"
          >
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__menu">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>01</span>Kuhusu Sheria App
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>02</span>Miamala
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>03</span>Tafuta Mwanasheria
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/login" className="navigation__link">
                  <span>04</span>Akaunt Yako
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/registration" className="navigation__link">
                  <span>05</span>Jisajili
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
