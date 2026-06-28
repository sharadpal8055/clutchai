import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col

        bg-slate-50
        dark:bg-gradient-to-br
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      <Navbar />

      <main
        className="
          flex-1
          max-w-[1800px]
          w-full
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-8
        "
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;