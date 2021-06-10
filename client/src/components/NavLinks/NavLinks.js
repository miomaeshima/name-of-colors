import React from "react";
import { ChevronsUp, RefreshCw, ChevronsDown } from "react-feather";
import "./NavLinks.css";

const LinkToTop = ({fontColor}) => {
  console.log(fontColor)
  return (
    <div className="chevrons">
      <ChevronsUp
        className="icon"
        size={"2rem"}
        strokeWidth={1}
        style={fontColor}
      />
      <a href="#home" className="invisibleAnchor">
        Return to Top
      </a>
      {/* <a href="#top" className="returnButton"></a>  */}
    </div>
  );
};

const Refresh = ({ fontColor, onClick }) => {
  console.log(fontColor)
  return (
    <div className="refresh" tabIndex="0">
      <RefreshCw
        size={"1.5rem"}
        strokeWidth={1}
        style={fontColor}
        onClick={onClick}
      />
    </div>
  );
};

const Next = ({fontColor}) => {
  console.log(fontColor)
  return (
    <div className="chevrons">
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
  );
};

export { LinkToTop, Refresh, Next };
