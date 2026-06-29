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
      <div className="absolute inset-0 overflow-hidden">

<div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"/>

<div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px] animate-pulse"/>

<div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]"/>

</div>

      {/* Back */}

      <Link
        to="/"
        className="
  fixed
  top-4
  left-4
  sm:top-6
  sm:left-6
  lg:top-8
  lg:left-8
  z-50

  flex
  items-center
  gap-2

  rounded-xl

  border
  border-white/10

  bg-slate-900/70
  backdrop-blur-xl

  px-4
  py-2

  text-sm

  transition-all
  duration-300

  hover:bg-cyan-500
  hover:border-cyan-400
"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div
        className="
relative
z-10

mx-auto

min-h-screen

max-w-7xl

flex

items-center

justify-center

px-6

pt-28
pb-16

lg:pt-20
"
      >
        <div
          className="
grid

w-full

items-center

gap-16

lg:grid-cols-2

xl:gap-24
"
        >
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
            <h1
              className="
text-4xl
sm:text-5xl
xl:text-6xl

font-black

leading-tight
"
            >
              Continue Your
              <br />
              Productivity
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Journey
              </span>
            </h1>

            <p
              className="
mt-6

max-w-xl

text-base
sm:text-lg

leading-8

text-slate-300
"
            >
              Sign in with your Google account to access AI planning, Rescue
              Mode, risk prediction, productivity analytics, and Google Calendar
              integration.
            </p>

            <div
              className="
mt-10

grid

gap-4

sm:grid-cols-2
"
            >
              <div
                className="
flex

items-center

gap-3

rounded-xl

bg-white/5

border

border-white/10

px-4

py-3

hover:border-cyan-500/30

transition
"
              >
                ✅ AI Planner
              </div>

              <div
                className="
flex

items-center

gap-3

rounded-xl

bg-white/5

border

border-white/10

px-4

py-3

hover:border-cyan-500/30

transition
"
              >
                ✅ Google Calendar Sync
              </div>

              <div
                className="
flex

items-center

gap-3

rounded-xl

bg-white/5

border

border-white/10

px-4

py-3

hover:border-cyan-500/30

transition
"
              >
                ✅ Rescue Mode
              </div>

              <div
                className="
flex

items-center

gap-3

rounded-xl

bg-white/5

border

border-white/10

px-4

py-3

hover:border-cyan-500/30

transition
"
              >
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
rounded-[32px]

border

border-white/10

bg-white/10

backdrop-blur-3xl

p-8

sm:p-10

shadow-[0_20px_80px_rgba(0,255,255,.08)]

hover:shadow-cyan-500/20

transition-all

duration-500
"
          >
            <div className="text-center">
              <div className="relative mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse" />

                <img
                  src="/Clutchai.png"
                  className="
relative

w-24
h-24

mx-auto

rounded-3xl

shadow-2xl

animate-float
"
                />
              </div>

              <h2 className="text-3xl font-bold">Clutch AI</h2>

              <p className="mt-2 text-slate-300">
                AI Deadline Rescue Assistant
              </p>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
mt-10

group

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

text-slate-900

transition-all

duration-300

hover:-translate-y-1

hover:shadow-2xl

hover:shadow-cyan-500/20

active:scale-95

disabled:opacity-70
"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="
h-6
w-6
transition
group-hover:rotate-12
"
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
