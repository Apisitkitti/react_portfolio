import { SectionId } from "../constant";

const sections = [
  {
    id: SectionId.HOME,
    name: "Home",
  },
  {
    id: SectionId.ABOUT,
    name: "About",
  },
  {
    id: SectionId.PROJECTS,
    name: "Projects",
  },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black border-b border-neutral-800">
      <div className=" mx-auto py-4 px-6 flex items-center justify-between text-white">
        {/* Logo */}
        <a
          className="text-lg font-semibold tracking-widest cursor-pointer"
          href={`#${SectionId.HOME}`}
        >
          APISIT
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-md font-medium tracking-wide">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative text-gray-300 hover:text-white transition-colors "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
