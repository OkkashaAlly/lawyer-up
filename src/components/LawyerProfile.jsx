import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../assets/photo1.png";
import ratingImg from "../assets/ratings.png";

export default function LawyerProfile() {
  return (
    <>
      <div className="profile__lawyer ">
        <div className="profile__lawyer-info">
          {/* <!-- Left Side --> */}
          <div className="left">
            <picture className="profile__lawyer-info--image">
              <img src={photo1} alt="hamza" />
            </picture>
            <div className="profile__lawyer-info-wraper">
              <h3 className="profile__lawyer-info--name h-3">Hamza Jabir</h3>
              <ul>
                <li>Mkoa: Dar Es Salaam</li>
                <li>Anahusika: Ndoa - Ujambazi - Raia</li>
                <li>Lugha: Kiengereza, Kiswahili</li>
              </ul>
            </div>
          </div>
          {/* <!-- Right Side --> */}
          <div className="right">
            <picture className="profile__lawyer-info--ratings">
              <img src={ratingImg} alt="ratings" />
            </picture>
            <ul>
              <li>4 Years of Experience</li>
            </ul>
            <Link to="/profile/lawyerName" className="btn u-margin-top-small">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
