interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
    <a 
      href={link} 
      className="inline-block mt-4 text-blue-600 hover:underline font-medium"
      target="_blank" 
      rel="noopener noreferrer"
    >
      Voir le projet →
    </a>
  </div>
  );
};

export default ProjectCard;
