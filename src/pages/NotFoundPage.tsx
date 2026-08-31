import { Link } from "react-router-dom";
import { ROUTES } from "../route";

const NotFoundPage: React.FC = () => (
  <section className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
    <p className="uppercase tracking-[0.3em] text-sm text-gray-400">404</p>
    <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>
    <Link
      to={ROUTES.HOME}
      className="text-sm font-medium underline hover:opacity-70"
    >
      Back to home
    </Link>
  </section>
);

export default NotFoundPage;
