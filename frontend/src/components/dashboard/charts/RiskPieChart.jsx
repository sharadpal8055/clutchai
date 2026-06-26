import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function RiskPieChart({ tasks = [] }) {

  const low =
    tasks.filter(task => task.riskScore < 50).length;

  const medium =
    tasks.filter(
      task =>
        task.riskScore >= 50 &&
        task.riskScore < 80
    ).length;

  const high =
    tasks.filter(task => task.riskScore >= 80).length;

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

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">

        📊 Risk Distribution

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >

            {
              data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))
            }

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );

}