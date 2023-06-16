import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./MainScreen.css"
function MainScreen() {
  return (
  <>
  <div className="flip">
  <div className="buttonContainer">
      <div className="baseButton">
        <button className="button"><p className="text">Button</p></button>
        <div className="buttonBellow"></div>
      </div>
    </div>
  </div>
  </>
  );
}

export default MainScreen;