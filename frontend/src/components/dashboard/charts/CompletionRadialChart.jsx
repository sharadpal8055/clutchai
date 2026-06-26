import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

export default function CompletionRadialChart({
  stats,
}) {

  const data=[

    {

      name:"Completion",

      value:
      stats?.completionRate||0,

    },

  ];

  return(

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">

        🔥 Completion Rate

      </h2>

      <ResponsiveContainer
      width="100%"
      height={300}
      >

        <RadialBarChart

        innerRadius="70%"

        outerRadius="100%"

        data={data}

        startAngle={180}

        endAngle={0}

        >

          <RadialBar
          dataKey="value"
          fill="#22c55e"
          />

        </RadialBarChart>

      </ResponsiveContainer>

      <div className="text-center text-4xl font-bold">

      {stats?.completionRate}%

      </div>

    </div>

  );

}