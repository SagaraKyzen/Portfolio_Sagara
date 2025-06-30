import React from "react";
import myImage from "../img/male.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Moechamad Rizky Sagara, I am commonly known as Rizky or Sagara. I am 23 years old and currently reside in Cimahi City.",
        },
        {
          id: "second-p-about",
          content:
            "I graduated from SMKN 11 Bandung, where I was actively involved in various organizations both inside and outside of school. ",
        },
        {
          id: "third-p-about",
          content:
            "I have a deep passion for the world of Information Technology, with a particular focus on programming and graphic design. I find joy in solving problems through code, whether it’s building websites, creating user interfaces, or developing simple applications.",
        },
        {
          id: "fourth-p-about",
          content:
            "In my free time, I enjoy running, hiking, cycling, listening to music, and playing games. These hobbies not only help me stay active but also inspire creativity in my work and personal life.",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                      <div className="about-img mb-3" style={{ textAlign: "center" }}>
                        <img
                          src={myImage}
                          className="img-fluid rounded b-shadow-a"
                          alt="Profile"
                          style={{ maxWidth: 180 }}
                        />
                      </div>
                      <div className="skill-mf mt-4 w-100">
                        <p className="title-s text-center">My Skill</p>
                        <div className="row justify-content-center">
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                              alt="HTML5"
                              title="HTML5"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                              alt="CSS3"
                              title="CSS3"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                              alt="JavaScript"
                              title="JavaScript"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                              alt="ReactJS"
                              title="ReactJS"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                              alt="Bootstrap"
                              title="Bootstrap"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                              alt="PHP"
                              title="PHP"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                              alt="MySQL"
                              title="MySQL"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"
                              alt="CodeIgniter"
                              title="CodeIgniter"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
                              alt="Tailwind CSS"
                              title="Tailwind CSS"
                              style={{ width: 40, margin: 8, marginTop: 20 }}
                            />
                          </div>
                          <div className="col-auto">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                              alt="Canva"
                              title="Canva"
                              style={{ width: 40, margin: 8 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About Me</h5>
                        </div>
                        {this.state.about_me.map((content) => (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* EXPERIENCE SECTION */}
        <section className="experience-mf sect-pt4">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
          <div className="container">
            <div className="title-box-2 text-center">
              <h5 className="title-left" style={{ letterSpacing: 2, color: '#fff' }}>EXPERIENCE</h5>
            </div>
            <div className="timeline-modern">
              {/* Item kiri */}
              <div className="timeline-modern-item left">
                <div className="timeline-modern-content">
                  <div className="timeline-modern-date"><i>2019 April - Sept</i></div>
                  <div className="timeline-modern-title"><b>INDUSTRIAL WORK PRACTICES</b></div>
                  <div className="timeline-modern-company">PT. Techno Multi Utama & CV. Blessing</div>
                  <div>Jl.Pesantren No.76,Cibabat & Jl SetraDuta K13A</div>
                  <div className="timeline-modern-skills">
                    <span className="timeline-modern-skill">Administration</span>
                    <span className="timeline-modern-skill">IT Support</span>
                  </div>
                </div>
              </div>
              {/* Item kanan */}
              <div className="timeline-modern-item right">
                <div className="timeline-modern-content">
                  <div className="timeline-modern-date"><i>2020 Juli - Des</i></div>
                  <div className="timeline-modern-title"><b>PAID INTERNSHIP (SOFTWARE HOUSE)</b></div>
                  <div className="timeline-modern-company">Junior Web Developer – ODOO ERP</div>
                  <div>Jl Komplek GBA Bojong Soang</div>
                  <div className="timeline-modern-skills">
                    <span className="timeline-modern-skill">Junior Web Developer</span>
                    <span className="timeline-modern-skill">Odoo</span>
                  </div>
                </div>
                
              </div>
              {/* Item kiri */}
              <div className="timeline-modern-item left">
                <div className="timeline-modern-content">
                  <div className="timeline-modern-date"><i>2021 Feb - Des</i></div>
                  <div className="timeline-modern-title"><b>WHOLESALE LACE WAREHOUSE</b></div>
                  <div className="timeline-modern-company">Warehouse Staff, Mobile</div>
                  <div>Jl. H. Haris No.80, RT.2/RW.9, Baros, Kota Cimahi</div>
                  <div className="timeline-modern-skills">
                    <span className="timeline-modern-skill">Administration</span>
                    <span className="timeline-modern-skill">Graphic Design</span>
                  </div>
                </div>
                
              </div>
              {/* Item kanan */}
              <div className="timeline-modern-item right">
                <div className="timeline-modern-content">
                  <div className="timeline-modern-date"><i>2022 - 2024 jan</i></div>
                  <div className="timeline-modern-title"><b>PT. YUNIKO ASIA PRIMA YAP</b></div>
                  <div className="timeline-modern-company">Production Administration</div>
                  <div>Jl Cihaneut No.30 Padaulun, Majalaya, Kab.Bandung</div>
                  <div className="timeline-modern-skills">
                    <span className="timeline-modern-skill">Administration</span>
                    <span className="timeline-modern-skill">Management</span>
                  </div>
                </div>
                
              </div>
              {/* Item kiri */}
              <div className="timeline-modern-item left">
                <div className="timeline-modern-content">
                  <div className="timeline-modern-date"><i>2024 Feb - Now</i></div>
                  <div className="timeline-modern-title"><b>WHOLESALE LACE WAREHOUSE</b></div>
                  <div className="timeline-modern-company">Warehouse Staff, Mobile</div>
                  <div>Jl. H. Haris No.80, RT.2/RW.9, Baros, Kota Cimahi</div>
                  <div className="timeline-modern-skills">
                    <span className="timeline-modern-skill">Administration</span>
                    <span className="timeline-modern-skill">Graphic Design</span>
                    <span className="timeline-modern-skill">Maklon</span>
                  </div>
                </div>
                
              </div>
              {/* Tambahkan item berikutnya dengan pola zig-zag */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
