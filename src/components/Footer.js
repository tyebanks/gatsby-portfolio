import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer className="pb-4 bg-dark">
      <div className="container">
        <div className="small text-center text-muted">
       
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-2 mb-lg-0">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-3`}>
                  <i className={`fab fa-3x mb-3 ${icon} icons`}></i>
                </a>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
