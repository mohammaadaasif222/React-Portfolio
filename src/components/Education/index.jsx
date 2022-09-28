import React from "react";

function Education(){
    return<>
      <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12">
                  <h2 className="mb-4">Experiences</h2>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2022</span>
                             </div>
                             <div className="timeline-info">
                                  <h3><span>Software Engineer</span><small>NewTon School</small></h3>
                                  <p> Demonstrable knowledge of Data structures and algorithms with java and full stack technologies such as html, CSS , bootstrap, JavaScript, node.js, react.js , express.js , mongoDB,</p>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2021</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Web Developer</span><small>Mae.co.in</small></h3>
                                <p>I have worked there  as web developer and  worked on business word press website. I made website attractive as they asked to me . I have build  many pages such as stories page.</p>
                            </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2021</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>MERN Stack Developer</span></h3>
                                <p>I have worked on next .js build full dynamic web app there  in the web app we have beautiful UI and features  like we have multiuser platform where anyone can create account with email and password , also we can forgot your password if you are already a user.  and also have a admin dashboard . where admin can change the data like admin can create post and and publish it. so all user can see the new post .</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                  <h2 className="mb-4 mobile-mt-2">Educations</h2>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2021</span>
                             </div>
                             <div className="timeline-info">
                                  <h3><span>B.Tech</span><small>Computer Science</small></h3>
                                  <p>specialization in computer programming languages and computer system technologies. </p>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2017</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Intermediate</span><small>State Board</small></h3>
                                <p>Branch of mathematics that substitutes letters for numbers and uses simplification techniques to solve equations</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
}
export default Education;