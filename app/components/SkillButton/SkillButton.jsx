import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SkillButton = ({ href, children }) => (
  <Link href={href} passHref>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="skillBtn cursor-pointer border rounded-3xl border-gray-800 px-4 py-1 flex items-center"
    >
      {children}
    </motion.button>
  </Link>
);

export default SkillButton;
