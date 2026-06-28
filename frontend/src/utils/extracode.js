  <div>

        {task.rescuePlan && (
          <section
            className="
      mb-8
      w-full
      overflow-hidden
      rounded-3xl

      border
      border-red-500/20

      bg-gradient-to-br
      from-red-50
      via-white
      to-orange-50

      dark:from-slate-900
      dark:via-slate-900
      dark:to-slate-800

      shadow-lg

      transition-all
      duration-300
    "
          >
            {/* Header */}

            <div
              className="
        flex
        flex-col
        gap-3

        sm:flex-row
        sm:items-center
        sm:justify-between

        border-b
        border-red-200/50
        dark:border-slate-700

        px-5
        py-4
      "
            >
              <div className="min-w-0">
                <h3
                  className="
            text-lg
            sm:text-xl
            font-bold
            text-slate-900
            dark:text-white
          "
                >
                  🚨 AI Rescue Mode
                </h3>

                <p
                  className="
            mt-1
            text-sm
            text-slate-500
            dark:text-slate-400
          "
                >
                  Intelligent recovery plan generated for this task
                </p>
              </div>

              <div
                className="
          self-start
          sm:self-auto

          rounded-full

          bg-red-500/10

          px-4
          py-2

          text-xs
          font-semibold

          uppercase
          tracking-wider

          text-red-600
        "
              >
                Active Rescue
              </div>
            </div>

            {/* Card */}

            <div
              className="
        w-full

        overflow-x-hidden

        px-3
        py-5

        sm:px-5
        lg:px-6
      "
            >
              <RescueModeCard rescuePlan={task.rescuePlan} />
            </div>
          </section>
        )}
        {task.planner && <PlannerTimeline planner={task.planner} />}
        </div>