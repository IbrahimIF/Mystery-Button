import "./SecondBtn.css";
import press from "../../assets/audio/Click - Sound Effect (HD).mp3"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function MainScreen() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    const audio = new Audio(press);
    audio.play();

  };

  const handleButtonOn = () => {
    const audio = new Audio(press);
    audio.play();
    setCounter(counter + 1);
    if (counter > 3){
      navigate("/Third");
    }


  }

  
   return (
<>
  <audio id="myAudio">
    <source src={press} type="audio/mpeg"></source>
  </audio>


<div className="buttonContainer2">
<div className="bellow"></div>
<div className="Noflip-box">
    <div className="Noflip-box-front"></div>
    <div className="Noflip-box-back">
      <div className="NoD3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClick}>
            <p className="text">Button</p>
          </button>
          <div className="buttonBellow"></div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="buttonContainer3">
<div className="bellow"></div>
<div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonOn}>
            <p className="text">Button</p>
          </button>
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