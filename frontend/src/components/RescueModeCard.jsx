import { motion } from "framer-motion";

function Section({ icon, title, items, color }) {
  if (!items?.length) return null;

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white/70
        dark:bg-slate-800/60
        backdrop-blur-xl
        p-5
      "
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`
            h-11
            w-11
            rounded-xl
            flex
            items-center
            justify-center
            text-xl

            ${
              color === "red"
                ? "bg-red-500/15"
                : color === "yellow"
                ? "bg-yellow-500/15"
                : "bg-cyan-500/15"
            }
          `}
        >
          {icon}
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              x: 6,
              scale: 1.01,
            }}
            className="
              flex
              items-start
              gap-4

              rounded-xl

              border

              border-slate-200
              dark:border-slate-700

              bg-slate-50
              dark:bg-slate-900/60

              p-4

              transition-all
              duration-300
            "
          >
            <div
              className="
                h-8
                w-8
                shrink-0
                rounded-full
                bg-gradient-to-br
                from-cyan-500
                to-blue-600
                flex
                items-center
                justify-center
                text-sm
                font-bold
                text-white
              "
            >
              {index + 1}
            </div>

            <p
              className="
                break-words
                leading-7
                text-slate-700
                dark:text-slate-300
              "
            >
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RescueModeCard({ rescuePlan }) {
  if (!rescuePlan) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        rounded-3xl
        overflow-hidden

        border
        border-red-500/20

        bg-gradient-to-br
        from-red-50
        via-white
        to-orange-50

        dark:from-slate-900
        dark:via-slate-900
        dark:to-slate-800

        shadow-xl
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-red-200/40
          dark:border-slate-700

          px-6
          py-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5

            md:flex-row
            md:items-center
            md:justify-between
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
                from-red-500
                to-orange-500

                text-3xl
                shadow-lg
              "
            >
              🚨
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rescue Mode Activated
              </h2>

              <p className="mt-1 text-slate-500 dark:text-slate-400">
                High risk detected. Follow this AI recovery strategy.
              </p>
            </div>
          </div>

          <div
            className="
              self-start
              md:self-auto

              rounded-full

              bg-red-500/10

              px-4
              py-2

              text-sm
              font-semibold

              text-red-600
            "
          >
            Emergency Plan
          </div>
        </div>
      </div>

      {/* Sections */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
          p-6
        "
      >
        <Section
          icon="📅"
          title="Today's Mission"
          items={rescuePlan.today}
          color="cyan"
        />

        <Section
          icon="🌅"
          title="Tomorrow"
          items={rescuePlan.tomorrow}
          color="cyan"
        />

        <div className="xl:col-span-2">
          <Section
            icon="⚠"
            title="Critical Actions"
            items={rescuePlan.criticalActions}
            color="yellow"
          />
        </div>
      </div>

      {/* Motivation */}

      <div className="px-6 pb-6">
        <div
          className="
            rounded-2xl

            border
            border-green-500/20

            bg-gradient-to-r
            from-green-500/10
            to-emerald-500/10

            p-5
          "
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
                AI Motivation
              </p>

              <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                {rescuePlan.motivation ||
                  "Stay consistent. Small focused sessions today will prevent deadline pressure tomorrow."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RescueModeCard;