import React from 'react';

const List = (props) => {
    return (
        <div>
         {/* give it a bootstrap column  */}
           <div className="text-left">             
                  <h3 className="text-primary text-left">{props.title1}</h3>
                  <a href={props.text1}><p>{props.text1}</p></a>
                  <h3 className="text-primary">{props.title2}</h3>
                  <a href={props.text2}><p>{props.text2}</p></a>
                  <h3 className="text-primary">{props.title3}</h3>
                  <a href={props.text3}><p>{props.text3}</p></a>                             
            </div>    
        </div>
    )
}
export default List;