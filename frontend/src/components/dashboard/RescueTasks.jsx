import { motion } from "framer-motion";

export default function RescueTasks({ tasks = [] }) {
  const rescueTasks = tasks.filter((task) => task.rescuePlan);

  return (
  <section
  className="
    overflow-hidden
    rounded-3xl

    border
    border-red-200

    bg-gradient-to-br
    from-red-50
    via-white
    to-orange-50

    shadow-xl
    transition-all
    duration-500

    dark:border-red-500/20
    dark:from-slate-900
    dark:via-slate-900
    dark:to-slate-950
  "
>
      {/* HEADER */}

{/* Header */}

<div
  className="
    relative
    overflow-hidden

    border-b
    border-red-200
    dark:border-red-500/20

    bg-gradient-to-r
    from-red-50
    via-white
    to-orange-50

    dark:from-red-500/10
    dark:via-slate-900
    dark:to-slate-950

    px-6
    py-7
    sm:px-8
  "
>
  {/* Glow */}

  <div
    className="
      absolute
      -right-20
      -top-20

      h-56
      w-56

      rounded-full

      bg-red-300/30
      blur-3xl

      dark:bg-red-500/10
    "
  />

  <div
    className="
      relative

      flex
      flex-col
      gap-6

      lg:flex-row
      lg:items-center
      lg:justify-between
    "
  >
    {/* Left */}

    <div className="flex items-center gap-5">
      <div
        className="
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-red-500
          via-orange-500
          to-red-600

          text-3xl

          shadow-xl
          shadow-red-500/30
        "
      >
        🚨
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight

              text-slate-900
              dark:text-white
            "
          >
            AI Rescue Center
          </h2>

          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-red-100
              px-3
              py-1

              text-xs
              font-semibold
              uppercase
              tracking-widest

              text-red-700

              dark:bg-red-500/15
              dark:text-red-300
            "
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

            Live Monitoring
          </span>
        </div>

        <p
          className="
            mt-2
            max-w-2xl
            text-sm
            leading-6

            text-slate-600
            dark:text-slate-400
          "
        >
          AI continuously monitors deadlines and instantly generates intelligent
          rescue plans whenever a task is predicted to miss its deadline.
        </p>
      </div>
    </div>

    {/* Right */}

    <div className="flex flex-wrap gap-3">
      <div
        className="
          rounded-2xl

          border
          border-red-200

          bg-white

          px-6
          py-3

          text-center

          shadow-sm

          dark:border-red-500/20
          dark:bg-red-500/10
        "
      >
        <p
          className="
            text-2xl
            font-bold

            text-red-600
            dark:text-red-300
          "
        >
          {rescueTasks.length}
        </p>

        <p
          className="
            text-xs
            uppercase
            tracking-wider

            text-slate-500
            dark:text-slate-400
          "
        >
          Active Rescue
        </p>
      </div>

      <div
        className="
          rounded-2xl

          border
          border-yellow-200

          bg-white

          px-6
          py-3

          text-center

          shadow-sm

          dark:border-yellow-500/20
          dark:bg-yellow-500/10
        "
      >
        <p
          className="
            text-xl
            font-bold

            text-yellow-600
            dark:text-yellow-300
          "
        >
          HIGH
        </p>

        <p
          className="
            text-xs
            uppercase
            tracking-wider

            text-slate-500
            dark:text-slate-400
          "
        >
          Priority
        </p>
      </div>
    </div>
  </div>
</div>

      {/* EMPTY */}

      {rescueTasks.length === 0 ? (
        <div className="py-20 text-center">
          <div className="text-6xl">🎉</div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            No Rescue Tasks
          </h3>

          <p className="mt-2 text-slate-400">
            Your workload is under control.
          </p>
        </div>
      ) : (
        <div className="space-y-6 p-6">
          {rescueTasks.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.25,
              }}
           className="
group

overflow-hidden

rounded-[28px]

border
border-slate-200

bg-white

shadow-lg

transition-all
duration-300

hover:-translate-y-1
hover:shadow-2xl
hover:border-red-300

dark:border-red-500/20
dark:bg-slate-900/80
dark:hover:border-red-400/40
dark:hover:shadow-red-500/20
"
            >
              {/* CARD HEADER */}

              <div className="p-6">
               <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">

  {/* Left Section */}

  <div className="flex-1 min-w-0">

    <div className="flex flex-wrap items-center gap-3">

      <span
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-red-200
          dark:border-red-500/20

          bg-red-50
          dark:bg-red-500/10

          px-4
          py-1.5

          text-xs
          font-semibold
          uppercase
          tracking-wider

          text-red-600
          dark:text-red-300
        "
      >
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

        Emergency Mode
      </span>

    </div>

    <h3
      className="
        mt-4

        break-words

        text-2xl
        sm:text-3xl

        font-bold

        text-slate-900
        dark:text-white
      "
    >
      {task.title}
    </h3>

    <div className="mt-5 flex flex-wrap gap-3">

      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-xl

          border
          border-blue-200
          dark:border-blue-500/20

          bg-blue-50
          dark:bg-blue-500/10

          px-4
          py-2

          text-sm
          font-medium

          text-blue-700
          dark:text-blue-300
        "
      >
        📅
        {task.deadline}
      </div>

    </div>

  </div>

  {/* Right Metrics */}

  <div
    className="
      grid
      grid-cols-2
      gap-3

      w-full
      sm:w-auto

      xl:min-w-[230px]
    "
  >

    {/* Risk */}

    <div
      className="
        rounded-2xl

        border
        border-red-200
        dark:border-red-500/20

        bg-red-50
        dark:bg-red-500/10

        px-5
        py-4

        text-center
      "
    >
      <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Risk
      </p>

      <p className="mt-2 text-2xl font-black text-red-600 dark:text-red-300">
        {task.riskScore}%
      </p>
    </div>

    {/* Clutch Score */}

    <div
      className="
        rounded-2xl

        border
        border-orange-200
        dark:border-orange-500/20

        bg-orange-50
        dark:bg-orange-500/10

        px-5
        py-4

        text-center
      "
    >
      <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Clutch
      </p>

      <p className="mt-2 text-2xl font-black text-orange-600 dark:text-orange-300">
        {task.clutchScore}
      </p>
    </div>

  </div>

</div>

                {/* WARNING */}

       <div className="mt-7 grid grid-cols-1 xl:grid-cols-2 gap-5">

  {/* AI Warning */}

  <div
    className="
      group

      overflow-hidden

      rounded-3xl

      border
      border-red-200
      dark:border-red-500/20

      bg-gradient-to-br
      from-red-50
      via-white
      to-red-50

      dark:from-red-500/10
      dark:via-slate-900
      dark:to-slate-900

      shadow-sm
      hover:shadow-lg

      transition-all
      duration-300
    "
  >
    <div className="p-6">

      <div className="flex items-start gap-4">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br
            from-red-500
            to-rose-600

            text-2xl

            shadow-lg
          "
        >
          ⚠️
        </div>

        <div className="min-w-0 flex-1">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-300">
            AI Warning
          </p>

          <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            Risk Assessment
          </h4>

          <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
            {task.warning?.trim()
              ? task.warning
              : "No significant risk detected. Your task is currently progressing as expected."}
          </p>

        </div>

      </div>

    </div>
  </div>

  {/* AI Recommendation */}

  <div
    className="
      group

      overflow-hidden

      rounded-3xl

      border
      border-cyan-200
      dark:border-cyan-500/20

      bg-gradient-to-br
      from-cyan-50
      via-white
      to-blue-50

      dark:from-cyan-500/10
      dark:via-slate-900
      dark:to-slate-900

      shadow-sm
      hover:shadow-lg

      transition-all
      duration-300
    "
  >
    <div className="p-6">

      <div className="flex items-start gap-4">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
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
          🤖
        </div>

        <div className="min-w-0 flex-1">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
            AI Recommendation
          </p>

          <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            Suggested Action
          </h4>

          <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
            {task.recommendation?.trim()
              ? task.recommendation
              : "Everything looks good. Continue making steady progress to maintain your completion probability."}
          </p>

        </div>

      </div>

    </div>
  </div>

</div>
                {/* SCORE */}

           <div
  className="
    mt-8

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

    shadow-sm

    p-6
  "
>

  {/* Header */}

  <div className="flex items-center justify-between">

    <div>

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-cyan-600
          dark:text-cyan-300
        "
      >
        Performance
      </p>

      <h3
        className="
          mt-1
          text-xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        🎯 Clutch Score
      </h3>

    </div>

    <div
      className={`
        flex
        h-20
        w-20
        items-center
        justify-center

        rounded-full

        border-4

        shadow-lg

        ${
          task.clutchScore >= 80
            ? "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400"
            : task.clutchScore >= 50
            ? "border-yellow-500 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
            : "border-red-500 bg-red-500/10 text-red-600 dark:text-red-400"
        }
      `}
    >
      <div className="text-center">

        <p className="text-2xl font-black">
          {task.clutchScore}
        </p>

        <p className="text-[10px] uppercase tracking-wider">
          /100
        </p>

      </div>

    </div>

  </div>

  {/* Progress */}

  <div className="mt-6">

    <div className="flex justify-between mb-3">

      <span className="font-medium text-slate-600 dark:text-slate-300">
        Overall Performance
      </span>

      <span
        className={`
          font-bold

          ${
            task.clutchScore >= 80
              ? "text-green-600 dark:text-green-400"
              : task.clutchScore >= 50
              ? "text-yellow-600 dark:text-yellow-400"
              : "text-red-600 dark:text-red-400"
          }
        `}
      >
        {task.clutchScore >= 80
          ? "Excellent"
          : task.clutchScore >= 50
          ? "Average"
          : "Needs Improvement"}
      </span>

    </div>

    <div
      className="
        h-4

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
          duration: 1,
          ease: "easeOut",
        }}
        className={`

          h-full

          rounded-full

          ${
            task.clutchScore >= 80
              ? "bg-gradient-to-r from-green-500 via-emerald-500 to-green-600"
              : task.clutchScore >= 50
              ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500"
              : "bg-gradient-to-r from-red-500 via-rose-500 to-red-600"
          }

        `}
      />

    </div>

  </div>

  {/* Footer */}

  <div
    className="
      mt-5

      rounded-2xl

      border
      border-slate-200
      dark:border-slate-700

      bg-slate-50
      dark:bg-slate-800/60

      px-4
      py-3

      text-sm

      text-slate-600
      dark:text-slate-300
    "
  >
    {task.clutchScore >= 80
      ? "🚀 Outstanding progress! You're highly likely to finish this task successfully."
      : task.clutchScore >= 50
      ? "⚡ Good progress. Stay consistent to keep your completion probability high."
      : "🔥 Your score is low. Follow the AI recommendations and Rescue Plan to improve your chances."}
  </div>

</div>


                {/* RESCUE PLAN */}

              <details
  className="
    group
    mt-8

    overflow-hidden

    rounded-3xl

    border
    border-slate-200
    dark:border-slate-700

    bg-white
    dark:bg-slate-900/60

    shadow-sm

    transition-all
    duration-300
  "
>
  {/* Accordion Header */}

  <summary
    className="
      flex
      items-center
      justify-between

      gap-4

      cursor-pointer
      list-none

      px-6
      py-5

      hover:bg-slate-50
      dark:hover:bg-slate-800/60

      transition-all
      duration-300
    "
  >
    <div className="flex items-center gap-4">

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
          via-blue-500
          to-indigo-600

          text-2xl

          shadow-lg
        "
      >
        📋
      </div>

      <div>

        <h4
          className="
            text-lg
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          AI Rescue Plan
        </h4>

        <p
          className="
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          Step-by-step recovery strategy generated by Clutch AI
        </p>

      </div>

    </div>

    <div
      className="
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-full

        bg-slate-100
        dark:bg-slate-800

        text-xl
        text-slate-600
        dark:text-slate-300

        transition-transform
        duration-300

        group-open:rotate-180
      "
    >
      ⌄
    </div>
  </summary>

  {/* Divider */}

  <div className="border-t border-slate-200 dark:border-slate-700" />

  {/* Content */}

  <div className="space-y-8 p-6">

    <div
      className="
        grid
        gap-6

        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      <PlanCard
        title="Today's Mission"
        emoji="📅"
        items={task.rescuePlan.today}
      />

      <PlanCard
        title="Tomorrow"
        emoji="🌅"
        items={task.rescuePlan.tomorrow}
      />

      <PlanCard
        title="Critical Actions"
        emoji="⚠"
        items={task.rescuePlan.criticalActions}
      />
    </div>

    {/* Motivation */}

    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-green-200
        dark:border-green-500/20

        bg-gradient-to-r
        from-green-50
        via-emerald-50
        to-green-100

        dark:from-green-500/10
        dark:via-emerald-500/10
        dark:to-green-500/5

        p-6
      "
    >
      <div
        className="
          absolute
          -right-10
          -top-10

          h-32
          w-32

          rounded-full

          bg-green-400/10

          blur-3xl
        "
      />

      <div className="relative flex items-start gap-4">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br
            from-green-500
            to-emerald-600

            text-2xl

            shadow-lg
          "
        >
          💡
        </div>

        <div className="flex-1">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]

              text-green-700
              dark:text-green-300
            "
          >
            AI Motivation
          </p>

          <p
            className="
              mt-3

              leading-8

              text-slate-700
              dark:text-green-100
            "
          >
            {task.rescuePlan.motivation ||
              "Stay focused. Completing a few high-impact tasks today will significantly improve your chances of meeting the deadline."}
          </p>

        </div>

      </div>
    </div>

  </div>
</details>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

function PlanCard({ title, emoji, items = [] }) {
  return (
    <div
      className="
        h-full

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

        shadow-md

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4

          border-b
          border-slate-200
          dark:border-slate-700

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
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
          {emoji}
        </div>

        <div className="min-w-0">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]

              text-cyan-600
              dark:text-cyan-300
            "
          >
            Rescue Plan
          </p>

          <h3
            className="
              mt-1

              break-words

              text-xl
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            {title}
          </h3>

        </div>
      </div>

      {/* Tasks */}

      <div className="space-y-4 p-6">

        {items?.length ? (
          items.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-4

                rounded-2xl

                border
                border-slate-200
                dark:border-slate-700

                bg-slate-50
                dark:bg-slate-800/70

                p-4

                transition-all
                duration-300

                hover:border-cyan-400
                hover:shadow-md
              "
            >
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

              <p
                className="
                  flex-1

                  break-words

                  leading-7

                  text-slate-700
                  dark:text-slate-300
                "
              >
                {item}
              </p>
            </div>
          ))
        ) : (
          <div
            className="
              rounded-2xl

              border
              border-dashed
              border-slate-300
              dark:border-slate-700

              bg-slate-50
              dark:bg-slate-800/50

              py-10
              px-6

              text-center
            "
          >
            <div className="text-4xl">✅</div>

            <p
              className="
                mt-3

                text-sm

                text-slate-500
                dark:text-slate-400
              "
            >
              No actions required.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}