import React, { useState } from "react";
import { Link } from "react-router-dom";

const Head = () => {
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
              <i
                className="fab fa-facebook-f icon"
                style={{
                  color: "green",
                  marginLeft: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              ></i>
              <i
                className="fab fa-instagram icon"
                style={{
                  color: "green",
                  marginLeft: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              ></i>
              <i
                className="fab fa-youtube icon"
                style={{
                  color: "green",
                  marginLeft: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              ></i>
              <i
                className="fab fa-whatsapp"
                style={{
                  color: "green",
                  marginLeft: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              ></i>
            </div>
          </div>
        </div>
      </section>
    
      <span className="link">
        <div>
          <nav className="navbar">
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Catering Menu">Catering Menu</Link>
            </li>
            <li>
              <Link to="/Order">Order</Link>
            </li>
          </nav>
        </div>
      </span>
    </>
  );
};

export default Head;
