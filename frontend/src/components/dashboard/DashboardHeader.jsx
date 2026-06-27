import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export default function DashboardHeader({
  stats,
  calendarConnected,
  lastCalendarSync,
}) {
  const { user } = useAuth();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const metrics = [
    {
      label: "Clutch Score",
      value: stats?.clutchScore ?? 0,
      icon: "🚀",
      color: "text-blue-600",
    },
    {
      label: "Streak",
      value: `${stats?.streak ?? 0} Days`,
      icon: "🔥",
      color: "text-orange-500",
    },
    {
      label: "Completion",
      value: `${stats?.completionRate ?? 0}%`,
      icon: "✅",
      color: "text-green-600",
    },
    {
      label: "Avg Risk",
      value: `${stats?.averageRisk ?? 0}%`,
      icon: "⚠",
      color: "text-red-500",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white shadow-2xl">
      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 p-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {/* Left */}

          <div className="flex items-center gap-5">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-20 h-20 rounded-full border-4 border-white/20 shadow-lg"
            />

            <div>
              <h1 className="text-4xl font-bold">👋 {greeting},</h1>

              <h2 className="text-2xl font-semibold mt-1">
                {user?.displayName}
              </h2>

              {/* Calendar Status */}

              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    calendarConnected
                      ? "bg-green-400 animate-pulse"
                      : "bg-red-400"
                  }`}
                />

                <span className="text-sm text-blue-100">
                  {calendarConnected
                    ? "Google Calendar Connected"
                    : "Calendar Not Connected"}
                </span>
              </div>

              {calendarConnected && lastCalendarSync && (
                <p className="text-xs text-blue-200 mt-2">
                  Last synced
                  {new Date(lastCalendarSync._seconds * 1000).toLocaleString()}
                </p>
              )}

              {/* Date */}

              <p className="text-blue-200 mt-2">
                {time.toLocaleDateString(undefined, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="text-left lg:text-right">
            <div className="text-5xl font-bold tracking-wide">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>

            <p className="text-blue-200 mt-2">Live Dashboard</p>
          </div>
        </div>

        {/* Metrics */}

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{item.icon}</span>

                <span className={`font-bold ${item.color}`}>{item.value}</span>
              </div>

              <p className="mt-3 text-sm text-blue-100">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
