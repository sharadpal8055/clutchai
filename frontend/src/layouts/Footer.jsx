import { Heart,  Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
function Footer() {
  return (
    <footer
      className="
        mt-20
        border-t
        border-slate-200
        dark:border-slate-800

        bg-white/70
        dark:bg-slate-950/70

        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl

          px-6
          py-10

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-8
        "
      >
        {/* Left */}

        <div>
          <h2
            className="
              text-2xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Clutch AI
          </h2>

          <p
            className="
              mt-2
              max-w-md
              text-slate-500
              dark:text-slate-400
              leading-7
            "
          >
            AI-powered productivity companion that predicts deadline risks,
            generates rescue plans, creates smart schedules, and syncs with
            Google Calendar.
          </p>
        </div>

        {/* Center */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-6

            text-sm

            text-slate-500
            dark:text-slate-400
          "
        >
          <a href="/" className="hover:text-cyan-500 transition">
            Dashboard
          </a>

          <a href="/tasks" className="hover:text-cyan-500 transition">
            Tasks
          </a>

          <a href="#" className="hover:text-cyan-500 transition">
            Planner
          </a>

          <a href="#" className="hover:text-cyan-500 transition">
            Rescue AI
          </a>
        </div>

        {/* Right */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <a
            href="https://github.com/sharadpal8055"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              bg-slate-100
              dark:bg-slate-800

              p-3

              transition

              hover:scale-110
            "
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <div
            className="
              flex
              items-center
              gap-2

              rounded-xl

              bg-gradient-to-r
              from-cyan-500/10
              to-blue-500/10

              px-4
              py-3
            "
          >
            <Sparkles className="w-5 h-5 text-cyan-500" />

            <span className="text-sm font-medium">
              Powered by Gemini AI
            </span>
          </div>
        </div>
      </div>

      <div
        className="
          border-t
          border-slate-200
          dark:border-slate-800

          py-5

          text-center

          text-sm

          text-slate-500
          dark:text-slate-400
        "
      >
        © {new Date().getFullYear()} Clutch AI • Built with{" "}
        <Heart
          className="
            inline
            w-4
            h-4
            text-red-500
          "
        />{" "}
        by Sharad Pal
      </div>
    </footer>
  );
}

export default Footer;