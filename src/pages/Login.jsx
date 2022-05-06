import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";

export default function Login() {
  return (
    <>
      <main>
        <section className="section-login">
          <div className="wraper">
            <div className="login-form">
              <div className="left">
                <div className="text-box">
                  <Link to={"/"} className="logo">
                    <img src={logo} alt="logo" />
                  </Link>
                  <h1 className="h-1">Lawyer Up</h1>
                  <p className="paragraph">
                    Find lawyers at affordable price, on any situation.
                    Instantly!
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="form-wraper">
                  <form action="#" className="form">
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full name"
                        id="name"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Full name
                      </label>
                    </div>
                    <div className="form__group">
                      <input
                        type="email"
                        className="form__input"
                        placeholder="Enter email"
                        id="email"
                        required
                      />
                      <label htmlFor="email" className="form__label">
                        Enter email
                      </label>
                    </div>
                    <div className="form__group">
                      <div className="form__group u-center">
                        <button className="btn btn--pri-big">
                          Login &rarr;
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="btns-box u-margin-top-big">
                    <ul>
                      <li>
                        <Link to="/registration">Create Account</Link>
                      </li>
                      <li>
                        <Link to="/">Forgot Password</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
