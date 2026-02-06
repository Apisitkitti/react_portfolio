const FooterSection: React.FC = () => {
  return (
    <footer className="w-full sticky bottom-0 z-50 border-t border-neutral-800 bg-neutral-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-6">
        {/* Copyright */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Apisit Kittiruangaram
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
