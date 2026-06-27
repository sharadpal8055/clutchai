import RescueModeCard from "./RescueModeCard";
import PlannerTimeline from "./PlannerTimeline";
function TaskCard({ task, onDelete, onProgressUpdate, onEdit }) {
  const riskColor =
    task.riskScore >= 80
      ? "bg-red-500"
      : task.riskScore >= 50
        ? "bg-yellow-500"
        : "bg-green-500";

  const clutchColor =
    task.clutchScore >= 80
      ? "bg-green-500"
      : task.clutchScore >= 50
        ? "bg-yellow-500"
        : "bg-red-500";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
      {/* Header */}

      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{task.title}</h2>

          <p className="text-gray-500 mt-1">{task.description}</p>
        </div>

        <span
          className={`${riskColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}
        >
          Risk {task.riskScore}
        </span>
      </div>

      {/* Info Grid */}

      <div className="grid grid-cols-2 gap-4 text-sm mb-5">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-500">Deadline</p>
          <p className="font-semibold">{task.deadline}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-500">Priority</p>
          <p className="font-semibold">{task.priority}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-500">Difficulty</p>
          <p className="font-semibold">{task.difficulty}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-gray-500">Estimated Hours</p>
          <p className="font-semibold">{task.estimatedHours} hrs</p>
        </div>
      </div>

      {/* Progress */}

      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Progress</span>

          <span>{task.progress}%</span>
        </div>

        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${task.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Clutch Score */}

      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">🎯 Clutch Score</span>

          <span className="font-bold">{task.clutchScore}/100</span>
        </div>

        <div className="bg-gray-200 rounded-full h-3">
          <div
            className={`${clutchColor} h-3 rounded-full`}
            style={{
              width: `${task.clutchScore}%`,
            }}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        {task.calendarSync?.synced ? (
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            📅 Synced to Google Calendar
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
            Calendar Not Synced
          </span>
        )}
        {task.calendarSync?.syncedAt && (
          <p className="text-xs text-gray-500 mt-2">
            Last Sync:
            {new Date(
              task.calendarSync.syncedAt.seconds * 1000,
            ).toLocaleString()}
          </p>
        )}
      </div>
      {/* AI Recommendation */}

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-5">
        <h3 className="font-bold text-orange-700 mb-2">🤖 AI Recommendation</h3>

        <p className="text-orange-700">{task.warning}</p>

        <p className="text-sm text-gray-600 mt-2">{task.recommendation}</p>
      </div>

      {/* Subtasks */}

      {task.subtasks?.length > 0 && (
        <div className="mb-5">
          <h3 className="font-bold mb-3">📋 AI Generated Subtasks</h3>

          <ul className="space-y-2">
            {task.subtasks.map((subtask, index) => (
              <li
                key={index}
                className="bg-blue-50 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                ✅ {subtask}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Rescue Mode */}

      {task.rescuePlan && task.rescuePlan && (
        <div className="mb-5">
          <RescueModeCard rescuePlan={task.rescuePlan} />
        </div>
      )}
      {task.planner && <PlannerTimeline planner={task.planner} />}
      {/* Footer */}

      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Completion Probability
          <span className="font-bold ml-2">{task.completionProbability}%</span>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">Progress</p>

            <p className="font-bold text-blue-600">{task.progress}%</p>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={task.progress}
            onChange={(e) =>
              onProgressUpdate(
                task.id,

                Number(e.target.value),
              )
            }
            className="w-full accent-blue-600"
          />
        </div>
        <p className="text-sm mt-2 text-gray-500">
          {task.progress === 100
            ? "🎉 Completed"
            : task.progress >= 75
              ? "🚀 Almost Done"
              : task.progress >= 50
                ? "⚡ Halfway There"
                : task.progress >= 25
                  ? "📈 Getting Started"
                  : "📝 Not Started"}
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onEdit(task)}
            className="
        flex-1
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-2
        rounded-lg
        transition
        "
          >
            ✏ Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="
        flex-1
        bg-red-600
        hover:bg-red-700
        text-white
        py-2
        rounded-lg
        transition
        "
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
