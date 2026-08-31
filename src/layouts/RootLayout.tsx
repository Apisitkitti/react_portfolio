import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";

const RootLayout: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <ScrollToTop />
    <Navbar />
    <main className="grow">
      <Outlet />
    </main>
    <FooterSection />
  </div>
);

export default RootLayout;
