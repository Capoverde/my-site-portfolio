// import React, { createContext, useContext, useState } from 'react';

// // Create a context
// const SkillButtonContext = createContext();

// // Create a context provider
// export const SkillButtonProvider = ({ children }) => {
//   const [selectedData, setSelectedData] = useState(null);

//   const updateSelectedData = (data) => {
//     setSelectedData(data);
//   };

//   const contextValue = {
//     selectedData,
//     updateSelectedData,
//   };

//   return (
//     <SkillButtonContext.Provider value={contextValue}>
//       {children}
//     </SkillButtonContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useSkillButtonContext = () => {
//   const context = useContext(SkillButtonContext);
// //   if (!context) {
// //     throw new Error('useSkillButtonContext must be used within a SkillButtonProvider');
// //   }
//   return context;
// };
