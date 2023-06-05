import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const LoadingScreen = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      // Redirect to the next page after 5 seconds
      navigate.push('/MainScreen');
    }
  }, [timer, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-lg">
        <h1 className="text-2xl">Loading...</h1>
        <p className="text-xl">Redirecting in {timer} seconds</p>
        <div className="h-4 bg-white mt-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-700 animate-loading-bar"
            style={{ width: `${(5 - timer) * 20}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;