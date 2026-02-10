import { useState } from "react";
import { SectionId } from "../constant";
import HamburgerIcon from "../assets/icon/hamburger.svg";

const sections = [
  { id: SectionId.HOME, name: "Home" },
  { id: SectionId.ABOUT, name: "About" },
  { id: SectionId.PROJECTS, name: "Projects" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black border-b border-neutral-800">
      <div className="mx-auto py-4 px-6 flex items-center justify-between text-white">
        {/* LEFT SIDE */}
        <div className="flex  items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white justify-center"
            onClick={() => setOpen(!open)}
          >
            <img
              src={HamburgerIcon}
              alt="menu"
              className="w-5 h-5 invert-100"
            />
          </button>

          {/* Logo */}
          <a
            className="text-lg font-semibold tracking-widest cursor-pointer"
            href={`#${SectionId.HOME}`}
          >
            APISIT
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-md font-medium tracking-wide">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden border-t border-neutral-800">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
