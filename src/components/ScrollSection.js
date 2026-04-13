import { motion } from 'framer-motion';
import { fadeUp, viewportOptions } from '../hooks/useScrollAnimation';

function ScrollSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollSection;
