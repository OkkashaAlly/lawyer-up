import React from "react";
import LawyerProfile from "../components/LawyerProfile";
import Header from "../layouts/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="section-search">
          <div className="search">
            <h1 className="h-1 u-center u-margin-bottom-medium u-margin-top-medium">
              Tafuta Mwanasheria Alio Karibu Yako
            </h1>
            <form className="search-wraper blur">
              <div className="left">
                <h1>Chagua Kesi</h1>
                <div className="search__input-box select">
                  <select className="input" name="regions">
                    <option value="wizi">Wizi</option>
                    <option value="mauaji">Mauaji</option>
                    <option value="ndoa">Ndoa</option>
                    <option value="ujambazi">Ujambazi</option>
                  </select>
                </div>
              </div>
              <div className="right">
                <h1>Chagua Mkoa</h1>
                <div className="search__input-box select">
                  <select className="input" name="regions">
                    <option value="daresalaam">Dar Es Salaam</option>
                    <option value="arusha">Arusha</option>
                    <option value="daresalaam">Dar Es Salaam</option>
                    <option value="mwanza">Mwanza</option>
                    <option value="dodoma">Dodoma</option>
                    <option value="kilimanjaro">Kilimanjaro</option>
                    <option value="morogoro">Morogoro</option>
                    <option value="tanga">Tanga</option>
                    <option value="tabora">Tabora</option>
                    <option value="zanzibar">Zanzibar</option>
                    <option value="pwani">Pwani</option>
                    <option value="pemba">Pemba</option>
                    <option value="rukwa">Rukwa</option>
                    <option value="mbeya">Mbeya</option>
                    <option value="kigoma">Kigoma</option>
                    <option value="iringa">Iringa</option>
                    <option value="singida">Singida</option>
                    <option value="shinyanga">Shinyanga</option>
                    <option value="geita">Geita</option>
                    <option value="katavi">Katavi</option>
                    <option value="lindi">Lindi</option>
                    <option value="manyara">Manyara</option>
                    <option value="mara">Mara</option>
                    <option value="mtwara">Mtwara</option>
                    <option value="njombe">Njombe</option>
                    <option value="rukwa">Rukwa</option>
                    <option value="ruvuma">Ruvuma</option>
                    <option value="simiyu">Simiyu</option>
                  </select>
                </div>
              </div>

              {/* <!-- <button className="search__btn btn btn--white u-margin-top-small" type="submit">
          <img src="./assets/loupe.png" alt="search"/>
        </button> --> */}
            </form>
          </div>
        </section>
        <section className="section-profile" id="profiles">
          <div className="profile-wraper">
            {/* <!-- First Lawyer --> */}
            <LawyerProfile />
            {/* <!-- Second Lawyer --> */}
            <LawyerProfile />
            {/* <!-- Third Lawyer --> */}
            <LawyerProfile />
            {/* <!-- Forth Lawyer --> */}
            <LawyerProfile />
          </div>
        </section>
      </main>
    </div>
  );
}
