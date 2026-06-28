import RescueModeCard from "./RescueModeCard";
import PlannerTimeline from "./PlannerTimeline";
import { motion } from "framer-motion";
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
  <motion.div
  layout
  whileHover={{
    y: -6,
    scale: 1.01,
  }}
  transition={{
    type: "spring",
    stiffness: 220,
  }}
>
  <div
    className="
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white/80
      dark:bg-slate-900/70
      backdrop-blur-xl
      shadow-xl
      hover:shadow-2xl
      transition-all
      duration-300
      p-7
    "
  >

        {/* Header */}

     {/* ================= HEADER ================= */}

<div
  className="
    flex
    flex-col
    xl:flex-row
    xl:items-start
    xl:justify-between
    gap-6
    mb-8
  "
>

  {/* Left */}

  <div className="flex-1 min-w-0">

    {/* Title + Badge */}

    <div
      className="
        flex
        flex-wrap
        items-start
        gap-3
      "
    >

      <h2
        className="
          break-words
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-extrabold
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        {task.title}
      </h2>

      <span
        className="
          shrink-0
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-3
          py-1
          text-[11px]
          font-semibold
          uppercase
          tracking-wider
          text-cyan-500
        "
      >
        AI Generated
      </span>

    </div>

    {/* Description */}

    <p
      className="
        mt-4
        max-w-4xl
        break-words
        whitespace-pre-wrap
        text-[15px]
        leading-7
        text-slate-600
        dark:text-slate-400
      "
    >
      {task.description}
    </p>

  </div>

  {/* Right */}

  <div
    className="
      w-full
      sm:w-72
      shrink-0

      rounded-3xl

      border
      border-slate-200
      dark:border-slate-700

      bg-white/70
      dark:bg-slate-900/70

      backdrop-blur-xl

      shadow-xl

      p-5
    "
  >

    {/* Header */}

    <div
      className="
        flex
        items-center
        justify-between
      "
    >

      <span
        className="
          text-xs
          uppercase
          tracking-[0.18em]
          text-slate-500
          dark:text-slate-400
        "
      >
        Risk Analysis
      </span>

      <div
        className={`
          rounded-full
          px-3
          py-1

          text-[11px]
          font-bold
          uppercase

          whitespace-nowrap

          ${
            task.riskScore >= 80
              ? "bg-red-500 text-white"
              : task.riskScore >= 50
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }
        `}
      >
        {task.riskScore >= 80
          ? "High"
          : task.riskScore >= 50
          ? "Medium"
          : "Low"}
      </div>

    </div>

    {/* Score */}

    <div className="mt-6">

      <div className="flex items-end">

        <span
          className="
            text-6xl
            font-black
            leading-none
            text-slate-900
            dark:text-white
          "
        >
          {task.riskScore}
        </span>

        <span
          className="
            mb-2
            ml-1
            text-2xl
            font-bold
            text-slate-500
          "
        >
          %
        </span>

      </div>

      <p
        className="
          mt-2
          text-sm
          text-slate-500
          dark:text-slate-400
        "
      >
        Current AI predicted deadline risk
      </p>

    </div>

    {/* Progress */}

    <div className="mt-5">

      <div
        className="
          h-2.5
          overflow-hidden
          rounded-full
          bg-slate-200
          dark:bg-slate-700
        "
      >

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${Math.min(task.riskScore, 100)}%`,
          }}
          transition={{
            duration: 0.9,
          }}
          className={`
            h-full
            rounded-full

            ${
              task.riskScore >= 80
                ? "bg-gradient-to-r from-red-500 to-rose-600"
                : task.riskScore >= 50
                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                : "bg-gradient-to-r from-green-500 to-emerald-600"
            }
          `}
        />

      </div>

    </div>

  </div>

</div>

        {/* Info Grid */}

      {/* ---------- Task Details ---------- */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

  {/* Deadline */}

  <div
    className="
      group
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white/60
      dark:bg-slate-800/60
      backdrop-blur-xl
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-cyan-400/40
    "
  >
    <div className="flex items-center justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        📅 Deadline
      </p>

      <span className="text-xl group-hover:scale-110 transition">
        📆
      </span>
    </div>

    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
      {task.deadline}
    </h3>
  </div>

  {/* Priority */}

  <div
    className="
      group
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white/60
      dark:bg-slate-800/60
      backdrop-blur-xl
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-orange-400/40
    "
  >
    <div className="flex items-center justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        🚩 Priority
      </p>

      <span className="text-xl group-hover:scale-110 transition">
        {task.priority === "High"
          ? "🔴"
          : task.priority === "Medium"
          ? "🟡"
          : "🟢"}
      </span>
    </div>

    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
      {task.priority}
    </h3>
  </div>

  {/* Difficulty */}

  <div
    className="
      group
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white/60
      dark:bg-slate-800/60
      backdrop-blur-xl
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-purple-400/40
    "
  >
    <div className="flex items-center justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        ⚡ Difficulty
      </p>

      <span className="text-xl group-hover:scale-110 transition">
        💪
      </span>
    </div>

    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
      {task.difficulty}
    </h3>
  </div>

  {/* Estimated Hours */}

  <div
    className="
      group
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white/60
      dark:bg-slate-800/60
      backdrop-blur-xl
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-green-400/40
    "
  >
    <div className="flex items-center justify-between">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        ⏳ Estimated Time
      </p>

      <span className="text-xl group-hover:scale-110 transition">
        ⌛
      </span>
    </div>

    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
      {task.estimatedHours} hrs
    </h3>
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
          <h3 className="font-bold text-orange-700 mb-2">
            🤖 AI Recommendation
          </h3>

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
            <span className="font-bold ml-2">
              {task.completionProbability}%
            </span>
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
    </motion.div>
  );
}

export default TaskCard;
