import CVSection from "./CVSection";

const CVSkills: React.FC<{ skills: string[] }> = ({ skills }) => (
    <CVSection title="Compétences">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </CVSection>
  );
  
  export default CVSkills;