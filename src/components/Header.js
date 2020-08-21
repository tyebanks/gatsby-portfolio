import React from 'react';
import config from '../../config';
import MyImg from '../assets/images/portfolio-img.jpg';
import Socialicons from '../components/Socialicons';

export default function Header() {
    return (
        <header id="home" className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="img-container mb-0">
                         <img className="circle" src={MyImg} alt="ty ebanks"/>
                    </div>
                    <div className="text">
                        <div className="heading-text"> 
                            <h1 className="text-uppercase text-white font-weight-bold"> {config.heading} </h1>
                        </div>
                        <div className="para-text">
                            <p>{config.subHeading}</p>             
                        </div>
                       <div className="button"><a className="btn"  href="https://tyebanks.github.io/cv.pdf">Download CV</a></div>  
                    </div>     
                    <div className="top-icons">  <Socialicons/> </div>
                </div>
            </div>
        </header>
  );
}