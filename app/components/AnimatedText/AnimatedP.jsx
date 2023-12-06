import React, { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export const AnimatedP = ({
  text,
  el: Wrapper = "p",
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.5, once: true});

  return (
    <div>
      <Wrapper className={className}>
        <m.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.01 }}
        >
          {text.split("").map((char, index) => (
            <m.span
              key={index}
              variants={defaultAnimations}
              exit={{ opacity: 0 }}
            >
              {char}
            </m.span>
          ))}
        </m.span>
      </Wrapper>
    </div>
  );
};

