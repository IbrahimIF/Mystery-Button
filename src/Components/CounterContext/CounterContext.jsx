import React, { createContext, useContext, useState } from 'react';

// Create a context
const CounterContext = createContext();

// Create a custom hook to access the context
export const useCounter = () => useContext(CounterContext);

// CounterContext component
export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const value = {
    counter,
    incrementCounter,
    resetCounter,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}