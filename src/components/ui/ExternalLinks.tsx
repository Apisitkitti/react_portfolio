interface ExternalLinksProps {
  github?: string;
  demo?: string;
}

const ExternalLinks: React.FC<ExternalLinksProps> = ({ github, demo }) => {
  if (!github && !demo) return null;

  return (
    <div className="flex gap-4 text-sm font-medium">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          Github
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          Live
        </a>
      )}
    </div>
  );
};

export default ExternalLinks;
