import githubIcon from "../assets/icon/github.png";
import linkedinIcon from "../assets/icon/linkedin.png";

const socials = [
  {
    img: githubIcon,
    alt: "github",
    url: "https://github.com/Apisitkitti",
  },
  {
    img: linkedinIcon,
    alt: "linkedin",
    url: "https://www.linkedin.com/in/apisit-kittiruangaram-938669206/",
  },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.alt}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1 hover:opacity-80"
            >
              <img
                src={social.img}
                alt={social.alt}
                className="w-6 h-6 invert opacity-70"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Apisit Kittiruangaram
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
