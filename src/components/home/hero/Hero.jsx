import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="aboutus">
            <h1>About Us</h1>
            <div>
            <span style={{ marginBottom: "16px", display: "block" }}>
              At Batters Platters, we are passionate about bringing the rich,
              authentic flavors of Indian cuisine straight to your table. Our
              homemade batters are freshly ground and prepared without any
              preservatives, ensuring that every bite is as pure and wholesome
              as it is delicious. But we don’t stop there.
            </span>
            <span style={{ marginBottom: "16px", display: "block" }}>
              We also offer freshly made Indian cooking curries, aromatic
              Biryanis, and a variety of healthy snacks, all crafted with the
              same dedication to quality and tradition. Whether you're looking
              for the perfect dosa, a flavorful curry, or a satisfying snack,
              you can trust Batters Matter to deliver the true taste of home.
            </span>
            <span style={{ marginBottom: "16px", display: "block" }}>
              Experience the essence of homemade goodness with every dish.
              Welcome to Batters Matter, where tradition and taste come together
              on your plate.
            </span>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero
