
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import'./StartScreen.css';
import { useState } from 'react';


function StartButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };
return(
<>
<div className="container">
        <div
          className={`start-container ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <AwesomeButton type="secondary" href="/Main">
            Start
          </AwesomeButton>
          <div className="textContainer">
          <span className="title">Game Objective:</span>
            <span className="text"> Explore numerous pages and find all 10 buttons.</span>
          </div>
        </div>
      </div>
</>
  
);
}
export default StartButton;