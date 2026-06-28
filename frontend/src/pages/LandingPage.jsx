import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  BrainCircuit,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

function LandingPage() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white">
      <div
        className="
  absolute inset-0
  opacity-[0.06]
  [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
  [background-size:60px_60px]
"
      />
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-3xl"
      />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-3xl" />

      {/* Navigation */}
      {/* ================= NAVBAR ================= */}

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

            <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-cyan-400 transition">
                Features
              </a>

              <a href="#workflow" className="hover:text-cyan-400 transition">
                Workflow
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </div>

            {/* Login */}

            <Link
              to="/login"
              className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 font-medium transition hover:bg-cyan-500 hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-20 px-6 pt-36 pb-20 lg:flex-row lg:px-10">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl shadow-lg">
            <Sparkles size={16} />
            Powered by Gemini AI • Google Calendar • Firebase
          </div>

          <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl xl:text-7xl 2xl:text-8xl">
            Plan Smarter.
            <br />
            Finish Earlier.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Never Miss a Deadline.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            AI-powered productivity companion that predicts deadline risks,
            creates intelligent rescue plans, automatically prioritizes your
            work, and seamlessly syncs everything with Google Calendar before
            you fall behind.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              to="/login"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-9 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/50"
            >
              Launch Clutch AI
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-2"
              />
            </Link>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-9 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
              Explore Features
            </button>
          </div>

          {/* Feature Pills */}

          <div className="mt-12 flex flex-wrap gap-4">
            {[
              "🤖 AI Planner",

              "📅 Calendar Sync",

              "⚠ Risk Prediction",

              "🚀 Rescue Mode",

              "📊 Productivity Insights",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}

      <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
transition={{
  duration: 0.9,
}}
animate={{
  opacity: 1,
  x: 0,
  y: [0, -8, 0],
}}
  className="flex-1 w-full"
>
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
  >
    {/* Top Bar */}

    <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

      <div>

        <h2 className="text-2xl font-bold">

          Clutch Dashboard

        </h2>

        <p className="text-sm text-slate-400">

          Live AI Workspace

        </p>

      </div>

      <div className="flex items-center gap-2 rounded-full bg-green-500/15 px-4 py-2">

        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        <span className="text-sm text-green-300">

          Live

        </span>

      </div>

    </div>

    <div className="space-y-6 p-8">

      {/* KPI */}

      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-slate-900/60 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80">

          <p className="text-xs text-slate-400">

            Clutch Score

          </p>

          <h3 className="mt-2 text-3xl font-black text-cyan-400">

            91

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-900/60 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80">

          <p className="text-xs text-slate-400">

            Risk

          </p>

          <h3 className="mt-2 text-3xl font-black text-red-400">

            12%

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-900/60 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80">

          <p className="text-xs text-slate-400">

            Tasks

          </p>

          <h3 className="mt-2 text-3xl font-black text-green-400">

            14

          </h3>

        </div>

      </div>

      {/* Planner */}

      <div className="rounded-2xl bg-slate-900/60 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80">

        <div className="flex items-center justify-between">

          <h3 className="font-bold">

            AI Planner

          </h3>

          <span className="text-cyan-400 text-sm">

            Today

          </span>

        </div>

        <div className="mt-6 space-y-5">

          {[
            {
              time: "09:00",
              task: "Resume Review",
              color: "bg-cyan-500",
            },
            {
              time: "11:00",
              task: "DSA Practice",
              color: "bg-green-500",
            },
            {
              time: "15:00",
              task: "Mock Interview",
              color: "bg-orange-500",
            },
          ].map((item) => (

            <div
              key={item.time}
              className="flex items-center gap-4"
            >

              <div className={`h-3 w-3 rounded-full ${item.color}`} />

              <span className="w-20 text-slate-400">

                {item.time}

              </span>

              <span className="font-medium">

                {item.task}

              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Rescue */}

      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80">

        <div className="flex items-center justify-between">

          <h3 className="font-semibold">

            Rescue Mode

          </h3>

          <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300">

            ACTIVE

          </span>

        </div>

        <p className="mt-4 text-sm text-slate-300">

          AI recommends focusing on your highest-risk task first and postponing low-priority work.

        </p>

      </div>

      {/* Calendar */}

      <div className="flex items-center justify-between rounded-2xl bg-slate-900/60 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80">

        <div>

          <h3 className="font-semibold">

            Google Calendar

          </h3>

          <p className="text-sm text-slate-400">

            Synced successfully

          </p>

        </div>

        <div className=" transition-all duration-300 hover:scale-[1.03] hover:bg-slate-800/80 rounded-full bg-green-500/20 px-4 py-2 text-green-300">

          Connected

        </div>

      </div>

    </div>

    {/* Floating Blur */}

    <div className="absolute -right-20 top-32 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

  </motion.div>

</motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
