import "./basicScreen.css";
import { Link } from "react-router-dom";


function MainScreen() {
   return (
    <>
    <div className="buttonContainer">

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
    </>
  );
}

export default MainScreen;