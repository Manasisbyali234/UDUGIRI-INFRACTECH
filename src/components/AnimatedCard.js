import { motion } from 'framer-motion';
import { staggerItem } from '../hooks/useScrollAnimation';

function AnimatedCard({ children, className = 'card', style }) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: '0 20px 40px rgba(74, 144, 226, 0.22)',
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
