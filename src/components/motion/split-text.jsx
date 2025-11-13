/** @format */

import React from 'react';
import { motion } from 'motion/react';

const SplitText = ({ children , size = 16, ...rest }) => {
  let words = children.split('');
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden', width: `${size}px` }}>
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}>
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </div>
    );
  });
};

export default SplitText;
