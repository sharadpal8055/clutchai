import React, { useState } from "react";
import {
  Moon,
  Sun,
  Home,
  LayoutDashboard,
  CalendarDays,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { logoutUser } from "../services/authService";
import { connectCalendar } from "../services/calendarService";

const Navbar = () => {
  const { user } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);

  const handleConnectCalendar = async () => {
    try {
      await connectCalendar(user.uid);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-2xl
      bg-white/80
      dark:bg-slate-950/80
      border-b
      border-slate-200
      dark:border-slate-800
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        lg:px-8
        h-20
        flex
        items-center
        justify-between
      "
      >
        {/* Left */}

        <div className="flex items-center gap-4">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/Clutchai.png"
              alt="logo"
              className="
              w-14
              h-14
              rounded-2xl
              shadow-xl
              shadow-cyan-500/20
              hover:scale-105
              transition
              "
            />

            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                Clutch AI
              </h1>

              <p className="text-xs text-slate-500">
                AI Productivity Companion
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-3">

          <Link
            to="/"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
          "
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/dashboard"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
          "
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/tasks"
            className="
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-105
            transition
            text-white
            px-5
            py-2.5
            rounded-xl
            font-medium
            shadow-lg
            shadow-cyan-500/20
          "
          >
            Manage Tasks
          </Link>

          <button
            onClick={handleConnectCalendar}
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            text-white
            px-5
            py-2.5
            hover:scale-105
            transition
            shadow-lg
          "
          >
            <CalendarDays size={18} />
            Calendar
          </button>

          <button
            onClick={toggleTheme}
            className="
            p-3
            rounded-xl
            bg-slate-100
            dark:bg-slate-800
            hover:rotate-180
            transition-all
            duration-500
          "
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon />
            )}
          </button>

          <div className="flex items-center gap-3 ml-4">

            <img
              src={user?.photoURL}
              alt=""
              className="
              w-11
              h-11
              rounded-full
              border-2
              border-cyan-500
            "
            />

            <div className="max-w-[170px]">

              <p className="font-semibold truncate">
                {user?.displayName}
              </p>

              <p className="text-xs text-slate-500 truncate">
                {user?.email}
              </p>

            </div>
          </div>

          <button
            onClick={logoutUser}
            className="
            ml-2
            p-3
            rounded-xl
            bg-red-500
            hover:bg-red-600
            text-white
            transition
          "
          >
            <LogOut size={18} />
          </button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}

      {open && (
        <div
          className="
          lg:hidden
          border-t
          dark:border-slate-800
          p-5
          space-y-4
          bg-white
          dark:bg-slate-950
        "
        >
          <div className="flex items-center gap-3">

            <img
              src={user?.photoURL}
              className="w-14 h-14 rounded-full"
            />

            <div>

              <p className="font-semibold">
                {user?.displayName}
              </p>

              <p className="text-sm text-slate-500">
                {user?.email}
              </p>

            </div>

          </div>

          <Link
            to="/"
           className="block"
          >
            🏠 Home
          </Link>

          <Link
            to="/dashboard"
           className="block"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/tasks"
            className="block"
          >
            ✅ Manage Tasks
          </Link>

          <button
            onClick={handleConnectCalendar}
            className="block"
          >
            📅 Connect Calendar
          </button>

          <button
            onClick={toggleTheme}
            className="block"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          <button
            onClick={logoutUser}
            className="text-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;