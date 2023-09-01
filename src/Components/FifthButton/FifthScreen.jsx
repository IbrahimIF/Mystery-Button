import "./FifthScreen.css";
import press from "../../assets/audio/Click - Sound Effect (HD).mp3"
import { useNavigate } from 'react-router-dom';
import { useCounter } from '../CounterContext/CounterContext';
import cow from '../../assets/Image/cow.png';
import pig from '../../assets/Image/pig.jpeg';
import goat from '../../assets/Image/goat.jpg';

import GoatAudio from '../../assets/audio/Goat Scream - Sound Effect (HD).mp3';
import CowAudio from '../../assets/audio/Minecraft cow sound effect.mp3';
import PigAudio from '../../assets/audio/Pig.mp3';

function MainScreen() {
  const navigate = useNavigate();
  const { totalCounter} = useCounter();
  const { incrementCounter2, counter2} = useCounter();
  const { btnCounter3, incrementBtnCounter3, btnCounter7, incrementBtnCounter7, btnCounter8, incrementBtnCounter8, btnCounter9, incrementBtnCounter9} = useCounter();



  const handleButtonClickSeven = () => {
    const audio = new Audio(GoatAudio);
    audio.play();
    incrementCounter2();
    if (btnCounter7 < 1){
      incrementBtnCounter7();
    }

    if (counter2 > 1){
      navigate("/Sixth");
    }

  };

  const handleButtonClickEight = () => {
    const audio = new Audio(CowAudio);
    audio.play();
    incrementCounter2();

    if (btnCounter8 < 1){
      incrementBtnCounter8();
    }

    if (counter2 > 1){
      navigate("/Sixth");
    }

  };

  const handleButtonClickNine = () => {
    const audio = new Audio(PigAudio);
    audio.play();
    incrementCounter2();
    if (btnCounter9 < 1){
      incrementBtnCounter9();
    }

    if (counter2 > 1){
      navigate("/Sixth");
    }

  };

  const handleButtonClickThree = () => {
    const audio = new Audio(press);
    audio.play();

    if (btnCounter3 < 1){
      incrementBtnCounter3();
    }

  };


   return (
<>
  <audio id="myAudio">
    <source src={press} type="audio/mpeg"></source>
  </audio>
  <audio id="myAudio2">
    <source src={GoatAudio} type="audio/mpeg"></source>
  </audio>
  <audio id="myAudio3">
    <source src={CowAudio} type="audio/mpeg"></source>
  </audio>
  <audio id="myAudio4">
    <source src={PigAudio} type="audio/mpeg"></source>
  </audio>

  <div className="btnCounterbox"> 
<div className="Noflip-box"> 
    <div className="Noflip-box-front"></div>
    <div className="Noflip-box-back">
      <div className="NoD3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickThree}>
            <p className="text">Button</p>
          </button>
          <div className="buttonBellow"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="btnCounter">{totalCounter}</div>
</div>

<div className="buttonContainer7">
<div className="bellow"></div>
<div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickSeven}>
            <p className="text">Goat</p>
            <img src={goat} className="Goat" alt="goat" />
          </button>
          <div className="buttonBellow"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="buttonContainer8">
<div className="bellow"></div>
<div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickEight}>
            <p className="text">Cow</p>
            <img src={cow} className="Cow" alt="cow" />
          </button>
          <div className="buttonBellow"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="buttonContainer9">
<div className="bellow"></div>
<div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickNine}>
            <p className="text">Pig</p>
            <img src={pig} className="Pig" alt="pig" />
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