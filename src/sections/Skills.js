import React from 'react';
import BigList from '../components/BigList.js';
import '../assets/sass/_skills.scss';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
       <div className="container">
          <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto text-center">
                  <h2 className=" mb-5">TECHNICAL SKILLS</h2>
                     {/* <h3>Web Programming & Other tools</h3> */}
                  <div><div className="row">                      
                            <div className="container-fluid">
                            <h3>Web Programming & Other tools</h3>
                            <ul className="row">
                            <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <BigList text1="HTML5" text2="CSS3" text3="JavaScript" text4="PHP"
                                text5="Gatsby" text6="WordPress" text7="Joomla" text8="Java/Eclipse"/> </div>

                            <div className="col-md-6 col-lg-8 mx-auto text-center">
                            <BigList text1="Atom" text2="VS Code" text3="GitHub" text4="Adobe XD"
                                        text5="Figma" text6="inVision" text7="Discord" text8="Slack"/> </div>


                                
                                
                           </ul>
                            
                        </div> 
                       </div>  
                 </div>  
              </div>
          </div>
       </div>
    </section>



        
          
            
       
     
  );  
}