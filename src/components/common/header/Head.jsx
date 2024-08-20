import React, { useState } from "react";
import { Link } from "react-router-dom";

const Head = () => {
    const openForm = (url) => {
      window.open(url,'_blank');     
    };
  return (
    <>
      <section className="head">
        <div className="logobar">
          <div className="logo">
            <img
              src="./images/hand.jpg"
              alt
              style={{
                width: "100px",
                height: "100px",
                mixBlendMode: "multiply",
              }}
            />
            <div className="logo-text">
              <h1> BATTERS PLATTERS</h1>
              <span>Where Memories Meet the Plate</span>
            </div>
          </div>
          <div className="contact">
            <span> Contact: </span>
            <i
              className="fas fa-phone "
              style={{
                transform: "scaleX(-1)",
                color: "green",
                fontSize: "15px",
                marginRight: "10px",
              }}
            ></i>
            +1 (660) 525-6685
            <i
              className="fab fa-whatsapp fa-1x"
              style={{
                color: "green",
                marginLeft: "20px",
                fontWeight: "bold",
                fontSize: "20px",
                marginRight: "10px",
              }}
            ></i>
            +1 (660) 525-6685
            <div className="social">
              <span> FollowUs: </span>
              <a
                href="https://www.facebook.com/profile.php?id=61556517751719&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fab fa-facebook-f icon"
                  style={{
                    color: "green",
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/battersmatter__plattersmatter?igsh=dTEweDc5bXNmbWU1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fab fa-instagram icon"
                  style={{
                    color: "green",
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                ></i>
              </a>
              <a
                href="https://www.youtube.com/@BattersMatter4u"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fab fa-youtube icon"
                  style={{
                    color: "green",
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                ></i>
              </a>
              <a
                href="https://chat.whatsapp.com/EJY7Aq7cNq29mEaX5vrt6m"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fab fa-whatsapp"
                  style={{
                    color: "green",
                    marginLeft: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <span className="link">
        <div>
          <nav className="navbar" onClick={openForm}>
            <li>
              <button
                onClick={() =>
                  openForm(
                    "https://docs.google.com/document/d/1KQAubpP4yEYm6BkKTBMRjTOuuk4Ddi73WVPQSEh3E8Y/view"
                  )
                }
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  openForm(
                    "https://docs.google.com/document/d/1wBG_DvaVB4fvL_-bEMgZHHblUyj5LhVS_tikxJIzavY/view"
                  )
                }
              >
                Catering Menu
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  openForm(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdVy9TnQzZNfN3VrMWpUIKEdyaSBXF387epO03OQpcurXTVYQ/viewform"
                  )
                }
              >
                Order
              </button>
            </li>
          </nav>
        </div>
      </span>
    </>
  );
};

export default Head;
