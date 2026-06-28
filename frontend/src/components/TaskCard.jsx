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
  className="mb-6 break-inside-avoid"
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
w-full
h-fit

rounded-3xl

bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-800

shadow-lg

hover:shadow-2xl

transition-all
duration-300

overflow-hidden
"
>
        {/* Header */}

        {/* ================= HEADER ================= */}

   <div
  className="
    relative
    overflow-hidden

    rounded-3xl

    bg-gradient-to-br
    from-white
    via-slate-50
    to-cyan-50

    dark:from-slate-900
    dark:via-slate-900
    dark:to-slate-950

    border
    border-slate-200
    dark:border-slate-800

    p-6

    shadow-lg
  "
>
  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"/>

  {/* Top */}

  <div className="flex items-center justify-between flex-wrap gap-3">

    <div className="flex gap-2 flex-wrap">

      <span className="rounded-full bg-cyan-100 text-cyan-700 px-3 py-1 text-xs font-semibold">
        🤖 AI Generated
      </span>

      <span
        className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-bold

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
          ? "HIGH RISK"
          : task.riskScore >= 50
          ? "MEDIUM RISK"
          : "LOW RISK"}
      </span>

    </div>

  </div>

  {/* Title */}

  <h2
    className="
      mt-5

      text-3xl

      font-black

      leading-tight

      break-words

      text-slate-900
      dark:text-white
    "
  >
    {task.title}
  </h2>

  {/* Description */}

  <p
    className="
      mt-3

      text-base

      leading-7

      text-slate-600
      dark:text-slate-300

      line-clamp-3
    "
  >
    {task.description}
  </p>

  {/* Divider */}

  <div className="my-6 h-px bg-slate-200 dark:bg-slate-700"/>

  {/* Risk */}

  <div className="flex items-end justify-between">

    <div>

      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        Risk Score
      </p>

      <div className="flex items-end gap-2 mt-2">

        <span className="text-6xl font-black">
          {task.riskScore}
        </span>

        <span className="mb-2 text-2xl text-slate-400">
          %
        </span>

      </div>

    </div>

    <div
      className={`
      text-sm
      font-bold

      ${
        task.riskScore >= 80
          ? "text-red-500"
          : task.riskScore >= 50
          ? "text-yellow-500"
          : "text-green-500"
      }
    `}
    >
      {task.riskScore >= 80
        ? "Critical"
        : task.riskScore >= 50
        ? "Moderate"
        : "Safe"}
    </div>

  </div>

  {/* Progress */}

  <div className="mt-5">

    <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${task.riskScore}%` }}
        transition={{ duration: 1 }}
        className={`
          h-full

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

    <div className="mt-2 flex justify-between text-sm text-slate-500">

      <span>AI Deadline Prediction</span>

      <span>{task.riskScore}%</span>

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

        {/* ================= Progress ================= */}

        <div
          className="
    mb-8
    rounded-2xl
    border
    border-slate-200
    dark:border-slate-700
    bg-slate-50
    dark:bg-slate-800/40
    backdrop-blur-xl
    p-5
  "
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                📈 Progress
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Current completion status
              </p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-black text-blue-600">
                {task.progress}%
              </p>
            </div>
          </div>

          <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${task.progress}%` }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-indigo-600
      "
            />
          </div>
        </div>

        {/* Clutch Score */}

        {/* ================= Clutch Score ================= */}

        <div
          className="
    mb-8
    rounded-3xl
    border
    border-amber-200
    dark:border-amber-500/20
    bg-gradient-to-br
    from-amber-50
    via-white
    to-yellow-50
    dark:from-slate-900
    dark:via-slate-900
    dark:to-slate-800
    p-6
    shadow-lg
    hover:shadow-xl
    transition-all
    duration-300
  "
        >
          <div className="flex items-center justify-between gap-4">
            {/* Left */}

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>

                <div>
                  <p
                    className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              dark:text-slate-400
            "
                  >
                    Clutch Score
                  </p>

                  <p
                    className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
                  >
                    AI confidence in successful completion
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="text-right">
              <h2
                className="
          text-4xl
          font-black
          text-slate-900
          dark:text-white
        "
              >
                {task.clutchScore}

                <span
                  className="
            text-lg
            font-semibold
            text-slate-500
          "
                >
                  /100
                </span>
              </h2>
            </div>
          </div>

          {/* Progress */}

          <div className="mt-6">
            <div
              className="
        h-3
        overflow-hidden
        rounded-full
        bg-slate-200
        dark:bg-slate-700
      "
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${task.clutchScore}%`,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className={`
          h-full
          rounded-full

          ${
            task.clutchScore >= 80
              ? "bg-gradient-to-r from-green-500 to-emerald-600"
              : task.clutchScore >= 50
                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                : "bg-gradient-to-r from-red-500 to-rose-600"
          }
        `}
              />
            </div>

            <div className="mt-3 flex justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">
                Needs Improvement
              </span>

              <span
                className={`
          font-semibold

          ${
            task.clutchScore >= 80
              ? "text-green-600"
              : task.clutchScore >= 50
                ? "text-yellow-600"
                : "text-red-600"
          }
        `}
              >
                {task.clutchScore >= 80
                  ? "Excellent"
                  : task.clutchScore >= 50
                    ? "Good"
                    : "Critical"}
              </span>
            </div>
          </div>
        </div>

        {/* ================= Google Calendar ================= */}

        <div
          className="
    mt-6
    rounded-3xl
    border
    border-emerald-200
    dark:border-emerald-500/20
    bg-gradient-to-br
    from-emerald-50
    via-white
    to-cyan-50
    dark:from-slate-900
    dark:via-slate-900
    dark:to-slate-800
    p-5
    shadow-lg
    hover:shadow-xl
    transition-all
    duration-300
  "
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left */}

            <div className="flex items-start gap-4">
              <div
                className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-emerald-500/10
          text-2xl
        "
              >
                📅
              </div>

              <div>
                <h3
                  className="
            font-bold
            text-slate-900
            dark:text-white
          "
                >
                  Google Calendar
                </h3>

                <p
                  className="
            mt-1
            text-sm
            text-slate-500
            dark:text-slate-400
          "
                >
                  Planner schedule synchronization
                </p>
              </div>
            </div>

            {/* Status */}

            <div
              className={`
        flex
        items-center
        gap-2
        rounded-full
        px-4
        py-2
        text-xs
        font-bold
        uppercase
        tracking-wider

        ${
          task.calendarSync?.synced
            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
        }
      `}
            >
              <span
                className={`
          h-2.5
          w-2.5
          rounded-full

          ${
            task.calendarSync?.synced
              ? "bg-emerald-500 animate-pulse"
              : "bg-slate-400"
          }
        `}
              />

              {task.calendarSync?.synced ? "Connected" : "Not Connected"}
            </div>
          </div>

          {/* Divider */}

          <div className="my-5 border-t border-slate-200 dark:border-slate-700" />

          {/* Details */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p
                className="
          text-xs
          uppercase
          tracking-wider
          text-slate-500
        "
              >
                Status
              </p>

              <p
                className={`
          mt-2
          font-semibold

          ${task.calendarSync?.synced ? "text-emerald-600" : "text-slate-500"}
        `}
              >
                {task.calendarSync?.synced
                  ? "✅ Synced Successfully"
                  : "⚠ Waiting for Sync"}
              </p>
            </div>

            <div>
              <p
                className="
          text-xs
          uppercase
          tracking-wider
          text-slate-500
        "
              >
                Last Synchronization
              </p>

              <p
                className="
          mt-2
          font-medium
          text-slate-700
          dark:text-slate-300
          break-words
        "
              >
                {task.calendarSync?.syncedAt
                  ? new Date(
                      task.calendarSync.syncedAt.seconds * 1000,
                    ).toLocaleString()
                  : "Not Available"}
              </p>
            </div>
          </div>
        </div>
        {/* AI Recommendation */}

        {/* ================= AI Recommendation ================= */}

   <div
  className="
    relative

    overflow-hidden

    rounded-[30px]

    border
    border-orange-200/60
    dark:border-slate-700

    bg-white/90
    dark:bg-slate-900/90

    backdrop-blur-xl

    shadow-xl

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-2xl
  "
>
  <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
<div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
          {/* Header */}

       <div
  className="
    relative

    flex
    items-center
    justify-between

    border-b
    border-slate-200
    dark:border-slate-700

    px-6
    py-5
  "
>

  <div className="flex items-center gap-4">

    <div
      className="
        flex

        h-14
        w-14

        items-center
        justify-center

        rounded-2xl

        bg-gradient-to-br
        from-orange-500
        to-orange-600

        text-2xl

        shadow-lg
        shadow-orange-500/30
      "
    >
      🤖
    </div>

    <div>

      <h3
        className="
          text-xl
          font-bold

          text-slate-900
          dark:text-white
        "
      >
        AI Recommendation
      </h3>

      <p
        className="
          mt-1

          text-sm

          text-slate-500
        "
      >
        Generated using Clutch AI
      </p>

    </div>

  </div>

  <span
    className="
      rounded-full

      bg-gradient-to-r
      from-orange-100
      to-yellow-100

      px-4
      py-2

      text-xs

      font-bold

      tracking-wider

      text-orange-600
    "
  >
    LIVE AI
  </span>

</div>

          {/* Content */}

          <div className="p-6 space-y-5">
            {/* Warning */}

            <div
              className={`
    rounded-2xl
    border-l-4
    p-5

    ${
      task.warning
        ? "border-red-500 bg-red-50 dark:bg-red-500/10"
        : "border-green-500 bg-green-50 dark:bg-green-500/10"
    }
  `}
            >
              <div className="flex gap-4">
                <div
                  className={`
        h-12
        w-12
        rounded-2xl
        flex
        items-center
        justify-center
        text-2xl
        shrink-0

        ${task.warning ? "bg-red-500/15" : "bg-green-500/15"}
      `}
                >
                  {task.warning ? "⚠️" : "✅"}
                </div>

                <div className="min-w-0">
                  <p
                    className={`
          text-xs
          font-semibold
          uppercase
          tracking-[0.15em]

          ${task.warning ? "text-red-600" : "text-green-600"}
        `}
                  >
                    {task.warning ? "Risk Detected" : "No Risk Detected"}
                  </p>

                  <p
                    className="
          mt-2
          leading-7
          break-words
          text-slate-800
          dark:text-slate-200
        "
                  >
                    {task.warning ||
                      "Great job! Clutch AI didn't detect any significant deadline risks for this task."}
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendation */}

            <div
              className="
    rounded-2xl
    border-l-4
    border-cyan-500
    bg-cyan-50
    dark:bg-cyan-500/10
    p-5
  "
            >
              <div className="flex gap-4">
                <div
                  className="
        h-12
        w-12
        rounded-2xl
        bg-cyan-500/15
        flex
        items-center
        justify-center
        text-2xl
        shrink-0
      "
                >
                  💡
                </div>

                <div className="min-w-0">
                  <p
                    className="
          text-xs
          uppercase
          tracking-[0.15em]
          font-semibold
          text-cyan-600
        "
                  >
                    AI Recommendation
                  </p>

                  <p
                    className="
          mt-2
          leading-8
          break-words
          text-slate-700
          dark:text-slate-300
        "
                  >
                    {task.recommendation ||
                      "Everything looks healthy. Continue following your current plan and maintain steady progress."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtasks */}

        {/* ================= AI Generated Subtasks ================= */}

        {task.subtasks?.length > 0 && (
          <div
            className="
      mb-8
      overflow-hidden
      rounded-3xl
      border
      border-cyan-200/40
      dark:border-cyan-500/20
      bg-gradient-to-br
      from-cyan-50
      via-white
      to-blue-50
      dark:from-slate-900
      dark:via-slate-900
      dark:to-slate-800
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-300
    "
          >
            {/* Header */}

            <div
              className="
        flex
        items-center
        justify-between
        border-b
        border-cyan-200/50
        dark:border-slate-700
        px-6
        py-4
      "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            text-2xl
            shadow-lg
          "
                >
                  📋
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    AI Generated Subtasks
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Smart breakdown generated by Clutch AI
                  </p>
                </div>
              </div>

              <div
                className="
          rounded-full
          bg-cyan-500/10
          px-4
          py-2
          text-xs
          font-semibold
          text-cyan-600
          dark:text-cyan-300
        "
              >
                {task.subtasks.length} Tasks
              </div>
            </div>

            {/* List */}

            <div className="p-6 space-y-4">
              {task.subtasks.map((subtask, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 6,
                  }}
                  className="
            group

            flex

            items-start

            gap-4

            rounded-2xl

            border

            border-slate-200

            dark:border-slate-700

            bg-white/70

            dark:bg-slate-800/60

            backdrop-blur-xl

            p-4

            transition-all

            duration-300

            hover:border-cyan-400/40

            hover:shadow-lg
          "
                >
                  {/* Number */}

                  <div
                    className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              text-sm
              font-bold
              text-white
              shadow-md
            "
                  >
                    {index + 1}
                  </div>

                  {/* Text */}

                  <div className="flex-1">
                    <p
                      className="
                leading-7
                break-words
                text-slate-800
                dark:text-slate-200
              "
                    >
                      {subtask}
                    </p>
                  </div>

                  {/* Tick */}

                  <div
                    className="
              text-emerald-500
              text-xl
              opacity-70
              group-hover:opacity-100
            "
                  >
                    ✓
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Rescue Mode */}
        {/* ================= Rescue Mode ================= */}
      
        {/* Footer */}

        {/* ================= FOOTER ================= */}

        <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-7">
          {/* Completion Probability */}

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Completion Probability
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {task.completionProbability}%
                </h3>
              </div>

              <div
                className={`
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold

          ${
            task.progress === 100
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : task.progress >= 75
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                : task.progress >= 50
                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          }
        `}
              >
                {task.progress === 100
                  ? "🎉 Completed"
                  : task.progress >= 75
                    ? "🚀 Almost Done"
                    : task.progress >= 50
                      ? "⚡ Halfway There"
                      : task.progress >= 25
                        ? "📈 Getting Started"
                        : "📝 Not Started"}
              </div>
            </div>
          </div>

          {/* Progress Slider */}

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-slate-800 dark:text-white">
                Progress
              </p>

              <p className="font-bold text-blue-600">{task.progress}%</p>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={task.progress}
              onChange={(e) =>
                onProgressUpdate(task.id, Number(e.target.value))
              }
              className="
        w-full
        accent-blue-600
        cursor-pointer
      "
            />
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onEdit(task)}
              className="
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        hover:from-cyan-400
        hover:to-blue-500

        text-white
        font-semibold

        py-3

        shadow-lg
        hover:shadow-cyan-500/30

        transition-all
        duration-300

        hover:-translate-y-1
      "
            >
              ✏ Edit Task
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="
        rounded-xl
        bg-gradient-to-r
        from-rose-500
        to-red-600
        hover:from-rose-400
        hover:to-red-500

        text-white
        font-semibold

        py-3

        shadow-lg
        hover:shadow-red-500/30

        transition-all
        duration-300

        hover:-translate-y-1
      "
            >
              🗑 Delete Task
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskCard;
