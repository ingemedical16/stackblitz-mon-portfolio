import ProjectCard from '@/app/components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold text-center text-gray-800">Mes Projets</h1>
    <p className="text-center text-gray-600 mt-2">
      Voici quelques projets réalisés lors de ma formation à l'IFCOP en tant que développeur Full Stack JavaScript.
    </p>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <ProjectCard
        title="Facebook Clone"
        description="Un clone avancé de Facebook avec React et Redux."
        link="https://x-dev-social.vercel.app/"
      />
      <ProjectCard
        title="Facebook Clone Backend"
        description="Une API sécurisée avec Node.js, Express et MongoDB, utilisant JWT pour l'authentification."
        link="https://facebook-backend-2f6a.onrender.com/"
      />
      <ProjectCard
        title="Plateforme de Jeux"
        description="Une plateforme de jeux en ligne avec Node.js et Angular."
        link="https://multiplayer-game-platform.onrender.com/"
      />
    </div>
  </div>
  );
}
