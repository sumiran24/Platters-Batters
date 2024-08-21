import React from "react";
import "../home/HAbout.css";

import Heading from "../common/heading/Heading";



const HAbout = () => {
    const openForm = (url) => {
      window.open(url, "_blank");
    };
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <div className="left row">
            <Heading subtitle="Platters" />
            <span>
              Authentic Indian homemade catering, delivering the rich flavors of
              tradition to your events with freshly prepared curries, Biryanis,
              and snacks.
            </span>

            <div className="slider-container">
              <div className="slider-wrapper">
                <div className="slider-slide">
                  <img src="./images/platter.jpg" alt="Slide 1" />
                </div>
                <div className="slider-slide">
                  <img src="./images/platter3.jpg" alt="Slide 2" />
                </div>
                <div className="slider-slide">
                  <img src="./images/platter1.jpg" alt="Slide 3" />
                </div>
                <div className="slider-slide">
                  <img src="./images/platter2.jpg" alt="Slide 4" />
                </div>
              </div>
            </div>
          </div>
          <div className="right row">
            <div className="items">
              <button
                onClick={() =>
                  openForm(
                    "https://docs.google.com/forms/d/e/1FAIpQLScxS187I8papsg4RBF5uF0HT2hodHahaeH-2-Np3_ChiHDOaA/viewform"
                  )
                }
              >
                Order Now
              </button>
              <div className="location">
                <span>Pickup Locations: </span>

                <div>Robinson Ridge</div>
                <div>Delivery - MinOrder $100</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
