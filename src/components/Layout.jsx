import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import CartDrawer from "./CartDrawer.jsx";
import EmailSignup from "./EmailSignup.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <ScrollToTop />
      <Nav />
      <CartDrawer />
      <Outlet />
      <EmailSignup />
      <Footer />
    </div>
  );
}
