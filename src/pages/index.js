import React from 'react';


import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import SkillsText from '../components/SkillsText';
import Projects from '../components/Projects';
import Project1 from '../assets/images/project1.jpg';
import Project2 from '../assets/images/project2.jpg';
import Project3 from '../assets/images/project3.jpg';
import EduText from '../components/EduText';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Navigation />
 
   {/* LANDING SECTION */}
    <Header/>

    {/* TECHNICAL SKILLS SECTION  */}
    <section className="page-section" id="skills">
      <div className="container">
        <div> <h2 className="text-center mt-0 heading">TECHNICAL SKILLS</h2> </div>
        <div> <h3 className="text-center subheading">Web Programming & Other tools</h3> </div>
        <div className="prop-container">
            <SkillsText text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP" text5="WordPress" text6="Joomla"
             text7="Atom" text8="VS Code" text9="Java/Eclipse" text10="GitHub" text11="Adobe PS" text12="Adobe Ai"
             text13="Figma" text14="inVision" text15="Discord" text16="Slack"  text17="Skype" 
             text18="GatsbyJS" text19="ReactJS" text20="OneDrive"/>
        </div>
      </div>
    </section>

    {/* PROJECTS SECTION  */}
    <section id="projects" className="page-section bg-light">
      <div className="container">
      <div className="heading"><h2 className="mb-4 pt-5 text-center">MY PROJECTS</h2></div>
            <div className="card-container">           
                <Projects title="Web Design:" subtitle1="GatsbyJS" src={Project1} description="Outlandish Cayman"/>
                <Projects title="Web Development Game:" subtitle1="JavaScript" src={Project2} description="Hero Game"/>
                <Projects title="Web Development News:" subtitle1="HTML+CSS" src={Project3} description="News Site"/>
            </div>      
      </div>
    </section>

    {/* EDUCATION SECTION  */}
    <section className="page-section bg-light" id="education">
    <div className="education-container">
      <div className="container">
          <div className="col-lg-8 edutext ">
            <h2 className="text-black mt-0 text-center pb-5">EDUCATION</h2>
            <div className="mb-5 component-container">
              <EduText subtitle="BSc Business Computing (Web Design)" text1="University of Northampton"
                text2="Waterside Campus" text3="Northampton, U.K."/>
              <EduText subtitle="AAS Degree- Computer Science" text1="University of the Cayman Islands"
                text2="Olympic Way" text3="George Town, C.I."/>
             </div>
           </div>
        </div>
      </div>
    </section>
    {/* CONTACT SECTION */}
    <ContactUs />
    <Footer />
  </Layout>
);

export default IndexPage;
