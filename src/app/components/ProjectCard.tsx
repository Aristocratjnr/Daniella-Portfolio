import Image from 'next/image';


type ProjectLink = {
  label: string;
  url: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  links: ProjectLink[];
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  links,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              {link.label}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
