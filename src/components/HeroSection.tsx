const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white text-gray-900 px-6">
      <div className="max-w-4xl text-center space-y-6">
        {/* Greeting */}
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Apisit Kittiruangaram
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-gray-600">
          Software Developer focused on building modern web applications
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <button className="px-6 py-3 rounded-xl bg-black text-white hover:opacity-80 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
