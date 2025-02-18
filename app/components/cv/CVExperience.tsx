import CVSection from "./CVSection";

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
  }
  
  const CVExperience: React.FC<{ experiences: Experience[] }> = ({ experiences }) => (
    <CVSection title="Expérience Professionnelle">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-3">
          <h3 className="font-semibold">{exp.role} - {exp.company}</h3>
          <p className="text-sm text-gray-500">{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </CVSection>
  );
  
  export default CVExperience;