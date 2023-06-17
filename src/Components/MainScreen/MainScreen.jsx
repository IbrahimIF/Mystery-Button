
import "./MainScreen.css"
import {Link } from "react-router-dom";

function MainScreen() {
  return (
  <>
  <div className="flip">
  <div className="buttonContainer">
      <div className="baseButton">
      <Link to="/Random">  <button className="button" to="/page2"><p className="text">Button</p></button>
      </Link>
        <div className="buttonBellow"></div>
      </div>
    </div>
  </div>
  </>
  );
}

export default MainScreen;