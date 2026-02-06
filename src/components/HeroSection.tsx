import githubIcon from "../assets/icon/github.png";
import linkedinIcon from "../assets/icon/linkedin.png";
import { SectionId } from "../constant";

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

const HeroSection = () => {
  return (
    <section
      id={SectionId.HOME}
      className="w-full flex min-h-screen items-center justify-center bg-white text-gray-900 px-6"
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
      </div>
    </section>
  );
};

export default HeroSection;
