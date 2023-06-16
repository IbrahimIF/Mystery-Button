import React, { useEffect, useState } from 'react';
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
    const audio = new Audio(pressSound);
    audio.play();

    setTimeout(() => {
      setFadeout(true);
    }, 500); // Add a delay of 500 milliseconds before fading out (adjust as needed)
  };

return(

<>
<audio id="myAudio">
  <source src={pressSound} type="audio/mpeg"></source>
</audio>

<div className={`fadein ${fadeout ? 'fadeout' : ''}`} >
<div className="container">
        <div className="start-container">
        
        <div className="baseStartButton">
        <button className='startButton' href='/Main' onClick={handleButtonClick}>
            Start
          </button>
          <div className='startButtonBellow'></div>
        </div>
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