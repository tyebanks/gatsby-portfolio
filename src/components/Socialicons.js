import React from 'react';
import config from '../../config';

export default function Socialicons() {
  return (
          <div className="col-lg-8 text-center mt-0 mb-lg-0">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-2`}>
                  <i className={`fab fa-3x mb-3 ${icon} icons`}></i>
                </a>
              );
            })}
          </div> 
  );
}
