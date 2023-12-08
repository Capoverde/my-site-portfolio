// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import styles from './SkillButton.module.css';
// import technoData from '../../AboutPage/technoData.json';

// export const SkillButton = ({  children }) => (
//   <button >
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className=" px-4 py-1 flex items-center align-center
//                                      cursor-pointer
//                                      border rounded-3xl border-gray-800"
//     >
//      <span className={`${styles.skillBtn}`}>{children}</span>
//     </motion.button>
//   </button>
// );

// SkillButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillButton.module.css';
import { useSkillButtonContext } from './SkillButtonContext';

<<<<<<< HEAD
export const SkillButton = ({ id, children }) => {
  const { updateSelectedData } = useSkillButtonContext();

  const handleClick = () => {
    // Tu powinieneś pobrać odpowiednie dane z technoData.json na podstawie id
    // Przykładowo:
    const data = technoData.find((item) => item.id === id);

    // Zaktualizuj wybrany stan danych
    updateSelectedData(data);
  };

  return (
    <button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="px-4 py-1 flex items-center align-center
                                   cursor-pointer
                                   border rounded-3xl border-gray-800"
      >
        <span className={`${styles.skillBtn}`}>{children}</span>
      </motion.button>
    </button>
  );
};
=======
export const SkillButton = ({ href, children }) => (
  <Link href={href} passHref>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className=" px-4 py-1 flex items-center align-center
                                     cursor-pointer
                                     border rounded-3xl border-gray-800"
    >
     <span className={`${styles.skillBtn}`}>{children}</span>
    </motion.button>
  </Link>
);
>>>>>>> parent of 6da139c (solved problem with ref in button)
