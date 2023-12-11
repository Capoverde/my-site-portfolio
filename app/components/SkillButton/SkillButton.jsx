
import { motion as m } from 'framer-motion';
import styles from './SkillButton.module.css';

export const SkillButton = ({ id, children }) => {

  return (
    <button>
      <m.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-4 py-1 flex items-center align-center cursor-pointer border rounded-3xl border-gray-800"
      >
        <span className={`${styles.skillBtn}`}>{children}</span>
      </m.button>
    </button>
  );
};
