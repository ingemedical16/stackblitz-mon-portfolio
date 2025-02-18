"use client"
import CVContact from "@/app/components/cv/CVContact";
import CVEducation from "@/app/components/cv/CVEducation";
import CVExperience from "@/app/components/cv/CVExperience";
import CVHeader from "@/app/components/cv/CVHeader";
import CVSkills from "@/app/components/cv/CVSkills";
import { motion } from 'framer-motion';

const CVPage = () => {
    return (
        <motion.div 
          className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CVHeader name="Mohammed El Idrissi" title="Développeur Full-Stack" imageUrl="/images/profile.png" />
          <CVExperience experiences={[
            { company: 'Rent A Car', role: 'Développeur Full-Stack', duration: 'Octobre 2023 – Présent', description: "Développement Backend avec Node.js, Express.js et MongoDB. Intégration de Strapi et amélioration de l'UX/UI pour les pages B2B." },
            { company: 'DIVERS MARKET SRL', role: 'Développeur Web', duration: '2018-2019', description: 'Développement de sites web et applications avec HTML, CSS, JavaScript/jQuery.' }
          ]} />
          <CVSkills skills={['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Angular', 'React', 'Blockchain', 'Solidity']} />
          <CVEducation education={[
            { school: 'IFOCOP - PARIS 13', degree: 'Développeur Full-Stack (RNCP Niveau 6)', year: 'Mai 2024 - Janvier 2025' },
            { school: 'Université Polytechnique de Bucarest', degree: 'Master en systèmes d’information médical', year: '2016 - 2018' }
          ]} />
          <CVContact linkedin="https://www.linkedin.com/in/ingmedical16/" github="https://github.com/ingemedical16" email="mohammedelidrissi.fr78@gmail.com" phone="07 55 48 49 23" />
        </motion.div>
      );
    };
    
    export default CVPage;
    