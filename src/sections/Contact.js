import React from 'react';
import SocialLinks from '../components/SocialLinks';
import List from '../components/List.js';

export default function Contact() {
  return (
    <section id="contact">
       <div>
            <h3 className="text-third">Give me a shout.</h3>
           <div className="text-primary">
           <List title1="Email" title2="LinkedIn" title3="Twitter" text1="ebankst07@gmail.com" 
                     text2="https://www.linkedin.com/in/ty-ebanks/" text3="https://twitter.com/ty_ebanks"/> 
           </div>
           
             <div className=""> <SocialLinks/></div>    
       </div>
    </section>
  );  
}
