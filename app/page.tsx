import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Mohammed El Idrissi</h1>
      <p className="text-gray-700 mt-2">
        Développeur Full-Stack JavaScript / TypeScript
      </p>
      <p className="text-gray-500 mt-2 max-w-md text-center">
        Je construis des applications web modernes avec React, Next.js, Node.js
        et MongoDB.
      </p>
      <a href="/projects" className="text-blue-500 mt-4">
        Voir mes projets
      </a>
    </div>
  );
}
