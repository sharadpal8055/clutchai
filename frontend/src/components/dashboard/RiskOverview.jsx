import { motion } from "framer-motion";
import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Activity,
} from "lucide-react";

function ProgressBar({
  label,
  value,
  total,
  color,
  icon,
}) {
  const percentage =
    total === 0
      ? 0
      : Math.round((value / total) * 100);

  return (
    <div className="space-y-2">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className={`h-10 w-10 rounded-xl flex items-center justify-center ${color.bg}`}
          >
            {icon}
          </div>

          <div>

            <p className="font-semibold dark:text-white">
              {label}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {value} Task{value !== 1 ? "s" : ""}
            </p>

          </div>

        </div>

        <span
          className={`font-bold ${color.text}`}
        >
          {percentage}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 0.8,
          }}
          className={`h-full rounded-full ${color.fill}`}
        />

      </div>

    </div>
  );
}

export default function RiskOverview({
  tasks = [],
}) {

  const low =
    tasks.filter(
      t => t.riskScore < 40
    ).length;

  const medium =
    tasks.filter(
      t =>
        t.riskScore >= 40 &&
        t.riskScore < 80
    ).length;

  const high =
    tasks.filter(
      t => t.riskScore >= 80
    ).length;

  const health =
    tasks.length === 0
      ? 100
      : Math.max(
          0,
          Math.round(
            ((low * 100) +
              (medium * 50)) /
              tasks.length
          )
        );

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

            Risk Overview

          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">

            Distribution of task risk

          </p>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">

            Overall Health

          </p>

          <h3 className="text-3xl font-black text-cyan-500">

            {health}%

          </h3>

        </div>

      </div>

      <div className="space-y-8">

        <ProgressBar
          label="Low Risk"
          value={low}
          total={tasks.length}
          icon={
            <ShieldCheck
              size={22}
              className="text-green-500"
            />
          }
          color={{
            bg: "bg-green-500/10",
            fill: "bg-green-500",
            text: "text-green-500",
          }}
        />

        <ProgressBar
          label="Medium Risk"
          value={medium}
          total={tasks.length}
          icon={
            <Activity
              size={22}
              className="text-yellow-500"
            />
          }
          color={{
            bg: "bg-yellow-500/10",
            fill: "bg-yellow-500",
            text: "text-yellow-500",
          }}
        />

        <ProgressBar
          label="High Risk"
          value={high}
          total={tasks.length}
          icon={
            <ShieldAlert
              size={22}
              className="text-red-500"
            />
          }
          color={{
            bg: "bg-red-500/10",
            fill: "bg-red-500",
            text: "text-red-500",
          }}
        />

      </div>

    </motion.div>

  );
}