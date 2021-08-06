import React from 'react';
import '../css/Main.css';

const Title = (props) => {
    return(
        <h1 className="main-title">{props.title}</h1>
    );
};

export default Title;
