import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import Header from '../components/Header';
import Contact from '../sections/Contact';
import Education from '../sections/Education';
// import Footer from '../components/Footer';

import logo from '../assets/images/logo2.png';
import p1 from '../assets/images/project1.jpg';
import p2 from '../assets/images/project2.jpg';
import p3 from '../assets/images/project3.jpg';



const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center mb-0">
          <div className="mx-auto text-center">
             <img src={logo} className="img-fluid" alt="" />
                    {/* <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1> */}       
             <h1>OH, HELLO THERE.</h1>
             <p className="mt-5 mb-5">I’m Ty! I love designing websites. I currently spend my days honing my skills as a Junior Web Developer, while listening to Coldplay on Spotify.</p>
             <Scroll type="id" element="about">
                 
                 <a href="#about"><i className="fas fa-angle-double-down text floating text-white"></i></a>
                 
            </Scroll>          
          </div>
      </div>
    </header>   
   
    <section id="skills" className="skills-section text-center">
      <div className="container">
      <h2 className=" mb-5">TECHNICAL SKILLS</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
         
             <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Gatsby</li>
              <li>WordPress</li>
              <li>Joomla</li>
              <li>Java/Eclipse</li>


              <li>Atom</li>
              <li>VS Code</li>
              <li>GitHub</li>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>inVision</li>
              <li>Discord</li>
              <li>Slack</li>
            
           
            
          </div>
        </div>        
      </div>
    </section>
   
    <section id="projects" className="projects-section">
     
      <div className="container">  
      <h2 className=" mb-5">MY PROJECTS</h2>
        <div className="row">
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={p1} alt=""/>
              <div className="card-body">
                <div className="card-title">Web Design</div>
                <div className="card-text">Gatsby+React</div>
              </div>
            </div>
          </div>
        

      
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={p2} alt="" />
              <div className="card-body">
                <div className="card-title">Web Dev</div>
                <div className="card-text">JavaScript</div>
              </div>
            </div>
          </div>     

        
        
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={p3} alt=""/>
              <div className="card-body">
                <div className="card-title">Web Dev</div>
                <div className="card-text">HTML5+CSS3</div>
              </div>
            </div>
          </div>
      
         
        </div>
      </div>  
       
    </section> 
    <Education/>
    <Contact />
    {/* <Footer/> */}
  </Layout>
);

export default IndexPage;
