/** @format */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const SplitText = ({ children, size = 16, ...rest }) => {
  // const [charWidth, setCharWidth] = useState('36px');

  // useEffect(() => {
  //   const updateSize = () => {
  //     if (window.innerWidth < 600) {
  //       setCharWidth('7%');
  //     } else {
  //       setCharWidth('100px');
  //     }
  //   };

  //   updateSize(); // run on mount
  //   window.addEventListener('resize', updateSize);

  //   return () => window.removeEventListener('resize', updateSize);
  // }, []);

  let words = children.split(' ');
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          width: 'fit-content',
        }}>
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}>
          {word+(i !== words.length - 1 ? '' : '')}
        </motion.div>
      </div>
    );
  });
};

export default SplitText;
