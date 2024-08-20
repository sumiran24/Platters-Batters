import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <Heading subtitle="Batters" />
            <span>
              Freshly ground and homemade, our batters bring the authentic taste
              of tradition to your kitchen, without preservatives.
            </span>
            <img src="./images/Batters.jpg" alt="" />
          </div>
          <div className="right row">
            <div className="items">
              <button className="order-btn">Order Now</button>
              <div className="location">
                <span>Pickup Locations: </span>
       
                  <div>Pickup on Tuesday’s and Friday’s</div>
                  <div>Bretton Woods</div>
                  <div>Estates of Shaddock</div>
                  <div>Robinson Ridge</div>
                  <div>Delivery - MinOrder $50</div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </>
  );
}

export default AboutCard
