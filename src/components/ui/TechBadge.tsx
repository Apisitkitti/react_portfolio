interface TechBadgeProps {
  label: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ label }) => (
  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
    {label}
  </span>
);

export default TechBadge;
