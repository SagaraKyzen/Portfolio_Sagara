import React from "react";

//import stock
import stock from "../img/image1.png";
import stock1 from "../img/image2.png";
import stock2 from "../img/image6.png";
import stock3 from "../img/image3.png";
import stock4 from "../img/image4.png";
import stock5 from "../img/image5.png";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Portfolio</h3>
                  <p className="subtitle-a">
                    A curated collection of my works, showcasing my experience, skills, and creative projects in the fields of programming, graphic design, and IT development.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a href={stock} data-lightbox="gallery-vmarine">
                    <div className="work-content">
                      <h2 className="w-title">OLaundry - Web Application
                        <div className="work-img">
                          <img src={stock} alt="" className="img-fluid" />
                        </div>
                      </h2>
                      <div className="w-more">

                        <span className="w-ctegory">
                          <span className="timeline-modern-skill">HTML5</span>
                          <span className="timeline-modern-skill">CSS3</span>
                          <span className="timeline-modern-skill">Bootstrap</span>
                          <span className="timeline-modern-skill">PHP</span>
                          <span className="timeline-modern-skill">CODEIGNITER</span>
                        </span>
                      </div>
                    </div>
                    <a
                      href={stock1}
                      data-lightbox="gallery-vmarine"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock3}
                      data-lightbox="gallery-vmarine"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock4}
                      data-lightbox="gallery-vmarine"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock5}
                      data-lightbox="gallery-vmarine"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock2}
                      data-lightbox="gallery-vmarine"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href={stock1} data-lightbox="gallery-vmarine">
                    <div className="work-content">
                      <h2 className="w-title">Odoo ERP - Training
                        <div className="work-img">
                          <img src={stock1} alt="" className="img-fluid" />
                        </div>
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <span className="timeline-modern-skill">PYTHON</span>
                          <span className="timeline-modern-skill">ODOO</span>
                          <span className="timeline-modern-skill">XML</span>
                          <span className="timeline-modern-skill">HTML</span>
                        </span>
                      </div>
                    </div>
                    <a
                      href={stock1}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock3}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock4}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock5}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock2}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href={stock3} data-lightbox="gallery-vmarine">
                    <div className="work-content">
                      <h2 className="w-title">System Utilization - Production Report
                        <div className="work-img">
                          <img src={stock3} alt="" className="img-fluid" />
                        </div>
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <span className="timeline-modern-skill">OFFICE</span>
                          <span className="timeline-modern-skill">EXCEL</span>
                          <span className="timeline-modern-skill">WORD</span>
                          {/* <span className="timeline-modern-skill">HTML</span> */}
                        </span>
                      </div>
                    </div>
                    <a
                      href={stock1}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock3}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock4}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock5}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock2}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href={stock4} data-lightbox="gallery-vmarine">
                    <div className="work-content">
                      <h2 className="w-title">Creative Design - Comercial Purpose
                        <div className="work-img">
                          <img src={stock4} alt="" className="img-fluid" />
                        </div>
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <span className="timeline-modern-skill">PHOTOSHOP</span>
                          <span className="timeline-modern-skill">CANVA</span>
                          {/* <span className="timeline-modern-skill"></span> */}
                          {/* <span className="timeline-modern-skill">HTML</span> */}
                        </span>
                      </div>
                    </div>
                    <a
                      href={stock1}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock3}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock4}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock5}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock2}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href={stock5} data-lightbox="gallery-vmarine">
                    <div className="work-content">
                      <h2 className="w-title">Nature Photography
                        <div className="work-img">
                          <img src={stock5} alt="" className="img-fluid" />
                        </div>
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <span className="timeline-modern-skill">CAMERA</span>
                          <span className="timeline-modern-skill">LIGHTROOM</span>
                          {/* <span className="timeline-modern-skill"></span> */}
                          {/* <span className="timeline-modern-skill">HTML</span> */}
                        </span>
                      </div>
                    </div>
                    <a
                      href={stock1}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock3}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock4}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock5}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock2}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href={stock2} data-lightbox="gallery-vmarine">
                    <div className="work-content">
                      <h2 className="w-title">Makna Karya Tech Spark - Landing Page
                        <div className="work-img">
                          <img src={stock2} alt="" className="img-fluid" />
                        </div>
                      </h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <span className="timeline-modern-skill">HTML5</span>
                          {/* <span className="timeline-modern-skill">CSS3</span> */}
                          <span className="timeline-modern-skill">TAILWIND CSS</span>
                          <span className="timeline-modern-skill">JAVASCRIPT</span>
                          <span className="timeline-modern-skill">REACT.JS</span>
                        </span>
                      </div>
                    </div>
                    <a
                      href={stock1}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock3}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock4}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock5}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                    <a
                      href={stock2}
                      data-lightbox="gallery-aguadeluz"
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}

export default Portfolio;
