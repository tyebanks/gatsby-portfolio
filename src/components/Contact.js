import React from 'react';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
              <h3 className="text-third mb-5">Give me a shout.</h3>
              <p><a href="https://twitter.com/ty_ebanks" className="text-black mb-5">ebankst07@gmail.com</a></p>
              <p className="text-black mb-5"><a href="https://www.linkedin.com/in/ty-ebanks/">https://www.linkedin.com/in/ty-ebanks/</a></p>
              <p className="text-black mb-5"><a href="https://twitter.com/ty_ebanks">https://twitter.com/ty_ebanks</a></p>
          </div>
        </div>
      </div>
      <SocialLinks/>
    </section>
  );

  
}
