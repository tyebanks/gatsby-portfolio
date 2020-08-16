import React from 'react';
import SocialLinks from '../components/SocialLinks';
import List from '../components/List.js';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
              <h3 className="text-third mb-5">Give me a shout.</h3>
              <List className="text-primary" title1="Email" title2="LinkedIn" title3="Twitter" text1="ebankst07@gmail.com" 
              text2="https://www.linkedin.com/in/ty-ebanks/" text3="https://twitter.com/ty_ebanks"/>
            
          </div>
        </div>
      </div>
      <SocialLinks/>
    </section>
  );  
}
