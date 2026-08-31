import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../route";
import HamburgerIcon from "../../assets/icon/hamburger.svg";

const navItems = [
  { to: ROUTES.HOME, name: "Home", end: true },
  { to: ROUTES.ABOUT, name: "About", end: false },
  { to: ROUTES.PROJECTS, name: "Projects", end: false },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-white transition-colors"
    : "text-gray-300 hover:text-white transition-colors";

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
          <Link
            className="text-lg font-semibold tracking-widest cursor-pointer"
            to={ROUTES.HOME}
          >
            APISIT
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-md font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={linkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden border-t border-neutral-800">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
