export default function UpcomingDeadlines({ tasks = [] }) {
  const upcoming = [...tasks]

    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))

    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">🗓 Upcoming Deadlines</h2>

      {upcoming.length === 0 ? (
        <p>No upcoming tasks.</p>
      ) : (
        upcoming.map((task) => (
          <div key={task.id} className="flex justify-between border-b py-3">
            <div>
              <p className="font-semibold">{task.title}</p>

              <p className="text-gray-500 text-sm">{task.deadline}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-white text-sm

${
  task.priority === "High"
    ? "bg-red-500"
    : task.priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500"
}

`}
            >
              {task.priority}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
