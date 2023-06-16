import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

function LoadingScreen(){
  const navigate = useNavigate();
  const [timeoutDuration, setTimeoutDuration] = useState(3);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    if (timeoutDuration === 0) {
      setFadeout(true);
      setTimeout(() => navigate('/Start'), 1000);
    } else {
      const timer = setTimeout(() => {
        setTimeoutDuration(timeoutDuration - 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [timeoutDuration, navigate]);

  return (
    <>
    <div className={`fade-container ${fadeout ? 'fadeout' : ''}`} >
    <div className="place-content-center">
     <div className="pl">
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__text"><b>Loading...</b></div>
</div>
</div>
</div>
    </>
  );
  }

export default LoadingScreen;





