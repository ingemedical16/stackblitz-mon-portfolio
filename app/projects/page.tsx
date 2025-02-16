import ProjectCard from '@/app/components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ProjectCard
          title="Facebook Clone"
          description="Un clone avancé de Facebook avec React et Redux."
          link="#"
        />
        <ProjectCard
          title="Plateforme de Jeux"
          description="Une plateforme de jeux en ligne avec Node.js et Angular."
          link="#"
        />
      </div>
    </div>
  );
}
