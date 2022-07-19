import React from "react";
import Footer from "../components/footer";
import "./Home.css";
import team from "../../src/components/static/team.svg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <div className="footer">
        <Footer />
      </div>
      <div>
        <section class="wrapper">
          {/* <div class="container"> */}
          <div class="grid-cols-2">
            <div class="grid-item-1">
              <h1 class="main-heading">
                Welcome to <span>QuickShare.</span>
                <br />
                Share everything.
              </h1>
              <p class="info-text">
                Share Files, Videos, Images, Documents and so much more.
              </p>
              <div class="btn_wrapper">
                <button
                  class="btn view_more_btn"
                  onClick={() => history.push("/public")}
                >
                  Share Files <i class="ri-arrow-right-line"></i>
                </button>
                <button class="btn documentation_btn">documentation</button>
              </div>
            </div>
            <div class="grid-item-2">
              <div class="team_img_wrapper">
                <img src={team} alt="team-img" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* <! - ==== ANIMATE ON SCROLL JS CDN → */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        {/* <! - ==== GSAP CDN ==== → */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
        {/* <! - ==== SCRIPT.JS ==== → */}
        <script src="./script.js" defer></script>
      </div>
    </div>
  );
};

export default Home;
