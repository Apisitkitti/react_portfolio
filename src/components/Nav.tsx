const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black border-b border-neutral-800">
      <div className=" mx-auto h-16 px-6 flex items-center justify-between text-white">
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-widest">APISIT</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors"
                >
                  {item}
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
