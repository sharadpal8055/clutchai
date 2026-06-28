import { motion } from "framer-motion";

function InsightCard({
  icon,
  title,
  text,
  color,
  gradient,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-slate-200
        dark:border-slate-700

        bg-white
        dark:bg-slate-900/70

        shadow-lg

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition

          ${gradient}
        `}
      />

      <div className="relative p-6">

        <div className="flex items-start justify-between">

          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              text-3xl

              ${color}
            `}
          >
            {icon}
          </div>

          <span
            className="
              rounded-full

              bg-slate-100
              dark:bg-slate-800

              px-3
              py-1

              text-[11px]
              font-semibold

              uppercase

              tracking-wider

              text-slate-500
            "
          >
            AI
          </span>

        </div>

        <h3
          className="
            mt-5

            text-xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4

            leading-8

            text-slate-600
            dark:text-slate-300
          "
        >
          {text || "No insights available yet."}
        </p>

      </div>
    </motion.div>
  );
}

export default function AIInsights({
    insights,
}) {
if (!insights) {
  return (
    <section
      className="
        mt-8

        rounded-3xl

        border
        border-slate-200
        dark:border-slate-700

        bg-white
        dark:bg-slate-900

        shadow-xl

        py-20
      "
    >
      <div className="text-center">

        <div className="text-7xl">
          🤖
        </div>

        <h2
          className="
            mt-5

            text-3xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          AI Insights
        </h2>

        <p
          className="
            mt-3

            text-slate-500
            dark:text-slate-400
          "
        >
          Complete more tasks to unlock personalized AI insights.
        </p>

      </div>
    </section>
  );
}

    return (

     <section
  className="
    mt-8

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
      md:flex-row
      md:items-center
      md:justify-between

      gap-5

      border-b
      border-slate-200
      dark:border-slate-700

      px-8
      py-7
    "
  >

    <div className="flex items-center gap-5">

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-violet-500
          via-fuchsia-500
          to-pink-500

          text-3xl

          shadow-lg
        "
      >
        🧠
      </div>

      <div>

        <h2
          className="
            text-3xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          AI Insights
        </h2>

        <p
          className="
            mt-1

            text-slate-500
            dark:text-slate-400
          "
        >
          Personalized productivity intelligence powered by Clutch AI
        </p>

      </div>

    </div>

    <div
      className="
        rounded-2xl

        bg-violet-50
        dark:bg-violet-500/10

        border
        border-violet-200
        dark:border-violet-500/20

        px-5
        py-3
      "
    >
      <p
        className="
          text-xl
          font-bold

          text-violet-600
          dark:text-violet-300
        "
      >
        5
      </p>

      <p
        className="
          text-xs
          uppercase

          tracking-widest

          text-slate-500
        "
      >
        Insights
      </p>

    </div>

  </div>

  {/* Cards */}

  <div
    className="
      grid

      gap-6

      p-7

      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
    "
  >

    <InsightCard
      icon="📈"
      title="Productivity"
      text={insights.productivity}
      color="bg-blue-100 dark:bg-blue-500/20"
      gradient="bg-gradient-to-br from-blue-500/5 to-transparent"
    />

    <InsightCard
      icon="⚠️"
      title="Workload Alert"
      text={insights.workload}
      color="bg-red-100 dark:bg-red-500/20"
      gradient="bg-gradient-to-br from-red-500/5 to-transparent"
    />

    <InsightCard
      icon="🔥"
      title="Recommendation"
      text={insights.recommendation}
      color="bg-orange-100 dark:bg-orange-500/20"
      gradient="bg-gradient-to-br from-orange-500/5 to-transparent"
    />

    <InsightCard
      icon="🧠"
      title="AI Suggestion"
      text={insights.suggestion}
      color="bg-purple-100 dark:bg-purple-500/20"
      gradient="bg-gradient-to-br from-purple-500/5 to-transparent"
    />

    <InsightCard
      icon="🎯"
      title="Focus of the Day"
      text={insights.focus}
      color="bg-green-100 dark:bg-green-500/20"
      gradient="bg-gradient-to-br from-green-500/5 to-transparent"
    />

  </div>

</section>

    );

}