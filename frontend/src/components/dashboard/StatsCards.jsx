function Card({ title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-2 ${color}`}>
        {value ?? 0}
      </h2>

    </div>
  );
}

export default function StatsCards({ stats }) {
  return (
    <div className="grid md:grid-cols-4 gap-5 mt-6">

      <Card
        title="Tasks"
        value={stats?.totalTasks}
        color="text-blue-600"
      />

      <Card
        title="Completed"
        value={stats?.completed}
        color="text-green-600"
      />

      <Card
        title="High Risk"
        value={stats?.highRisk}
        color="text-red-600"
      />

      <Card
        title="Rescue Mode"
        value={stats?.rescueMode}
        color="text-orange-600"
      />

    </div>
  );
}