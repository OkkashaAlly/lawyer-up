import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blue.png";

export default function Registration() {
  useEffect(_ => {
    const client = document.querySelector(".as-client");
    const lawyer = document.querySelector(".as-lawyer");
    const clientSide = document.querySelector(".client");
    const lawyerSide = document.querySelector(".lawyer");

    (_ => (lawyerSide.style.display = "none"))();

    // Create a condition that targets viewports at least 768px wide

    const mediaQuery = window.matchMedia("(max-width: 56.25em)");

    const tabInitial = _ => {
      lawyerSide.style.display = "none";
      clientSide.style.display = "block";
    };

    const desktopInitial = _ => {
      lawyerSide.style.display = "none";
      clientSide.style.display = "flex";
    };

    // Media query function
    const tabletDetect = e => {
      // Check if the media query is TRUE
      if (e.matches) {
        tabInitial();

        client.addEventListener("click", _ => {
          tabInitial();
        });

        lawyer.addEventListener("click", _ => {
          lawyerSide.style.display = "block";
          clientSide.style.display = "none";
        });
      } else {
        desktopInitial();

        client.addEventListener("click", _ => {
          desktopInitial();
        });

        lawyer.addEventListener("click", _ => {
          lawyerSide.style.display = "flex";
          clientSide.style.display = "none";
        });
      }
    };

    // Register event listener
    mediaQuery.addListener(tabletDetect);

    // Initial check
    tabletDetect(mediaQuery);
  }, []);

  return (
    <>
      <main>
        <section className="section-registration">
          <div className="registration">
            <div className="left">
              <h1 className="h-2">
                Je unahitaji msaada wa <br />
                kisheria kwa haraka na kwa <br />
                uhakika zaidi ?
              </h1>
            </div>
            <div className="right">
              <div className="wraper">
                <div className="logo-box">
                  <Link to={"/"} className="logo">
                    <img src={logo} alt="logo" />
                  </Link>
                  <h1 className="h-2">Modern Sheria</h1>
                </div>
                <div className="form-wraper u-margin-top-medium">
                  <form action="#" className="form">
                    <div className="form__group radio">
                      <h3 className="h-3 u-margin-right-medium">Register as</h3>
                      <div className="form__radio-group ">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="client"
                          name="register"
                          defaultChecked
                        />
                        <label
                          htmlFor="client"
                          className="form__radio-label as-client"
                        >
                          <span className="form__radio-button"></span>
                          Client
                        </label>
                      </div>
                      <div className="form__radio-group ">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="lawyer"
                          name="register"
                        />
                        <label
                          htmlFor="lawyer"
                          className="form__radio-label as-lawyer"
                        >
                          <span className="form__radio-button"></span>
                          Lawyer
                        </label>
                      </div>
                    </div>
                    {/* <!-- ========= Client ========= --> */}
                    <div className="client flex">
                      <div className="left-side">
                        <div className="form__group">
                          {/* <!-- First Name --> */}
                          <input
                            type="text"
                            className="form__input"
                            placeholder="First Name"
                            id="first-name"
                            required
                          />
                          <label htmlFor="first-name" className="form__label">
                            First Name
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Email --> */}
                          <input
                            type="email"
                            className="form__input"
                            placeholder="Enter Email"
                            id="email"
                            required
                          />
                          <label htmlFor="email" className="form__label">
                            Enter Email
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Password --> */}
                          <input
                            type="password"
                            className="form__input"
                            placeholder="Enter Password"
                            id="password"
                            required
                          />
                          <label htmlFor="password" className="form__label">
                            Enter Password
                          </label>
                        </div>
                      </div>
                      <div className="right-side">
                        <div className="form__group">
                          {/* <!-- Last Name --> */}
                          <input
                            type="text"
                            className="form__input"
                            placeholder="Last Name"
                            id="last-name"
                            required
                          />
                          <label htmlFor="last-name" className="form__label">
                            Last Name
                          </label>
                        </div>

                        <div className="form__group">
                          {/* <!-- Phone No. --> */}
                          <input
                            type="number"
                            className="form__input"
                            placeholder="Enter Phone No."
                            id="phone"
                            required
                          />
                          <label htmlFor="phone" className="form__label">
                            Phone No.
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Confirm Password --> */}
                          <input
                            type="password"
                            className="form__input"
                            placeholder="Confirm Password"
                            id="confirm-password"
                            required
                          />
                          <label
                            htmlFor="confirm-password"
                            className="form__label"
                          >
                            Confirm Password
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ========= Lawyer ========= --> */}
                    <div className="lawyer flex">
                      <div className="left-side">
                        <div className="form__group">
                          {/* <!-- First Name --> */}
                          <input
                            type="text"
                            className="form__input"
                            placeholder="First Name"
                            id="lawyer-first-name"
                            required
                          />
                          <label
                            htmlFor="lawyer-first-name"
                            className="form__label"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Email --> */}
                          <input
                            type="email"
                            className="form__input"
                            placeholder="Enter Email"
                            id="lawyer-email"
                            required
                          />
                          <label htmlFor="lawyer-email" className="form__label">
                            Enter Email
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Certificate No. --> */}
                          <input
                            type="number"
                            className="form__input"
                            placeholder="Certificate No."
                            id="certificate"
                            required
                          />
                          <label htmlFor="certificate" className="form__label">
                            Certificate No.
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Password --> */}
                          <input
                            type="password"
                            className="form__input"
                            placeholder="Enter Password"
                            id="lawyer-password"
                            required
                          />
                          <label
                            htmlFor="lawyer-password"
                            className="form__label"
                          >
                            Enter Password
                          </label>
                        </div>
                      </div>
                      <div className="right-side">
                        <div className="form__group">
                          {/* <!-- Last Name --> */}
                          <input
                            type="text"
                            className="form__input"
                            placeholder="Last Name"
                            id="lawyer-last-name"
                            required
                          />
                          <label
                            htmlFor="lawyer-last-name"
                            className="form__label"
                          >
                            Last Name
                          </label>
                        </div>

                        <div className="form__group">
                          {/* <!-- Phone No. --> */}
                          <input
                            type="number"
                            className="form__input"
                            placeholder="Enter Phone No."
                            id="lawyer-phone"
                            required
                          />
                          <label htmlFor="lawyer-phone" className="form__label">
                            Phone No.
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Practising Certificate --> */}
                          <input
                            type="number"
                            className="form__input"
                            placeholder="Practising Certificate"
                            id="practising-certificate"
                            required
                          />
                          <label
                            htmlFor="practising-certificate"
                            className="form__label"
                          >
                            Practising Certificate
                          </label>
                        </div>
                        <div className="form__group">
                          {/* <!-- Confirm Password --> */}
                          <input
                            type="password"
                            className="form__input"
                            placeholder="Confirm Password"
                            id="lawyer-confirm-password"
                            required
                          />
                          <label
                            htmlFor="lawyer-confirm-password"
                            className="form__label"
                          >
                            Confirm Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form__group u-margin-top-small u-center">
                      <button className="btn btn--pri-big">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
