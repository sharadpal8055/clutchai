import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function CompletionRadialChart({ stats }) {
  const completion = Math.min(stats?.completionRate || 0, 100);

  const data = [
    {
      name: "Completion",
      value: completion,
      fill: "#22c55e",
    },
  ];

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700

        bg-white/90
        dark:bg-slate-900/70

        backdrop-blur-xl

        shadow-xl
        hover:shadow-2xl

        transition-all
        duration-300

        p-6
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between mb-6">
        <div>
          <h2
            className="
              flex
              items-center
              gap-2

              text-2xl
              font-bold

              text-slate-900
              dark:text-white
            "
          >
             Completion Rate
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Overall task completion
          </p>
        </div>

        <div
          className={`
            rounded-xl
            px-4
            py-2

            text-sm
            font-semibold

            ${
              completion >= 80
                ? "bg-green-500/10 text-green-600"
                : completion >= 50
                ? "bg-yellow-500/10 text-yellow-600"
                : "bg-red-500/10 text-red-600"
            }
          `}
        >
          {completion >= 80
            ? "Excellent"
            : completion >= 50
            ? "Good"
            : "Needs Work"}
        </div>
      </div>

      {/* Chart */}

      <div className="relative h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            innerRadius="72%"
            outerRadius="100%"
            startAngle={180}
            endAngle={0}
            barSize={18}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />

            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={30}
              animationDuration={1000}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center Content */}

        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            items-center
            justify-center
          "
        >
          <div
            className="
              text-6xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            {completion}
          </div>

          <div
            className="
              text-lg
              font-semibold

              text-slate-500
              dark:text-slate-400
            "
          >
            %
          </div>
        </div>
      </div>

      {/* Bottom Summary */}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div
          className="
            rounded-2xl
            bg-green-500/10
            p-4
            text-center
          "
        >
          <p className="text-sm text-slate-500">
            Completed
          </p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            {completion}%
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-blue-500/10
            p-4
            text-center
          "
        >
          <p className="text-sm text-slate-500">
            Remaining
          </p>

          <p className="mt-1 text-2xl font-bold text-blue-600">
            {100 - completion}%
          </p>
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          mt-6

          rounded-2xl

          border
          border-slate-200
          dark:border-slate-700

          bg-slate-50
          dark:bg-slate-800/50

          p-4

          text-center
        "
      >
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {completion >= 90
            ? "🎉 Outstanding! Almost every task has been completed."
            : completion >= 70
            ? "🚀 You're making excellent progress."
            : completion >= 40
            ? "⚡ Keep the momentum going."
            : " Start completing high-priority tasks to improve your score."}
        </p>
      </div>
    </div>
  );
}