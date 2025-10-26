import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CircleButtonProps {
  text: string;
  onClick?: () => void;
}

export const CircleButton = ({ text, onClick }: CircleButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-[0.6rem] border border-transparent text-[var(--gray-100)] bg-transparent transition-all duration-200 hover:text-[var(--gray-800)] hover:border-[var(--green)] overflow-hidden w-full"
    >
      <span className="relative z-10">{text}</span>
      
      <div className="relative w-5 h-5 rounded-full flex items-center justify-center overflow-hidden">
        <ArrowRight className="relative z-10 w-4 h-4" />
        <motion.div
          variants={{
            hover: {
              y: '-43%',
              width: '100%',
              backgroundColor: '#61ffc9',
            }
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="button-circlee absolute top-0 w-[80%] h-[250px] rounded-full bg-transparent"
        />
      </div>
    </motion.button>
  );
};
