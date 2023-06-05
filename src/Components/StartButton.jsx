import React from 'react'
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

function StartButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate.push('/MainScreen'); // Replace '/MainScreen' with the actual path of your MainScreen component
  };

return(
<>
<div className="place-content-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
</>
);
}
export default StartButton;