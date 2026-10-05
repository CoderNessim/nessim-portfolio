import { motion, useReducedMotion } from 'framer-motion';

// Fades content up the first time it scrolls into view.
const Reveal = ({ children, delay = 0, className, as = 'div' }) => {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
