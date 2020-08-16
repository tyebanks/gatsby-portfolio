import React from 'react';
import SocialLinks from '../components/SocialLinks';
import List from '../components/List.js';

export default function Contact() {
  return (
    <section id="contact" className="contact-section bg-gradient-danger">
       <div className="grid-container">
            <h3 id="title" className="text-center text-third grid-item">Give me a shout.</h3>
           <div className="text-primary grid-item2">
           <List title1="Email" title2="LinkedIn" title3="Twitter" text1="ebankst07@gmail.com" 
                     text2="https://www.linkedin.com/in/ty-ebanks/" text3="https://twitter.com/ty_ebanks"/> 
           </div>
           
             <div className="grid-item3 pt-6"> <SocialLinks/></div>    
       </div>
    </section>
  );  
}
