import React from "react";
import Head from "./Head";
import "./header.css";

const Header = () => {
  return (
    <>
      <Head />
      <header>
        <section className="header"></section>
        <span className="container welcome">
          <div className="welcome">
            <img
              src="./images/pot.jpg"
              alt
              style={{
                width: "100px",
                height: "100px",
                mixBlendMode: "multiply",
              }}
            />
            <div className="welcome-text">
              <h1>Welcome To Batters Platters</h1>
              <span>Where Memories Meet the Plate</span>
            </div>
            <img
              src="./images/pot.jpg"
              alt
              style={{
                transform: "scaleX(-1)",
                width: "100px",
                height: "100px",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </span>
      </header>
    </>
  );
};

export default Header;
