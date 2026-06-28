import { motion } from "framer-motion";
import {
  ClipboardList,
  CheckCircle2,
  TriangleAlert,
  ShieldAlert,
} from "lucide-react";

function Card({
  title,
  value,
  icon,
  color,
  bg,
  border,
  subtitle,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        ${border}
        bg-white/70
        dark:bg-slate-900/70
        backdrop-blur-xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        p-6
      `}
    >
      {/* Glow */}

      <div
        className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          ${bg}
        `}
      />

      <div className="relative z-10">

        <div className="flex items-start justify-between">

          <div
            className={`
              h-14
              w-14
              rounded-2xl
              flex
              items-center
              justify-center
              ${bg}
            `}
          >
            {icon}
          </div>

          <span
            className={`
              text-4xl
              font-black
              ${color}
            `}
          >
            {value ?? 0}
          </span>

        </div>

        <div className="mt-6">

          <h3 className="font-semibold text-lg dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default function StatsCards({ stats }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-8">

      <Card
        title="Total Tasks"
        value={stats?.totalTasks}
        subtitle="Active workload"
        icon={
          <ClipboardList
            size={28}
            className="text-blue-500"
          />
        }
        color="text-blue-500"
        bg="bg-blue-500/10"
        border="border-blue-500/20"
      />

      <Card
        title="Completed"
        value={stats?.completed}
        subtitle="Successfully finished"
        icon={
          <CheckCircle2
            size={28}
            className="text-green-500"
          />
        }
        color="text-green-500"
        bg="bg-green-500/10"
        border="border-green-500/20"
      />

      <Card
        title="High Risk"
        value={stats?.highRisk}
        subtitle="Need attention"
        icon={
          <TriangleAlert
            size={28}
            className="text-red-500"
          />
        }
        color="text-red-500"
        bg="bg-red-500/10"
        border="border-red-500/20"
      />

      <Card
        title="Rescue Mode"
        value={stats?.rescueMode}
        subtitle="AI intervention"
        icon={
          <ShieldAlert
            size={28}
            className="text-orange-500"
          />
        }
        color="text-orange-500"
        bg="bg-orange-500/10"
        border="border-orange-500/20"
      />

    </div>
  );
}