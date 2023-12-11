// "use client"
// import React, { useEffect } from 'react';
// import { SkillButton } from './SkillButton';
// import { motion as m, useAnimation } from 'framer-motion';
// import technoData from '../../AboutPage/technoData.json'
// import  buttonData  from './buttonData';
// import styles from './SkillButton.module.css';


//   const SkillsList = ({ onSkillButtonClick }) => {
//    const controls = useAnimation()
//    useEffect(() => {
//      controls.start((i) => ({
//        opacity: 1,
//        transition: { delay: i * 0.2 },
//      }));
//    }, [controls])
//    return (
//      <div className="flex align-center flex-wrap w-full mt-2 px-6 py-6 gap-4 z-50
//      ">
//        {buttonData.map((button, index) => (
//          <m.div
//            key={button.id}
//            custom={index}
//            initial={{ scale: 0 }}
//            animate={{ scale: 1 }}
//            exit={{ scale: 0 }}
//            transition={{ duration: 0.5, delay: index * 0.2 }}
//          >
//            <SkillButton href={button.href} onClick={onSkillButtonClick(button.text)}>
//              <span className={`${styles.btnIcon} inline-block`}>{button.icon}</span> {' '}
//              <span className="btnText">{button.text}</span>
//            </SkillButton>
//          </m.div>
//        ))}
//      </div>
//    );
//  };

//  export default SkillsList;

// import React, { useEffect, useState } from 'react';
// import { SkillButton } from './SkillButton';
// import { motion as m } from 'framer-motion';
// import buttonData from './buttonData';
// import styles from './SkillButton.module.css';

// const SkillsList = ({ onSkillButtonClick}) => {
//   const [controls, setControls] = useState(null);

//   useEffect(() => {
//     if (controls) {
//       controls.start((i) => ({
//         opacity: 1,
//         transition: { delay: i * 0.2 },
//       }));
//     }
//   }, [controls]);

//   return (
//     <div className="flex align-center flex-wrap w-full mt-2 px-6 py-6 gap-4 z-50">
//       {buttonData.map((button, index) => (
//         <m.div
//           key={button.id}
//           custom={index}
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           exit={{ scale: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//         >
//          <SkillButton id={button.id}>
//            <span className={`${styles.btnIcon} inline-block`}>{button.icon}</span> {' '}
//            <span className="btnText">{button.text}</span>
//          </SkillButton>
//         </m.div>
//       ))}
//     </div>
//   );
// };

// export default SkillsList;

import React, { useContext, useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import technoData from '../../AboutPage/technoData.json';
import buttonData from './buttonData';
import { SkillButton } from './SkillButton';
import { useSkillButtonContext } from './SkillButton/SkillButtonContext';

const SkillsList = () => {
  const [selectedData, setSelectedData] = useState(null);
  const { updateSelectedData } = useSkillButtonContext();

  useEffect(() => {
    const data = technoData.find((item) => item.id === selectedData?.id);
    if (data) {
      setSelectedData(data);
    }
  }, [selectedData]);

  const handleClick = () => {
    const button = buttonData.find((button) => button.id === id);
    const data = technoData.find((item) => item.id === button.id);

    setSelectedData(data);
  };

  return (
    <div className="flex align-center flex-wrap w-full mt-2 px-6 py-6 gap-4 z-50">
      {buttonData.map((button, index) => (
        <m.div
          key={button.id}
          custom={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <SkillButton
            selectedData={selectedData}
            handleClick={handleClick}
            id={button.id}
          />
        </m.div>
      ))}
    </div>
  );
};

export default SkillsList;