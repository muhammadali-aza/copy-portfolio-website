import { Outlet } from "react-router-dom";
import NavbarLink from "../Navbarlink";
import Footer from "../../footer/footer";
import ScrollToTop from "../../scorlltop/scrollToTop";

export default function Layout() {

  return (
    <>
      <header>
        <ScrollToTop />
        <NavbarLink />
      </header>

      <main className="">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}