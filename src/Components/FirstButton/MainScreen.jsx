import "./MainScreen.css";
import press from "../../assets/audio/Click - Sound Effect (HD).mp3"
import { useNavigate } from 'react-router-dom';
import { useCounter } from '../CounterContext/CounterContext';

function MainScreen() {
  const navigate = useNavigate();
  const { totalCounter} = useCounter();
  const { btnCounter1, incrementBtnCounter1} = useCounter();

  const handleButtonClickOne = () => {
    const audio = new Audio(press);
    audio.play();
    
    if (btnCounter1 < 1){
      incrementBtnCounter1();
    }

    const timer = setTimeout(() => {
      navigate('/Second');
    }, 200); //0.2 second 

    return () => clearTimeout(timer);
    
    

  };




   return (
<>
  <audio id="myAudio">
    <source src={press} type="audio/mpeg"></source>
  </audio>


<div className="buttonContainer">
<div className="bellow"></div>
<div className="flip-box">
    <div className="flip-box-front"></div>
    <div className="flip-box-back">
      <div className="D3animation">
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
</>
  );
}

export default MainScreen;