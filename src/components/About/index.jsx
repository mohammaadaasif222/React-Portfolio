import React from "react";

function About() {
  return (
    <>
      <section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <small className="small-text">
                  Welcome to{" "}
                  <span className="mobile-block">my portfolio website!</span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2">Hey folks, I'm</span>
                  <div className="animated-info">
                    <span className="animated-item">Mohamamd Aasif</span>
                    <span className="animated-item">Software Engineer</span>
                    <span className="animated-item">Full-Stack Developer</span>
                  </div>
                </h1>

                <p>
                  Building a successful product is a challenge. I am highly
                  energetic in user experience design, interfaces and web
                  development.
                </p>

                <div className="custom-btn-group mt-4">
                  <a
                    href="https://drive.google.com/file/d/1ZmgKdeHvf668rt0jhzSz6PYFiHG0EO2w/view?usp=sharing" target='_blank'
                    
                    className="btn mr-lg-2 custom-btn"
                  >
                    <i className="uil uil-file-alt"></i> Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="btn custom-btn custom-btn-bg custom-btn-a"
                  >
                    Get a free quote
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img
                  src="https://res.cloudinary.com/mae-com-in/image/upload/v1664266061/undraw_software_engineer_lvl5_xnjr0e.svg"
                  className="img-fluid"
                  alt="svg "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
