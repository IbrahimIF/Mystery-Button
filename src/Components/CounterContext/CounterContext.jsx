import React, { createContext, useContext, useState, useEffect} from 'react';

// Create a context
const CounterContext = createContext();

// Create a custom hook to access the context
export const useCounter = () => useContext(CounterContext);

// CounterContext component
export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const [totalCounter, setTotalCounter] = useState(0);

  const [btnCounter1, setbtnCounter1] = useState(0);
  const [btnCounter2, setbtnCounter2] = useState(0);
  const [btnCounter3, setbtnCounter3] = useState(0);
  const [btnCounter4, setbtnCounter4] = useState(0);
  const [btnCounter5, setbtnCounter5] = useState(0);
  const [btnCounter6, setbtnCounter6] = useState(0);
  const [btnCounter7, setbtnCounter7] = useState(0);
  const [btnCounter8, setbtnCounter8] = useState(0);
  const [btnCounter9, setbtnCounter9] = useState(0);
  const [btnCounter10, setbtnCounter10] = useState(0);


  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const incrementCounter2 = () => {
    setCounter2(prevCounter2 => prevCounter2 + 1);
  };
 


  const incrementBtnCounter1 = () => {
    setbtnCounter1( prevbtnCounter1 => prevbtnCounter1 + 1);
  };

  const incrementBtnCounter2 = () => {
    setbtnCounter2( prevbtnCounter2 => prevbtnCounter2 + 1);
  };

  const incrementBtnCounter3 = () => {
    setbtnCounter3( prevbtnCounter3 => prevbtnCounter3 + 1);
  };

  const incrementBtnCounter4 = () => {
    setbtnCounter4( prevbtnCounter4 => prevbtnCounter4 + 1);
  };

  const incrementBtnCounter5 = () => {
    setbtnCounter5( prevbtnCounter5 => prevbtnCounter5 + 1);
  };

  const incrementBtnCounter6 = () => {
    setbtnCounter6( prevbtnCounter6 => prevbtnCounter6 + 1);
  };

  const incrementBtnCounter7 = () => {
    setbtnCounter7( prevbtnCounter7 => prevbtnCounter7 + 1);
  };

  const incrementBtnCounter8 = () => {
    setbtnCounter8( prevbtnCounter8 => prevbtnCounter8 + 1);
  };

  const incrementBtnCounter9 = () => {
    setbtnCounter9( prevbtnCounter9 => prevbtnCounter9 + 1);
  };

  const incrementBtnCounter10 = () => {
    setbtnCounter10( prevbtnCounter10 => prevbtnCounter10 + 1);
  };

  useEffect(() => {
    const total = btnCounter1 + btnCounter2 + btnCounter3 + btnCounter4 + btnCounter5 + btnCounter6 + btnCounter7 + btnCounter8 + btnCounter9 + btnCounter10;

    setTotalCounter(total);
  }, [btnCounter1, btnCounter2, btnCounter3, btnCounter4, btnCounter5, btnCounter6, btnCounter7, btnCounter8, btnCounter9, btnCounter10]);


  const resetCounter = () => {
    setCounter(0);
    setTotalCounter(0);
    setCounter2(0);

    setbtnCounter1(0);
    setbtnCounter2(0);
    setbtnCounter3(0);
    setbtnCounter4(0);
    setbtnCounter5(0);
    setbtnCounter6(0);
    setbtnCounter7(0);
    setbtnCounter8(0);
    setbtnCounter9(0);
    setbtnCounter10(0);
  };

  const value = {
    counter,
    incrementCounter,
    counter2,
    incrementCounter2,
    totalCounter,
    resetCounter,
    btnCounter1,
    incrementBtnCounter1,
    btnCounter2,
    incrementBtnCounter2,
    btnCounter3,
    incrementBtnCounter3,
    btnCounter4,
    incrementBtnCounter4,
    btnCounter5,
    incrementBtnCounter5,
    btnCounter6,
    incrementBtnCounter6,
    btnCounter7,
    incrementBtnCounter7,
    btnCounter8,
    incrementBtnCounter8,
    btnCounter9,
    incrementBtnCounter9,
    btnCounter10,
    incrementBtnCounter10,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}