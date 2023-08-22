import "./basicScreen.css";

import press from "../../assets/audio/Click - Sound Effect (HD).mp3"
import press2 from "../../assets/audio/Goat Scream - Sound Effect (HD).mp3"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function MainScreen() {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const audio = new Audio(press);
    audio.play();

    const timer = setTimeout(() => {
      navigate('/Random');
    }, 200); //0.2 second 

    return () => clearTimeout(timer);
  };
 
  const start = () => {
    const audio2 = new Audio(press2);
    audio2.play();
    setCounter(counter + 1);
  }
  

   return (
    <>
<audio id="myAudio">
  <source src={press} type="audio/mpeg"></source>
</audio>

<audio id="myAudio2">
  <source src={press2} type="audio/mpeg"></source>
</audio>

<div className="buttonContainer">
  <div className="D3animation">
    <div className="baseButton">
      <button className="button" onClick={handleButtonClick}>
        <p className="text">Button</p>
      </button>
      <div className="buttonBellow"></div>
    </div>
  </div>
</div>


<div className="buttonContainer">
  <div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
        <div className="baseButton">
          <button className="button" onClick={start}>
            <p className="text">Button</p>
          </button>
        <div className="buttonBellow"></div>
      </div>
    </div>
    </div>
  </div>
</div>
<div><p> goat screamed = {counter} </p></div>

    </>
  );
}

export default MainScreen;