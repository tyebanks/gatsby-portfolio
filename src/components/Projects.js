import React from 'react';

const Projects = (props) => {
    return (
        <div className="project-card py-5">
            <p className="">{props.title}</p>
            <p className="">{props.subtitle1}</p>
            <img id="project-imgs" className="img-fluid" src={props.src} alt={props.description}/>
        </div>        
    )
}
export default Projects;

  
  

  
  