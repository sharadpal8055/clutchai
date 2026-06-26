export default function TodayPlanner({ tasks = [] }) {
  const todaySchedule = tasks
    .flatMap((task) => {
      if (!task.planner?.schedule) return [];

      return task.planner.schedule.map((item) => ({
        ...item,
        taskTitle: task.title,
      }));
    })

    .filter((item) => item.day === "Today")

    .sort((a, b) => a.start.localeCompare(b.start));

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">🗓 Today's Planner</h2>

      {todaySchedule.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          No schedule for today.
        </div>
      ) : (
        todaySchedule.map((slot, index) => (
          <div key={index} className="flex gap-4 mb-6">
            {/* Time */}

            <div className="w-24 flex-shrink-0">
              <div className="font-bold text-blue-600">{slot.start}</div>

              <div className="text-sm text-gray-400">{slot.end}</div>
            </div>

            {/* Timeline */}

            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600" />

              {index !== todaySchedule.length - 1 && (
                <div className="w-1 h-16 bg-blue-200" />
              )}
            </div>

            {/* Card */}

            <div className="flex-1 bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold">📚 {slot.task}</h3>

              <p className="text-sm text-gray-500 mt-1">
                From
                <span className="font-medium"> {slot.taskTitle}</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">

⏱

{slot.start}

-

{slot.end}

</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
