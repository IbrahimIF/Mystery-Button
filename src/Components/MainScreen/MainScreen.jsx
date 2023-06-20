import "./MainScreen.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function MainScreen() {
   return (
    <>
    <div className="buttonContainer">
    <div className="flip-box">

<div className="flip-box-front">
</div>

<div className="flip-box-back">

<div className="D3animation">
        <div className="baseButton">
          <Link to="/Random">
            <button className="button">
              <p className="text">Button</p>
            </button>
          </Link>
          <div className="buttonBellow"></div>
        </div>
      </div>
      </div>

</div>

</div>
    </>
  );
}

export default MainScreen;