import React, { useRef } from 'react';
import { motion as m } from 'framer-motion';

const defaultAnimations = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export const AnimatedHeader = ({
  text,
  el: Wrapper = "h2",
  className,
}) => {
  return (
    <div>
      <Wrapper className={className}>
        <m.span
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
        >
         {text.split(" ").map((word, index) => 
          <span className='inline-block' key={index}>
           {word.split("").map((char, index) => (
            <m.span
              className='inline-block'
              key={index}
              variants={defaultAnimations}
            >
              {char}
            </m.span>
            ))}
            <span className='inline-block'>&nbsp;</span>
           </span>
          )} 
        </m.span>
      </Wrapper>
    </div>
  );
};
