import React from "react";
import {ChevronsUp, RefreshCw } from "react-feather";

const LinkToTop = (fontColor) => {

    return (
        <div id="linkToTop">
        <ChevronsUp
          size={32}
          strokeWidth={1}
          style= {fontColor}
          
        />
        <a href="#home" className="invisibleAnchor">
          top
        </a>
        {/* <a href="#top" className="returnButton"></a>  */}
      </div>
    )
}

const Refresh = ({fontColor, onClick}) => {
  
      
 

    return (
        <div id="refresh">
            <RefreshCw       
                size={32}
                strokeWidth={1}
                style={fontColor} 
                onClick={onClick}      
            
            />
        </div>
    )
}
export {LinkToTop, Refresh};