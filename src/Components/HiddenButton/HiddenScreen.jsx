import "./HiddenScreen.css";
import press from "../../assets/audio/Click - Sound Effect (HD).mp3"
import { useNavigate } from 'react-router-dom';
import {useCounter} from '../../Components/CounterContext/CounterContext';

function MainScreen() {
  const navigate = useNavigate();
  const { btnCounter6, incrementBtnCounter6} = useCounter();

  const handleButtonClickSix = () => {
    const audio = new Audio(press);
    audio.play();

    if (btnCounter6 < 1){
      incrementBtnCounter6();
    }

    const timer = setTimeout(() => {
      navigate('/Fourth');
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
          <button className="button" onClick={handleButtonClickSix}>
            <p className="text">Crazy?</p>
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