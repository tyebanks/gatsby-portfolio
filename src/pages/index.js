import React from 'react';

import Layout from '../components/Layout';
// import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SkillsText from '../components/SkillsText';
import EduText from '../components/EduText';
import ContactUs from '../components/ContactUs';
import Projects from '../components/Projects';
import Project1 from '../assets/images/project1.jpg';
import Project2 from '../assets/images/project2.jpg';
import Project3 from '../assets/images/project3.jpg';


const IndexPage = () => (
  <Layout>
    <Navigation />

    <header id="page-top" className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              {config.heading}
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              {config.subHeading}
            </p>
            <a
                className="btn btn-dark btn-xl"
                href="https://tyebanks.github.io/cv.pdf"
                                                      >
          Download CV
        </a>


          </div>
        </div>
      </div>
    </header>

    <section className="page-section" id="skills">
      <div className="container">
        <div>
           <h2 className="text-center mt-0 heading">TECHNICAL SKILLS</h2>
        </div>
        <div> 
           <h3 className="text-center subheading">Web Programming & Other tools</h3>
        </div>
        
        <div className="prop-container">
            <SkillsText text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP" text5="WordPress" text6="Joomla"
             text7="Atom" text8="VS Code" text9="Java/Eclipse" text10="GitHub" text11="Adobe PS" text12="Adobe Ai"
             text13="Figma" text14="inVision" text15="Discord" text16="Slack"  text17="Skype" 
             text18="GatsbyJS" text19="ReactJS" text20="OneDrive"/>
        </div>
            {/* <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <i className="fas fa-4x fa-globe text-primary mb-4"></i>
              <p className="text-muted mb-0">HTML5 </p>
              <p className="text-muted mb-0">CSS3</p>
          
          </div>
          {/* <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
           
              <p className="text-muted mb-0">Adobe Illustrator </p>
              <p className="text-muted mb-0">Adobe Photoshop</p>
              <p className="text-muted mb-0">Figma</p>
              <p className="text-muted mb-0">inVision</p>
              <p className="text-muted mb-0">Discord</p>
                      <p className="text-muted mb-0">Slack</p>
                      <p className="text-muted mb-0">Skype</p>
                      <p className="text-muted mb-0">GatsbyJS </p>
                      <p className="text-muted mb-0">ReactJS</p>
                      <p className="text-muted mb-0">OneDrive</p>
            </div>
          </div> */}
         
          </div>
    </section>

     {/* PROJECTS SECTION  */}
    <section id="projects" className="page-section bg-light">
      <div className="container">
      <div className="heading"><h2 className="mb-4 text-center">MY PROJECTS</h2></div>
            <div className="card-container">           
                <Projects title="Web Design:" subtitle1="GatsbyJS" src={Project1} description="Outlandish Cayman"/>
                <Projects title="Web Development Game:" subtitle1="JavaScript" src={Project2} description="Hero Game"/>
                <Projects title="Web Development News:" subtitle1="HTML+CSS" src={Project3} description="News Site"/>
            </div>      
      </div>
    </section>


    <section className="page-section bg-light" id="education">
    <div className="education-container">
      <div className="container">
        {/* <div className="text"> */}
          <div className="col-lg-8 edutext ">
            <h2 className="text-black mt-0 text-center pb-5">EDUCATION</h2>
           <div className="mb-5 component-container">
              <EduText subtitle="BSc Business Computing (Web Design)" 
                text1="University of Northampton"
                text2="Waterside Campus"
                text3="Northampton, U.K."/>
          
            <EduText subtitle="AAS Degree- Computer Science" 
              text1="University of the Cayman Islands"
              text2="Olympic Way"
              text3="George Town, C.I."/>
             </div>
           </div>
       {/* </div> */}
        </div>
      </div>
    </section>
    <ContactUs />
    <Footer />
  </Layout>
);

export default IndexPage;


 /* <Scroll type="id" element="skills">
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#skills"
              >
                Get Started!
              </a>
            </Scroll> *
            /* <Scroll type="id" element="skills">
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </Scroll> */