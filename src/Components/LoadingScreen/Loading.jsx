import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

function LoadingScreen(){
  const navigate = useNavigate();
  const [timeoutDuration, setTimeoutDuration] = useState(3);

  useEffect(() => {
    if (timeoutDuration === 0) {
      navigate('/Start');
    } else {
      const timer = setTimeout(() => {
        setTimeoutDuration(timeoutDuration - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeoutDuration, navigate]);
  
  return (
    <>
    <div className="container">
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
	<div className="pl__text">Loading…</div>
</div>
</div>
    </>
  );
  }

export default LoadingScreen;





