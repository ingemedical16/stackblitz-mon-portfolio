import { motion } from 'framer-motion';

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
}

const CVSection: React.FC<CVSectionProps> = ({ title, children }) => (
  <motion.div 
    className="my-6 p-4 bg-white rounded-lg shadow-md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">{title}</h2>
    <div className="mt-4 text-gray-700">{children}</div>
  </motion.div>
);

export default CVSection;
