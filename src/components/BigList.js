import React from 'react';

const BigList = (props) => {
    return (
        <div className="container">     
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
        </div>
    )
}
export default BigList;