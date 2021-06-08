import React from "react";
import {ChevronsUp, RefreshCw, ChevronsDown } from "react-feather";
import "./NavLinks.css";

const LinkToTop = (fontColor) => {

    return (
        <div className="chevrons">
            <ChevronsUp
            className="icon"
            size={"2rem"}
            strokeWidth={1}
            style={fontColor}          
            />
            <a href="#home" className="invisibleAnchor">
            Return to top
            </a>
            {/* <a href="#top" className="returnButton"></a>  */}
      </div>
    )
}

const Refresh = ({fontColor, onClick}) => {
  
    console.log(fontColor);
     return (
        <div className="refresh">
            <RefreshCw       
                size={"1.5rem"}
                strokeWidth={1}
                style={fontColor} 
                onClick={onClick}     
            />
        </div>
    )
}

const Next = (fontColor) =>{
    
    return(
    <div class="chevrons">
        <ChevronsDown 
        className="icon"
        size={"2rem"}
        strokeWidth={1}
        style={fontColor}                
        />
        <a href="#selectYourFile" className="invisibleAnchor">
        Next
        </a>
   </div>
    )
}

export {LinkToTop, Refresh, Next};