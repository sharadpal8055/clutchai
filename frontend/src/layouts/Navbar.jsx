import React from 'react';
import { Moon, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { connectCalendar } from "../services/calendarService";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { logoutUser } from "../services/authService";
const Navbar = () => {
   const { user } = useAuth();
    const handleConnectCalendar = async () => {
    try {
      await connectCalendar(user.uid);
    } catch (error) {
      console.error(error);
    }
  };
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div
        className="
sticky
top-0
z-50
px-8
py-4
flex
items-center
justify-between
backdrop-blur-xl
border-b
bg-white/80
border-gray-200
dark:bg-slate-900/70
dark:border-slate-800
transition-all
duration-500
"
      >
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-12 h-12 rounded-full border"
          />

          <div>
            <h2
              className="
font-semibold
text-lg
text-slate-900
dark:text-white
"
            >
              {user?.displayName}
            </h2>

            <p
              className="
text-sm
text-gray-500
dark:text-slate-400
"
            >
              {user?.email}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
    onClick={handleConnectCalendar}
    className="
      rounded-xl
      bg-gradient-to-r
      from-green-500
      to-emerald-600
      px-5
      py-2.5
      text-white
      font-medium
      shadow-lg
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-green-500/40
    "
  >
    📅 Connect Calendar
  </button>
          <Link
            to="/tasks"
            className="
          bg-gradient-to-r
from-cyan-500
to-blue-600
hover:from-cyan-400
hover:to-blue-500
shadow-lg
hover:shadow-cyan-500/30
transition-all
duration-300
              text-white
              px-5
              py-2
              rounded-lg
             
            "
          >
            Manage Tasks
          </Link>
          <button
            onClick={toggleTheme}
            className="
    p-2
    rounded-xl
    bg-slate-100
    hover:bg-slate-200
    dark:bg-slate-800
    dark:hover:bg-slate-700
    transition
  "
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
          <button
            onClick={logoutUser}
            className="
            bg-gradient-to-r
from-rose-500
to-red-600
hover:from-rose-400
hover:to-red-500
shadow-lg
hover:shadow-red-500/30
transition-all
duration-300
              text-white
              px-5
              py-2
              rounded-lg
           
            "
          >
            Logout
          </button>
        </div>
      </div>
  );
}

export default Navbar;
