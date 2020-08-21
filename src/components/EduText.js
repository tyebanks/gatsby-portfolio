import React from 'react';


export default function Education(props) {
  return (
    <div className="card mb-5">
        <div className="card-body">
            <h6 className="card-subtitle mb-2">{props.subtitle}</h6>
            <p className="card-text">{props.text1}</p>
            <p className="card-text">{props.text2}</p>
            <p className="card-text">{props.text3}</p>
        </div>
    </div>
   
  );
}