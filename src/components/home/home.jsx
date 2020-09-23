import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { NavLink } from "react-router-dom";
import './home.css';


const HomePage = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../office.json"),
    });
  }, []);
  return (
    <section id="header">
      <div className="container-fluid nav_bar  ">
        <div className="row ">
          <div className="col-md-5 typewriter content ">
            <h3>
              Welcome to Talent Science School <br />
            </h3>
            
            <p>We are the team of talented Teachers to grow up</p>
            <NavLink to="/signin" className="btn">
              Login
            </NavLink>
          </div>
          <div className="col-md-7 container " ref={container}></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
