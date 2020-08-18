import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer className="pb-5">
      <div className="container">
        <div className="small text-center text-muted">
       
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-2 mb-lg-0">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-2`}>
                  <i className={`fab fa-3x mb-3 ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </footer>

/* <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <a className="d-block" href={`mailto:${config.email}`}>
              {config.email}
            </a>
          </div> */





  );
}
