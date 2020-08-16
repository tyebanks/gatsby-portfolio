import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import Header from '../components/Header';
import Contact from '../sections/Contact';
import Education from '../sections/Education';
// import Footer from '../components/Footer';

import logo from '../assets/images/logo2.png';
import product1 from '../assets/images/image-1.jpg';
import product2 from '../assets/images/image-2.jpg';
import product3 from '../assets/images/image-3.jpg';
import product4 from '../assets/images/image-4.jpg';



const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center mb-0">
          <div className="mx-auto text-center">
             <img src={logo} className="img-fluid" alt="" />
                    {/* <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1> */}       
             <p className="mt-5 mb-5">Convenient, Crafty and Courteous service</p>
             <Scroll type="id" element="about">
                 
                 <a href="#about"><i className="fas fa-angle-double-down text floating text-white"></i></a>
                 
            </Scroll>          
          </div>
      </div>
    </header>   
   
    <section id="skills" className="skills-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
          <h2 className=" mb-5">TECHNICAL SKILLS</h2>
            <h2 className="text-white mb-4">We love to Create</h2>
            <p className="text-white">We are the home of Cayman's best Handmade Jewelry, Chainmaille, Charms,
             Sculptures, Arts, Crafts, DIYs and more! We are always trying something new and fun and are happy
             to hear what you want to see us do!</p>
             <p className="text-white">Want to place an order? Send us a message via Facebook:
             <a className="text-yellow" href="https://www.facebook.com/outlandish.cayman/" > @outlandish.cayman</a>             
            </p>
            
          </div>
        </div>        
      </div>
    </section>
   
    <section id="products" className="products-section">
     
      <div className="container">  
      <h2 className=" mb-5">MY PROJECTS</h2>
        <div className="row">
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product1} alt=""/>
              <div className="card-body">
                <div className="card-title">Earrings</div>
                <div className="card-text">Price: CI$25</div>
              </div>
            </div>
          </div>
        

      
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product2} alt="" />
              <div className="card-body">
                <div className="card-title">Bracelets</div>
                <div className="card-text">Price: CI$25</div>
              </div>
            </div>
          </div>     

        
        
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product4} alt=""/>
              <div className="card-body">
                <div className="card-title">Pendants</div>
                <div className="card-text">Price: CI$25</div>
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
