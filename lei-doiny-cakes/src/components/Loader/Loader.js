import React from "react";
import '../css/Main.css';

function LoaderingLoader() {
    return(
        <div className="loader">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
        );
};

export default LoaderingLoader;