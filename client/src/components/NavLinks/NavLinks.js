import React from "react";
import {ChevronsUp, RefreshCw } from "react-feather";

const LinkToTop = (fontColor) => {

    return (
        <div id="upButtonContainer">
        <ChevronsUp
          size={32}
          strokeWidth={1}
          style= {{fontColor}}
        />
        <a href="#home" class="invisibleAnchor">
          top
        </a>
        {/* <a href="#top" className="returnButton"></a>  */}
      </div>
    )
}

const Refresh = (fontColor) => {

    return (
        <div>
            <RefreshCw 
                size={32}
                strokeWidth={1}
                sttke={{fontColor}}
            />
        </div>
    )
}
export {LinkToTop, Refresh};