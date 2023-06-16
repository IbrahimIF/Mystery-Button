import React, { useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import'./StartScreen.css';
import { useNavigate } from 'react-router-dom';
import pressSound from "../../assets/audio/app button click sound.mp3"

function StartButton() {
  const [fadeout, setFadeout] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (fadeout) {
      const timer = setTimeout(() => {
        navigate('/Main');
      }, 3000); // Change page after 3 seconds (adjust the duration as needed)

      return () => clearTimeout(timer);
    }
  }, [fadeout, navigate]);


  const handleButtonClick = () => {
    setFadeout(true);
    // Additional actions or logic to perform when the button is clicked
  };

return(

<>
<audio id="myAudio">
  <source src={pressSound} type="audio/mpeg"></source>
</audio>

<div className={`fadein ${fadeout ? 'fadeout' : ''}`} >
<div className="container">
        <div className="start-container">
          <AwesomeButton type="secondary"  href='/Main' onClick={handleButtonClick}>
            Start
          </AwesomeButton>

          <div className="textContainer">
          <span className="title">Game Objective:</span>
            <span className="text"> Explore numerous pages and find all 10 buttons.</span>
          </div>
        </div>
      </div>
</div>

</>
  
);
}
export default StartButton;