export default function RescueTasks({ tasks = [] }) {
  const rescueTasks = tasks.filter((task) => task.rescuePlan);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">🚨 Rescue Tasks</h2>

      {rescueTasks.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          🎉 No rescue tasks.
        </div>
      ) : (
        rescueTasks.map((task) => (
          <div key={task.id} className="border rounded-xl p-4 mb-4 bg-red-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{task.title}</h3>

                <p className="text-sm text-gray-600">{task.deadline}</p>
              </div>

              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                Risk {task.riskScore}
              </span>
            </div>

            <div className="mt-3">
              <p className="font-semibold text-red-600">⚠ {task.warning}</p>

              <p className="text-sm text-gray-700 mt-1">
                {task.recommendation}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Clutch Score</span>

                <span>{task.clutchScore}/100</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    task.clutchScore >= 80
                      ? "bg-green-500"
                      : task.clutchScore >= 50
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: `${task.clutchScore}%`,
                  }}
                />
              </div>
            </div>

           <details className="mt-4">

    <summary className="cursor-pointer text-red-600 font-semibold">

        📋 View Rescue Plan

    </summary>

    <div className="mt-3">

        <h4 className="font-semibold">

            Today's Mission

        </h4>

        <ul className="list-disc ml-6">

            {task.rescuePlan.today.map((item, index) => (

                <li key={index}>{item}</li>

            ))}

        </ul>

        <h4 className="font-semibold mt-4">

            Tomorrow

        </h4>

        <ul className="list-disc ml-6">

            {task.rescuePlan.tomorrow.map((item, index) => (

                <li key={index}>{item}</li>

            ))}

        </ul>

        <h4 className="font-semibold mt-4">

            Critical Actions

        </h4>

        <ul className="list-disc ml-6">

            {task.rescuePlan.criticalActions.map((item, index) => (

                <li key={index}>{item}</li>

            ))}

        </ul>

        <div className="mt-4 p-3 rounded-lg bg-yellow-100">

            💡 {task.rescuePlan.motivation}

        </div>

    </div>

</details>
          </div>
        ))
      )}
    </div>
  );
}
