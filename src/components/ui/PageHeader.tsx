interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
}) => (
  <div className="text-center space-y-3">
    {eyebrow && (
      <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
        {eyebrow}
      </p>
    )}
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
    {description && (
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    )}
  </div>
);

export default PageHeader;
