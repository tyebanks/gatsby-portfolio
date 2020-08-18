import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/portfolio/fullsize/1.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/1.jpg'),
    title: 'Category',
    desc: 'Project Name',
  },
  {
    src: require('../assets/images/portfolio/fullsize/2.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/2.jpg'),
    title: 'Category',
    desc: 'Project Name',
  },
  {
    src: require('../assets/images/portfolio/fullsize/3.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/3.jpg'),
    title: 'Category',
    desc: 'Project Name',
  },
  {
    src: require('../assets/images/portfolio/fullsize/4.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/4.jpg'),
    title: 'Category',
    desc: 'Project Name',
  },
  {
    src: require('../assets/images/portfolio/fullsize/5.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/5.jpg'),
    title: 'Category',
    desc: 'Project Name',
  },
  {
    src: require('../assets/images/portfolio/fullsize/6.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/6.jpg'),
    title: 'Category',
    desc: 'Project Name',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />

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
                className="btn btn-light btn-xl"
                href="https://tyebanks.github.io/cv.pdf"
                                                      >
          Download Now!
        </a>


          </div>
        </div>
      </div>
    </header>

    <section className="page-section" id="skills">
      <div className="container">
        <h2 className="text-center mt-0">Technical Skills</h2>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-gem text-primary mb-4"></i>
              <h3 className="h4 mb-2">Sturdy Themes</h3>
              <p className="text-muted mb-0">
                Our themes are updated regularly to keep them bug free!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <p className="text-muted mb-0">HTML5 </p>
              <p className="text-muted mb-0">CSS3</p>
              <p className="text-muted mb-0">JavaScript</p>
              <p className="text-muted mb-0">PHP</p>
              <p className="text-muted mb-0">Joomla</p>
                      <p className="text-muted mb-0">WordPress</p>
                      <p className="text-muted mb-0">Atom</p>
                      <p className="text-muted mb-0">VS Code </p>
                      <p className="text-muted mb-0">Java/Eclipse</p>
                      <p className="text-muted mb-0">GitHub</p>
            
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-globe text-primary mb-4"></i>
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
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-heart text-primary mb-4"></i>
              <h3 className="h4 mb-2">Made with Love</h3>
              <p className="text-muted mb-0">
                Is it really open source if it's not made with love?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>




    <section className="page-section bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">My Projects!</h2>
        <Scroll type="id" element="about">
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </Scroll>
        
            <section id="projects">
      <Gallery images={img_set} />
    </section>
        
      
      </div>
    </section>

    <section className="page-section bg-light" id="education">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-black mt-0">Education</h2>
            <hr className="divider light my-4" />
            <p className="text-black-50 mb-4">
            BSc Business Computing (Web Design)
            University of Northampton
            Northampton, U.K.
            NN1 5PH
            </p>
            <p className="text-black-50 mb-4">AAS degree in Computer Science
            University College Cayman Islands
            George Town, K.Y.
            KY1-1107 
            </p>
            <Scroll type="id" element="skills">
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#skills"
              >
                Get Started!
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

   
   

  

    <ContactUs />

    <Footer />
  </Layout>
);

export default IndexPage;
