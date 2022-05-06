import React from "react";
import Header from "../layouts/Header";
import photo1 from "../assets/photo1.png";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        {/* <!-- ##### LAWYER SECTION ##### --> */}
        <section className="section-lawyer">
          <div className="lawyer">
            <div className="lawyer__lawyer ">
              <div className="lawyer__lawyer-info">
                {/* <!-- Left Side --> */}
                <div className="left">
                  <picture className="lawyer__lawyer-info--image">
                    <img src={photo1} alt="hamza" />
                  </picture>
                  <div className="lawyer__lawyer-info-wraper">
                    <h2 className="lawyer__lawyer-info--name h-2">
                      Hamza Jabir
                    </h2>
                    <ul>
                      <li>Mkoa: Dar Es Salaam</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Right Side --> */}
                <div className="right">
                  <a
                    href="./html/profile.html"
                    className="btn--white btn u-margin-top-small"
                  >
                    Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ##### ABOUT SECTION ##### --> */}
        <section className="section-about">
          <div className="about">
            {/* <!-- Left Side --> */}
            <div className="left">
              {/* <!-- Abot --> */}
              <div className="about__lawyer ">
                <div className="about__lawyer-info">
                  <div className="about__lawyer-info-wraper">
                    <h3 className="about__lawyer-info--name h-3">About</h3>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Skills --> */}
              <div className="about__lawyer ">
                <div className="about__lawyer-info">
                  <div className="about__lawyer-info-wraper">
                    <h3 className="about__lawyer-info--name h-3">Skills</h3>
                    <ul className="skills u-margin-left-small">
                      <li className="skills__item">Ndoa</li>
                      <li className="skills__item">Raia</li>
                      <li className="skills__item">Utapeli</li>
                      <li className="skills__item">Elimu</li>
                      <li className="skills__item">Haki</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Personal Details --> */}
              <div className="about__lawyer ">
                <div className="about__lawyer-info">
                  <div className="about__lawyer-info-wraper">
                    <h3 className="about__lawyer-info--name h-3">
                      Personal Details
                    </h3>
                    <ul className="personal-details">
                      <li>
                        <span>Experience:</span>4 Years
                      </li>
                      <li>
                        <span>Phone No:</span>0688 297 056
                      </li>
                      <li>
                        <span>Email:</span>cholophysician@gmail.com
                      </li>
                      <li>
                        <span>Location:</span>Posta, Tan-Court House
                      </li>
                      <li>
                        <span>Certificate No:</span>5501
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="right">
              <div className="about__lawyer ">
                <div className="about__lawyer-info">
                  <div className="about__lawyer-info-wraper">
                    <h3 className="about__lawyer-info--name h-3">
                      Total Cases
                    </h3>
                    <span className="cases">12</span>
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
