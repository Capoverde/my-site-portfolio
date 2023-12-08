import React, { createContext, useContext, useState } from 'react';

const SkillButtonContext = createContext();

export const SkillButtonProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState(null);

  const updateSelectedData = (data) => {
    setSelectedData(data);
  };

  return (
    <SkillButtonContext.Provider value={{ selectedData, updateSelectedData }}>
      {children}
    </SkillButtonContext.Provider>
  );
};

export const useSkillButtonContext = () => {
  return useContext(SkillButtonContext);
};
