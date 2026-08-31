import { Link } from "react-router-dom";

type ButtonVariant = "solid" | "outline";

const base =
  "inline-flex items-center justify-center min-w-[11rem] px-6 py-3 rounded-full text-sm font-medium transition-colors";

const variants: Record<ButtonVariant, string> = {
  solid: "bg-gray-900 text-white hover:bg-gray-700",
  outline: "border border-gray-300 hover:border-gray-900",
};

const buttonClass = (variant: ButtonVariant = "outline") =>
  `${base} ${variants[variant]}`;

interface LinkButtonProps {
  to: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  variant = "outline",
  children,
}) => (
  <Link to={to} className={buttonClass(variant)}>
    {children}
  </Link>
);

interface DownloadButtonProps {
  href: string;
  fileName: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  fileName,
  variant = "outline",
  children,
}) => (
  <a href={href} download={fileName} className={buttonClass(variant)}>
    {children}
  </a>
);
