import React from "react";
import "./stars.scss";
import imageOverlay from "../img/earth.jpg";

const socials = [
  { icon: "ion-social-instagram", link: "https://www.instagram.com/moe_rzs/" },
  { icon: "ion-social-github", link: "https://github.com/SagaraKyzen" },
  { icon: "ion-social-linkedin", link: "https://www.linkedin.com/in/rizky-sagara-1514091b4/" },
];

const Contact = () => {
  return (
    <section
      className="footer-paralax bg-image sect-mt4 route"
      style={{
        backgroundImage: `url(${imageOverlay})`,
        backgroundColor: "transparent",
      }}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="overlay-mf" />

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  {/* Form (mailto) */}
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <form
                      action="mailto:sagararizky1002@gmail.com"
                      method="POST"
                      encType="text/plain"
                    >
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            name="Subject"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <textarea
                            name="Message"
                            rows="5"
                            className="form-control"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="button button-a button-big button-rouded"
                          >
                            Send via Email
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Info */}
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, collaborate, or just say hi — feel free!
                        <br />
                        This form will open your email client directly.
                      </p>
                    </div>

                    {/* Social */}
                    <div className="socials">
                      <ul>
                        {socials.map((s, i) => (
                          <li key={i}>
                            <a
                              href={s.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className={s.icon}></i>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box text-center text-light">
                &copy; {new Date().getFullYear()} Moechamad Rizky Sagara. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
