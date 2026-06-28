import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { loginWithGoogle } from "../services/authService";

function LoginPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      await loginWithGoogle();

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white">

      {/* Background Grid */}

      <div
        className="
        absolute inset-0 opacity-[0.06]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:60px_60px]
      "
      />

      {/* Glow */}

      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-3xl" />

      {/* Back */}

      <Link
        to="/"
        className="
        absolute
        left-8
        top-8
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        backdrop-blur-xl
        transition
        hover:bg-white/10
      "
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              <Sparkles size={16} />
              Welcome Back
            </div>

            <h1 className="text-5xl font-black leading-tight">
              Continue Your
              <br />
              Productivity
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Journey
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Sign in with your Google account to access AI planning,
              Rescue Mode, risk prediction, productivity analytics,
              and Google Calendar integration.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                ✅ AI Planner
              </div>

              <div className="flex items-center gap-3">
                ✅ Google Calendar Sync
              </div>

              <div className="flex items-center gap-3">
                ✅ Rescue Mode
              </div>

              <div className="flex items-center gap-3">
                ✅ Real-time Dashboard
              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/10
            p-10
            shadow-2xl
            backdrop-blur-2xl
          "
          >

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl shadow-lg">
                🚀
              </div>

              <h2 className="text-3xl font-bold">
                Clutch AI
              </h2>

              <p className="mt-2 text-slate-300">
                AI Deadline Rescue Assistant
              </p>

            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-4
              rounded-2xl
              bg-white
              px-6
              py-4
              text-lg
              font-semibold
              text-black
              transition
              hover:scale-[1.02]
              hover:shadow-xl
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
            >

              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-6 w-6"
              />

              {loading ? "Signing In..." : "Continue with Google"}

            </button>

            <p className="mt-8 text-center text-sm text-slate-400">
              By continuing you agree to our Terms and Privacy Policy.
            </p>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;