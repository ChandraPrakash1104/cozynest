import { motion } from 'framer-motion';

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className='fixed z-30'
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ModalOverlay;
