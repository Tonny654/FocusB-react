import { useEffect } from 'react';
import { motion } from 'framer-motion';
import dogGif from '../assets/Images/dog/';

function DogAnimation({ onEnd }) {
  useEffect(() => {
    const timer = setTimeout(onEnd, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="dog-animation">
      <img src={dogGif} alt="dog happy" style={{ width: 150 }} />
    </motion.div>
  );
}

export default DogAnimation;
