import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
const LandingpageNavbar = () => {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto mt-5 w-[94%] max-w-7xl">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl px-6 py-4 shadow-2xl">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-4 group">
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.08,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg transition-all duration-300 group-hover:shadow-cyan-500/40"
              >
                <div className="relative group">
                  <div
                    className="
      absolute
      inset-0
      rounded-2xl
      bg-cyan-500/30
      blur-xl
      opacity-0
      group-hover:opacity-100
      transition
      duration-500
    "
                  />

                  <img
                    src="/Clutchai.png"
                    alt="Clutch AI"
                    className="
      relative
      w-14
      h-14
      rounded-2xl
      object-cover
      transition-all
      duration-300
      group-hover:scale-110
    "
                  />
                </div>
              </motion.div>

              <div>
                <h1 className="text-xl md:text-2xl font-black tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
                  Clutch AI
                </h1>

                <p className="text-xs text-slate-400">
                  AI Productivity Companion
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-2">
  {[
    { title: "Features", path: "/features" },
    { title: "Workflow", path: "/workflow" },
    { title: "About", path: "/about" },
    { title: "Tech Stack", path: "/tech-stack" },
    { title: "FAQ", path: "/faq" },
  ].map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) => `
        relative
        rounded-xl
        px-5
        py-2
        text-sm
        font-semibold
        transition-all
        duration-300
        group

        ${
          isActive
            ? `
            text-white
            bg-cyan-500/15
            border
            border-cyan-500/30
            shadow-lg
            shadow-cyan-500/20
            `
            : `
            text-slate-300
            hover:text-white
            hover:bg-white/5
            `
        }
      `}
    >
      {({ isActive }) => (
        <>
          {item.title}

          <span
            className={`
              absolute
              left-1/2
              -bottom-1
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              transition-all
              duration-300
              -translate-x-1/2

              ${
                isActive
                  ? "w-8"
                  : "w-0 group-hover:w-8"
              }
            `}
          />
        </>
      )}
    </NavLink>
  ))}
</div>
            {/* mobile nav */}
            <button
              onClick={() => setOpen(!open)}
              className="
lg:hidden
p-2
rounded-xl
bg-white/5
hover:bg-white/10
transition
"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {open && (
              <div
                className="
absolute
top-24
left-4
right-4
rounded-2xl
bg-slate-900/95
backdrop-blur-2xl
border
border-white/10
p-6
shadow-2xl
lg:hidden
"
              >
                <div className="flex flex-col gap-5">
                  <NavLink
  to="/features"
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`
  }
>
  Features
</NavLink>

                <NavLink
  to="/workflow"
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`
  }
>
  Workflow
</NavLink>

<NavLink
  to="/about"
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`
  }
>
  About
</NavLink>

<NavLink
  to="/tech-stack"
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`
  }
>
  Tech Stack
</NavLink>

<NavLink
  to="/faq"
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`
  }
>
  FAQ
</NavLink>
                </div>
              </div>
            )}

            {/* Login */}

            <div className="flex items-center gap-4">
              {/* {user && (
    <Link
      to="/dashboard"
      className="
      hidden
      md:flex
      items-center
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-5
      py-2
      font-medium
      text-slate-300
      transition-all
      duration-300
      hover:bg-white/10
      hover:text-cyan-400
    "
    >
      Dashboard
    </Link>
  )} */}

              <Link
                to={user ? "/dashboard" : "/login"}
                className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    px-5
    py-2
    font-semibold
    text-white
    shadow-lg
    shadow-cyan-500/20
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-cyan-500/40
  "
              >
                {user ? (
                  <>
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-7 h-7 rounded-full border border-white/30"
                    />
                    Dashboard
                  </>
                ) : (
                  "Login"
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingpageNavbar;
