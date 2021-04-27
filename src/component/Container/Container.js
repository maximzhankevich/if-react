import React from 'react';
import './Container.css';

function Container(props) {
    const param = props;
    return (
        <div className= "Container"> 
          {param.children}
        </div>
    );
};

export default Container;