import React, { useState } from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <img
              src="./images/hand.jpg"
              alt
              style={{
                width: "100px",
                height: "100px",
              }}
            />

            <div className="logo-text">
              <h1>BATTERS MATTER</h1>
              <span>Where Memories Meet the Plate</span>
            </div>
          </div>
          <div className="social">
            <span> Contact: </span>
            <i
              className="fas fa-phone "
              style={{
                transform: "scaleX(-1)",
                color: "green",
                fontSize: "15px",
              }}
            ></i>{" "}
            +1 (660) 525-6685
            <i
              className="fab fa-whatsapp fa-1x"
              style={{
                color: "green",
                marginLeft: "20px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            ></i>{" "}
            +1 (660) 525-6685
            <span className="link">
              <div>
                <nav className="flexSB">
                  <li>
                    <Link to="/Menu">Menu</Link>
                  </li>
                  <li>
                    <Link to="/Catering Menu">Catering Menu</Link>
                  </li>
                  <li>
                    <Link to="/Order">Order</Link>
                  </li>
                  <li>
                    <Link to="/FollowUS">FollowUs</Link>
                  </li>
                </nav>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
