import React, { useEffect, useState } from 'react';
import'./StartScreen.css';
import { useNavigate } from 'react-router-dom';
import pressSound from "../../assets/audio/app button click sound.mp3"
import { useCounter } from '../CounterContext/CounterContext';

function StartButton() {
  const [fadeout, setFadeout] = useState(false);
  const navigate = useNavigate();
  const { resetCounter } = useCounter();

  useEffect(() => {
    if (fadeout) {
      const timer = setTimeout(() => {
        resetCounter();
        navigate('/Main');
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [fadeout, navigate]);

  const handleButtonClick = () => {
    const audio = new Audio(pressSound);
    audio.play();

    setTimeout(() => {
      setFadeout(true);
    }, 5);
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
        <button className='startButton' onClick={handleButtonClick}>
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