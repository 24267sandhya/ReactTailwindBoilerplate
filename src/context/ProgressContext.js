// ProgressContext.js
import React, { createContext, useState } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(1);

  return (
    <ProgressContext.Provider value={{ progress, setProgress}}>
      {children}
    </ProgressContext.Provider>
  );
};
