import React, { useEffect, useState } from 'react';
import'./EndScreen.css';
import { useNavigate } from 'react-router-dom';
import pressSound from "../../assets/audio/app button click sound.mp3"
import { useCounter } from '../CounterContext/CounterContext';

function StartButton() {
  const [fadeout, setFadeout] = useState(false);
  const navigate = useNavigate();
  const { totalCounter} = useCounter();

  useEffect(() => {
    if (fadeout) {
      const timer = setTimeout(() => {
        navigate('/Start');
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [fadeout, navigate]);

  const handleButtonClick = () => {
    const audio = new Audio(pressSound);
    audio.play();

    setTimeout(() => {
      setFadeout(true);
    }, 6);
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
            return to Start
          </button>
          <div className='startButtonBellow'></div>
        </div>
          <div className="textContainer">
          <span className="title">You finnished and found all buttons</span>
            <span className="text"> well done you waste of space you found {totalCounter} buttons </span>
          </div>
        </div>
      </div>
</div>

</>
  
);
}
export default StartButton;