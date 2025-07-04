import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import imageOverlay from "../img/earth.jpg"; // pastikan path sesuai

class Intro extends React.Component {
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image"
        style={{
          backgroundImage: `url(${imageOverlay})`,
          backgroundColor: "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am M Rizky Sagara</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer",
                      "Graphic Designer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
               <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Portfolio
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
