function PlannerTimeline({ planner }) {
  if (!planner || !planner.schedule?.length) return null;

  return (
    <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">

      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">🗓</span>

        <h2 className="text-xl font-bold text-blue-700">
          AI Daily Planner
        </h2>
      </div>

      <div className="space-y-4">

        {planner.schedule.map((item, index) => (

          <div
            key={index}
            className="flex gap-4"
          >

            <div className="flex flex-col items-center">

              <div className="w-4 h-4 rounded-full bg-blue-600" />

              {index !== planner.schedule.length - 1 && (
                <div className="w-1 flex-1 bg-blue-300" />
              )}

            </div>

            <div className="flex-1 bg-white rounded-xl p-4 shadow">

              <div className="flex justify-between items-center">

                <span className="font-semibold text-blue-700">

                  {item.day}

                </span>

                <span className="text-sm text-gray-500">

                  {item.start} - {item.end}

                </span>

              </div>

              <p className="mt-2 text-gray-700">

                📌 {item.task}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PlannerTimeline;