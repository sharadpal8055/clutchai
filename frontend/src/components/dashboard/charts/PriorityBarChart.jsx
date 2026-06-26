import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function PriorityBarChart({
  tasks = [],
}) {

  const data = [

    {

      priority:"Low",

      tasks:
        tasks.filter(
          task =>
            task.priority==="Low"
        ).length,

    },

    {

      priority:"Medium",

      tasks:
        tasks.filter(
          task =>
            task.priority==="Medium"
        ).length,

    },

    {

      priority:"High",

      tasks:
        tasks.filter(
          task =>
            task.priority==="High"
        ).length,

    },

  ];

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">

        📊 Priority Distribution

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis
            dataKey="priority"
          />

          <YAxis/>

          <Tooltip/>

          <Bar
            dataKey="tasks"
            fill="#3b82f6"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}