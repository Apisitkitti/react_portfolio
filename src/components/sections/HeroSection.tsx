import { Link } from "react-router-dom";
import githubIcon from "../../assets/icon/github.png";
import linkedinIcon from "../../assets/icon/linkedin.png";
import { ROUTES, SectionId, SOCIAL_LINKS } from "../../route";

const socials = [
  {
    img: githubIcon,
    alt: "github",
    url: SOCIAL_LINKS.GITHUB,
  },
  {
    img: linkedinIcon,
    alt: "linkedin",
    url: SOCIAL_LINKS.LINKEDIN,
  },
];

const HeroSection = () => {
  return (
    <section
      id={SectionId.HOME}
      className="w-full flex min-h-[80vh] items-center justify-center bg-white text-gray-900 px-6"
    >
      <div className=" text-center space-y-6">
        {/* Greeting */}
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Hello, I'm
        </p>
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
          Apisit Kittiruangaram
        </h1>
        {/* Role */}
        <p className="text-lg md:text-xl text-gray-600">
          Software Developer focused on building modern web applications
        </p>
        {/* Socials */}
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.alt}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-104 transition-transform"
            >
              <img
                src={social.img}
                alt={social.alt}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to={ROUTES.PROJECTS}
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:border-gray-900 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
