import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function RiskPieChart({ tasks = [] }) {
  const low = tasks.filter((task) => task.riskScore < 50).length;

  const medium = tasks.filter(
    (task) => task.riskScore >= 50 && task.riskScore < 80
  ).length;

  const high = tasks.filter((task) => task.riskScore >= 80).length;

  const data = [
    {
      name: "Low",
      value: low,
    },
    {
      name: "Medium",
      value: medium,
    },
    {
      name: "High",
      value: high,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444",
  ];

  const total = low + medium + high;

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
            📊 Risk Distribution
          </h2>

          <p
            className="
            mt-1
            text-sm
            text-slate-500
            dark:text-slate-400
          "
          >
            Current task risk breakdown
          </p>
        </div>

        <div
          className="
          rounded-xl
          bg-cyan-500/10
          px-4
          py-2

          text-sm
          font-semibold

          text-cyan-600
        "
        >
          {total} Tasks
        </div>
      </div>

      {/* Empty State */}

      {total === 0 ? (
        <div
          className="
          h-[320px]

          flex
          flex-col
          items-center
          justify-center

          text-center
        "
        >
          <div className="text-6xl mb-4">📉</div>

          <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
            No Tasks Yet
          </h3>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Create tasks to visualize your risk distribution.
          </p>
        </div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={105}
                innerRadius={60}
                paddingAngle={4}
                animationDuration={900}
                label={({ percent }) =>
                  `${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                    stroke="transparent"
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "14px",
                  border: "none",
                  boxShadow: "0 8px 30px rgba(0,0,0,.12)",
                }}
              />

              <Legend verticalAlign="bottom" height={25} />
            </PieChart>
          </ResponsiveContainer>

          {/* Summary */}

          <div className="grid grid-cols-3 gap-3 mt-5">
            <div
              className="
              rounded-2xl
              bg-green-500/10
              p-4
              text-center
            "
            >
              <div className="text-sm text-slate-500">
                Low
              </div>

              <div className="mt-1 text-2xl font-bold text-green-600">
                {low}
              </div>
            </div>

            <div
              className="
              rounded-2xl
              bg-yellow-500/10
              p-4
              text-center
            "
            >
              <div className="text-sm text-slate-500">
                Medium
              </div>

              <div className="mt-1 text-2xl font-bold text-yellow-600">
                {medium}
              </div>
            </div>

            <div
              className="
              rounded-2xl
              bg-red-500/10
              p-4
              text-center
            "
            >
              <div className="text-sm text-slate-500">
                High
              </div>

              <div className="mt-1 text-2xl font-bold text-red-600">
                {high}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}