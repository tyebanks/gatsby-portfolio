import React from 'react';
import config from '../../config';


export default function ContactUs() {
  return (
    <section className="page-section bg-dark" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div id="contactinfo" className="col-lg-8 text-center">
            <h3 className="mt-0 pb-5">Give me a shout.</h3>
            <h4>Email</h4>
            <a className="links" href={`mailto:${config.email}`}>ebankst07@gmail.com</a>
            <h4>LinkedIn</h4>
            <a className="links" href='https://www.linkedin.com/in/ty-ebanks'>https://www.linkedin.com/in/ty-ebanks</a>
            <h4>Twitter</h4>
            <a className="links" href='https://www.twitter.com/ty_ebanks'>https://www.twitter.com/ty_ebanks</a>
          </div>
        </div>
    
      </div>
    </section>
  );
}
