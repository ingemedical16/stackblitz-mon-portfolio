import CVSection from "./CVSection";

interface Education {
    school: string;
    degree: string;
    year: string;
  }
  
  const CVEducation: React.FC<{ education: Education[] }> = ({ education }) => (
    <CVSection title="Éducation">
      {education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{edu.degree} - {edu.school}</h3>
          <p className="text-sm text-gray-500">{edu.year}</p>
        </div>
      ))}
    </CVSection>
  );
  
  export default CVEducation;