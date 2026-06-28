import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Flag,
} from "lucide-react";

function getDaysLeft(deadline) {
  if (!deadline) return "No deadline";

  const today = new Date();

  const end = new Date(deadline);

  const diff = Math.ceil(
    (end - today) / (1000 * 60 * 60 * 24)
  );

  if (diff < 0) return "Overdue";

  if (diff === 0) return "Today";

  if (diff === 1) return "Tomorrow";

  return `${diff} days left`;
}

export default function UpcomingDeadlines({
  tasks = [],
}) {

  const upcoming = [...tasks]
    .filter(task => task.deadline)
    .sort(
      (a, b) =>
        new Date(a.deadline) -
        new Date(b.deadline)
    )
    .slice(0, 5);

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/70
      dark:bg-slate-900/70
      backdrop-blur-xl
      shadow-lg
      p-7
    "
    >

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold dark:text-white">

            Upcoming Deadlines

          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">

            Stay ahead of your schedule

          </p>

        </div>

        <CalendarDays
          className="text-cyan-500"
          size={28}
        />

      </div>

      {upcoming.length === 0 ? (

        <div className="text-center py-12">

          <CalendarDays
            size={48}
            className="mx-auto text-slate-400"
          />

          <p className="mt-4 text-slate-500 dark:text-slate-400">

            No upcoming deadlines

          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {upcoming.map((task) => (

            <motion.div
              key={task.id}
              whileHover={{
                x: 6,
              }}
              className="
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              p-5
              transition-all
              hover:border-cyan-400/40
              hover:bg-cyan-500/5
            "
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="font-semibold text-lg dark:text-white">

                    {task.title}

                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                    <Clock3 size={15} />

                    {new Date(
                      task.deadline
                    ).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}

                  </div>

                  <p className="mt-2 text-sm font-medium text-cyan-500">

                    {getDaysLeft(task.deadline)}

                  </p>

                </div>

                <span
                  className={`
                  flex items-center gap-1
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold

                  ${
                    task.priority === "High"
                      ? "bg-red-500/10 text-red-500"
                      : task.priority === "Medium"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-green-500/10 text-green-500"
                  }
                `}
                >

                  <Flag size={13} />

                  {task.priority}

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </motion.div>

  );
}