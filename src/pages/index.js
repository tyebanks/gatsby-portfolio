import React from 'react';

import Layout from '../components/Layout';
// import Scroll from '../components/Scroll';
import Test from '../components/Test';
import Header from '../components/Header';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

// import Footer from '../components/Footer';

import my_img from '../assets/images/my-img.jpg';
import p1 from '../assets/images/project1.jpg';
import p2 from '../assets/images/project2.jpg';
import p3 from '../assets/images/project3.jpg';



const IndexPage = () => (
  <Layout>
  
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center mb-0">
          <div className="mx-auto text-center">
             <figure className="on"> <img src={my_img} className="img-fluid img rounded-circle" alt="Ty Ebanks" /></figure>
            
                    {/* <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1> */}       
             <h1>OH, HELLO THERE.</h1>
             <p>I’m Ty! I love designing websites. I currently spend my days honing my skills as a Junior Web Developer, while listening to Coldplay on Spotify.</p>
             {/* <Scroll type="id" element="skills"> */}
                 
             <button className="btn text-white" type="submit" onclick="window.open('https://tyebanks.github.io/cv.pdf')">Download CV</button>
      
                 
            {/* </Scroll>           */}
          </div>
      </div>
    </header>   
     <Skills/>
   
   
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
    {/* <Test/> */}
    {/* <Footer/> */}
  </Layout>
);

export default IndexPage;
