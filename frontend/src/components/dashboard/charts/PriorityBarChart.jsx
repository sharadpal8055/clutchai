import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
 ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

export default function PriorityBarChart({ tasks = [] }) {
  const data = [
    {
      priority: "Low",
      tasks: tasks.filter((task) => task.priority === "Low").length,
      color: "#22c55e",
    },
    {
      priority: "Medium",
      tasks: tasks.filter((task) => task.priority === "Medium").length,
      color: "#f59e0b",
    },
    {
      priority: "High",
      tasks: tasks.filter((task) => task.priority === "High").length,
      color: "#ef4444",
    },
  ];

  const total = tasks.length;

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
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
            📊 Priority Distribution
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Breakdown of task priorities
          </p>
        </div>

        <div
          className="
          rounded-xl
          bg-blue-500/10
          px-4
          py-2

          text-sm
          font-semibold

          text-blue-600
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
          <div className="text-6xl mb-4">📂</div>

          <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
            No Tasks Found
          </h3>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Add tasks to visualize priority distribution.
          </p>
        </div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 15,
                left: -20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                strokeOpacity={0.15}
              />

              <XAxis
                dataKey="priority"
                tick={{
                  fill: "#64748b",
                  fontSize: 14,
                  fontWeight: 600,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 13,
                }}
              />

              <Tooltip
                cursor={{
                  fill: "rgba(59,130,246,.08)",
                }}
                contentStyle={{
                  borderRadius: "14px",
                  border: "none",
                  boxShadow:
                    "0 8px 30px rgba(0,0,0,.15)",
                }}
              />

              <Bar
                dataKey="tasks"
                radius={[12, 12, 0, 0]}
                animationDuration={900}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                ))}
              </Bar>
            </BarChart>
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
                {data[0].tasks}
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
                {data[1].tasks}
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
                {data[2].tasks}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}