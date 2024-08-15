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
              }}
            />
            <div className="welcome-text">
              <h1>Welcome To Batters Matters</h1>
              <span>Where Memories Meet the Plate</span>
            </div>
            <img
              src="./images/pot.jpg"
              alt
              style={{
                transform: 'scaleX(-1)',
                width: "100px",
                height: "100px",
              }}
            />
          </div>
        </span>
      </header>
    </>
  );
};

export default Header;
