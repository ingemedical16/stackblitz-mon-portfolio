import Image from 'next/image';
import { motion } from 'framer-motion';

interface CVHeaderProps {
  name: string;
  title: string;
  imageUrl: string;
}

const CVHeader: React.FC<CVHeaderProps> = ({ name, title, imageUrl }) => (
  <motion.div 
    className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={imageUrl} alt={name} width={140} height={140} className="rounded-full mx-auto border-4 border-white" />
    <h1 className="text-3xl font-bold mt-4">{name}</h1>
    <p className="text-lg font-light">{title}</p>
  </motion.div>
);

export default CVHeader;