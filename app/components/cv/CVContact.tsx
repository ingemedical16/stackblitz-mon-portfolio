import CVSection from "./CVSection";

const CVContact: React.FC<{ linkedin: string; github: string; email: string; phone: string }> = ({ linkedin, github, email, phone }) => (
    <CVSection title="Contact">
      <div className="flex flex-col gap-2">
        <a href={linkedin} className="text-blue-600" target="_blank">LinkedIn</a>
        <a href={github} className="text-blue-600" target="_blank">GitHub</a>
        <p>Email: {email}</p>
        <p>Téléphone: {phone}</p>
      </div>
    </CVSection>
  );
  
  export default CVContact;