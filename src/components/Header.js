import React from 'react';
import config from '../../config';

export default function Header() {
    return (
        <header id="page-top" className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                          <h1 className="text-uppercase text-white font-weight-bold"> {config.heading} </h1>
                                {/* <hr className="divider my-4" /> */}
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                          <p className="text-white-75 font-weight-light mb-5">{config.subHeading}</p>
                          <a className="btn btn-dark btn-xl"  href="https://tyebanks.github.io/cv.pdf">
                                Download CV
                          </a>
                    </div>
                </div>
            </div>
        </header>
  );
}