function RescueModeCard({ rescuePlan }) {
  if (!rescuePlan) return null;

  return (
    <div className="mt-5 rounded-xl border-2 border-red-500 bg-red-50 p-5 shadow-lg">

      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🚨</span>

        <div>
          <h2 className="text-2xl font-bold text-red-700">
            Rescue Mode Activated
          </h2>

          <p className="text-red-600">
            High risk detected. Follow this emergency plan.
          </p>
        </div>
      </div>

      {/* Today's Mission */}

      <div className="mb-5">
        <h3 className="font-bold text-lg mb-2">
          📅 Today's Mission
        </h3>

        <ul className="space-y-2">
          {rescuePlan.today?.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded p-2 shadow"
            >
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tomorrow */}

      <div className="mb-5">
        <h3 className="font-bold text-lg mb-2">
          🌅 Tomorrow
        </h3>

        <ul className="space-y-2">
          {rescuePlan.tomorrow?.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded p-2 shadow"
            >
              📌 {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Critical Actions */}

      <div className="mb-5">
        <h3 className="font-bold text-lg mb-2">
          ⚠ Critical Actions
        </h3>

        <ul className="space-y-2">
          {rescuePlan.criticalActions?.map((item, index) => (
            <li
              key={index}
              className="bg-yellow-100 rounded p-2"
            >
              ⚡ {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Motivation */}

      <div className="rounded bg-green-100 p-3">
        💡
        <span className="ml-2 font-medium">
          {rescuePlan.motivation}
        </span>
      </div>

    </div>
  );
}

export default RescueModeCard;