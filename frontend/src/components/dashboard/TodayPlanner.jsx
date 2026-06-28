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
    <section
      className="
        overflow-hidden

        rounded-3xl

        border
        border-slate-200
        dark:border-slate-700

        bg-gradient-to-br
        from-white
        via-slate-50
        to-white

        dark:from-slate-900
        dark:via-slate-900
        dark:to-slate-800

        shadow-xl
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between

          gap-4

          border-b
          border-slate-200
          dark:border-slate-700

          px-7
          py-6
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
              from-cyan-500
              via-blue-500
              to-indigo-600

              text-2xl

              shadow-lg
            "
          >
            📅
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Today's Planner
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              AI generated schedule for maximum productivity
            </p>

          </div>

        </div>

        <div
          className="
            rounded-2xl

            bg-cyan-50
            dark:bg-cyan-500/10

            border
            border-cyan-200
            dark:border-cyan-500/20

            px-5
            py-3

            text-center
          "
        >
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-300">
            {todaySchedule.length}
          </p>

          <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Sessions
          </p>

        </div>
      </div>

      {/* Empty */}

      {todaySchedule.length === 0 ? (
        <div className="py-20 text-center">

          <div className="text-6xl">
            🧘
          </div>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
            Nothing Planned
          </h3>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Your AI planner hasn't scheduled anything for today.
          </p>

        </div>
      ) : (
        <div className="p-7 space-y-8">

          {todaySchedule.map((slot, index) => (
            <div
              key={index}
              className="
                flex
                gap-5
                items-start
              "
            >
              {/* Time */}

              <div
                className="
                  w-28
                  shrink-0

                  rounded-2xl

                  border
                  border-cyan-200
                  dark:border-cyan-500/20

                  bg-cyan-50
                  dark:bg-cyan-500/10

                  p-4

                  text-center
                "
              >
                <p className="text-lg font-bold text-cyan-600 dark:text-cyan-300">
                  {slot.start}
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {slot.end}
                </p>
              </div>

              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center

                    rounded-full

                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600

                    shadow-lg
                  "
                />

                {index !== todaySchedule.length - 1 && (
                  <div
                    className="
                      mt-1

                      w-[3px]
                      flex-1

                      min-h-[90px]

                      rounded-full

                      bg-gradient-to-b
                      from-cyan-500
                      to-cyan-200
                    "
                  />
                )}

              </div>

              {/* Session */}

              <div
                className="
                  flex-1

                  rounded-3xl

                  border
                  border-slate-200
                  dark:border-slate-700

                  bg-white
                  dark:bg-slate-800/70

                  p-6

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="flex flex-wrap items-center gap-3">

                  <span
                    className="
                      rounded-full

                      bg-blue-100
                      dark:bg-blue-500/10

                      px-3
                      py-1

                      text-xs
                      font-semibold

                      text-blue-700
                      dark:text-blue-300
                    "
                  >
                    📚 AI Session
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-green-100
                      dark:bg-green-500/10

                      px-3
                      py-1

                      text-xs
                      font-semibold

                      text-green-700
                      dark:text-green-300
                    "
                  >
                    ⏱ {slot.start} - {slot.end}
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {slot.task}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  From
                  <span className="font-semibold text-cyan-600 dark:text-cyan-300">
                    {" "}
                    {slot.taskTitle}
                  </span>
                </p>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
}