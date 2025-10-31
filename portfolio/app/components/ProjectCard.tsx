interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a href={link} className="block p-4 border border-gray-700 rounded hover:bg-gray-800 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </a>
  );
}
