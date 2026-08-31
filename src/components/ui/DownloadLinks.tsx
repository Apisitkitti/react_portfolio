import { DOCUMENTS } from "../../route";
import { DownloadButton } from "./Button";

interface DownloadLinksProps {
  className?: string;
  variant?: "solid" | "outline";
}

const DownloadLinks: React.FC<DownloadLinksProps> = ({
  className = "",
  variant = "outline",
}) => (
  <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
    {DOCUMENTS.map((doc) => (
      <DownloadButton
        key={doc.file}
        href={doc.file}
        fileName={doc.fileName}
        variant={variant}
      >
        {doc.label}
      </DownloadButton>
    ))}
  </div>
);

export default DownloadLinks;
