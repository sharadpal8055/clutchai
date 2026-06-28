import { useEffect, useState } from "react";

const messages = [
  "Connecting to AI Engine...",
  "Starting cloud services...",
  "Waking Render server...",
  "Loading Gemini AI...",
  "Preparing your workspace...",
  "Almost Ready..."
];

export default function ServerLoader() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(messageTimer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 8;
      });
    }, 600);

    return () => clearInterval(progressTimer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-950 flex items-center justify-center">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950" />

      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse top-10 left-10" />

      <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-[120px] animate-pulse bottom-10 right-10" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">

        {/* Logo */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-60 animate-ping" />

            <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl">

              <svg
                className="h-12 w-12 text-white animate-spin"
                style={{ animationDuration: "8s" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364 6.364l-2.121-2.121M8.757 8.757L6.636 6.636m12.728 0l-2.121 2.121M8.757 15.243l-2.121 2.121"
                />
              </svg>

            </div>

          </div>

        </div>

        {/* Title */}

        <h1 className="mt-8 text-center text-5xl font-black tracking-widest text-white">
          CLUTCH AI
        </h1>

        <p className="mt-3 text-center text-cyan-300 text-lg">
          Your AI Productivity Companion
        </p>

        {/* Progress */}

        <div className="mt-12">

          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>{messages[index]}</span>
            <span>{Math.floor(progress)}%</span>
          </div>

          <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Dots */}

        <div className="mt-8 flex justify-center gap-3">

          <div className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce" />

          <div
            className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"
            style={{
              animationDelay: ".15s",
            }}
          />

          <div
            className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"
            style={{
              animationDelay: ".3s",
            }}
          />

        </div>

        {/* Footer */}

        <div className="mt-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4">

          <p className="text-center text-slate-300 text-sm">
            🚀 Starting secure AI cloud services
          </p>

          <p className="mt-2 text-center text-slate-400 text-sm">
            The first launch may take up to 60 seconds while
            the Render server wakes up.
          </p>

        </div>

        <p className="mt-8 text-center text-cyan-300 text-sm font-medium">
          Welcome, Sharad  Pal is Preparing your workspace...
        </p>

      </div>

    </div>
  );
}