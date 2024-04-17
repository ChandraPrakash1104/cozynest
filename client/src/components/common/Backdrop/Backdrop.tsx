import { motion } from 'framer-motion';
const BackDrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className='fixed top-0 left-0 h-full w-full z-20 bg-black/20 flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default BackDrop;
