import "./FourthBtn.css";
import press from "../../assets/audio/Click - Sound Effect (HD).mp3"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {useCounter} from '../../Components/CounterContext/CounterContext';

function MainScreen() {
  const navigate = useNavigate();
  const { incrementCounter } = useCounter();
  const { btnCounter1, incrementBtnCounter1, btnCounter2, incrementBtnCounter2, btnCounter3, incrementBtnCounter3, btnCounter4, incrementBtnCounter4, btnCounter5, incrementBtnCounter5 } = useCounter();
  const { totalCounter} = useCounter();

  const handleButtonClickOne = () => {
    const audio = new Audio(press);
    audio.play();
    if (btnCounter1 < 1){
      incrementBtnCounter1();
    }
  };


  const handleButtonClickTwo = () => {
    const audio = new Audio(press);
    audio.play();
    setCounter(counter + 1);
    if (counter > 1){
      navigate("/Monday");
    }
    if (btnCounter2 < 1){
      incrementBtnCounter2();
    }
  };

  const handleButtonClickThree = () => {
    const audio = new Audio(press);
    audio.play();

    if (btnCounter3 < 1){
      incrementBtnCounter3();
    }

  };

  const handleButtonClickFour = () => {
    const audio = new Audio(press);
    audio.play();

    if (btnCounter4 < 1){
      incrementBtnCounter4();
    }

    incrementCounter();
    navigate("/Random");
  }

  const handleButtonClickFive = () => {
    const audio = new Audio(press);
    audio.play();

    if (btnCounter5 < 1){
      incrementBtnCounter5();
    }

  }
  
   return (
<>
  <audio id="myAudio">
    <source src={press} type="audio/mpeg"></source>
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

<div className="buttonContainer2">
<div className="bellow"></div>
<div className="Noflip-box">
    <div className="Noflip-box-front"></div>
    <div className="Noflip-box-back">
      <div className="NoD3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickOne}>
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
<div className="Noflip-box">
    <div className="Noflip-box-front"></div>
    <div className="Noflip-box-back">
      <div className="NoD3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickTwo}>
            <p className="text">Button</p>
          </button>
          <div className="buttonBellow"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="buttonContainer4">
<div className="bellow"></div>
<div className="Noflip-box">
    <div className="Noflip-box-front"></div>
    <div className="Noflip-box-back">
      <div className="NoD3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickFour}>
            <p className="text">Button</p>
          </button>
          <div className="buttonBellow"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="buttonContainer5">
<div className="bellow"></div>
<div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
        <div className="baseButton">
          <button className="button" onClick={handleButtonClickFive}>
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