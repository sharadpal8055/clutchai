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
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
  className="
    relative
    overflow-hidden

    rounded-[32px]

    border
    border-red-200
    dark:border-red-500/20

    bg-white
    dark:bg-slate-900

    shadow-[0_15px_40px_rgba(0,0,0,0.08)]
    dark:shadow-[0_15px_40px_rgba(0,0,0,0.45)]

    transition-all
  "
>
  <div
className="
absolute
top-0
right-0

h-72
w-72

rounded-full

bg-gradient-to-br
from-red-400/20
to-orange-400/10

blur-3xl
pointer-events-none
"
/>

<div
className="
absolute
bottom-0
left-0

h-64
w-64

rounded-full

bg-cyan-400/10

blur-3xl
pointer-events-none
"
/>
      {/* Header */}

    <div
className="
relative

flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between

gap-8

px-8
py-8

border-b
border-slate-200
dark:border-slate-800
"
>

<div className="flex items-center gap-5">

<div
className="
flex
h-20
w-20
items-center
justify-center

rounded-3xl

bg-gradient-to-br
from-red-500
via-orange-500
to-pink-600

text-4xl

shadow-xl
shadow-red-500/30
"
>
🚨
</div>

<div>

<div className="flex items-center gap-3 flex-wrap">

<h2
className="
text-3xl
font-black
tracking-tight

text-slate-900
dark:text-white
"
>
Rescue Mode
</h2>

<div
className="
rounded-full

bg-red-100
dark:bg-red-500/10

px-3
py-1

text-xs
font-bold

uppercase
tracking-widest

text-red-600
dark:text-red-300
"
>

LIVE

</div>

</div>

<p
className="
mt-3

max-w-2xl

leading-7

text-slate-600
dark:text-slate-400
"
>

AI has detected that this task is unlikely to finish before the deadline.
Follow the recovery strategy below to maximize your success probability.

</p>

</div>

</div>

<div
className="
grid
grid-cols-2
gap-4
"
>

<div
className="
rounded-2xl

border
border-red-200
dark:border-red-500/20

bg-red-50
dark:bg-red-500/10

px-6
py-4

text-center
"
>

<p className="text-sm text-slate-500">

Status

</p>

<p
className="
mt-2

font-bold

text-red-600
dark:text-red-300
"
>

Emergency

</p>

</div>

<div
className="
rounded-2xl

border
border-cyan-200
dark:border-cyan-500/20

bg-cyan-50
dark:bg-cyan-500/10

px-6
py-4

text-center
"
>

<p className="text-sm text-slate-500">

Powered By

</p>

<p
className="
mt-2

font-bold

text-cyan-600
dark:text-cyan-300
"
>

Gemini AI

</p>

</div>

</div>

</div>

      {/* Sections */}
      <motion.div

initial={{
    opacity:0,
    y:25
}}

animate={{
    opacity:1,
    y:0
}}

transition={{
    duration:.45
}}

className="space-y-8"

>

<div
  className="
    px-8
    py-8

    bg-slate-50
    dark:bg-slate-900/40

    border-y
    border-slate-200
    dark:border-slate-700
  "
>
<div className="mb-6 flex items-center justify-between">

    <div>

        <p className="text-xs uppercase tracking-[0.25em] text-cyan-600 font-bold">

            AI GENERATED STRATEGY

        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">

            Step-by-Step Recovery Plan

        </h3>

    </div>

    <div
        className="
        rounded-full
        bg-cyan-100
        dark:bg-cyan-500/20

        px-4
        py-2

        text-sm
        font-semibold

        text-cyan-700
        dark:text-cyan-300
        "
    >
        {rescuePlan.today.length +
            rescuePlan.tomorrow.length +
            rescuePlan.criticalActions.length} Actions
    </div>

</div>
  {/* Top Row */}

  <div className="grid lg:grid-cols-2 gap-8">

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

  </div>

  {/* Bottom */}

  <Section
    icon="⚠"
    title="Critical Actions"
    items={rescuePlan.criticalActions}
    color="yellow"
  />

</div>
</motion.div>


      {/* Motivation */}

    <div
className="
mx-8
mb-8

rounded-3xl

border
border-green-200
dark:border-green-500/20

bg-gradient-to-r
from-green-50
via-emerald-50
to-green-100

dark:from-green-500/10
dark:via-green-400/10
dark:to-emerald-500/10

p-6
"
>

<div className="flex gap-5">

<div
className="
flex
h-14
w-14
items-center
justify-center

rounded-2xl

bg-green-500

text-2xl

text-white

shadow-lg
"
>
💡
</div>

<div>

<h3
className="
font-bold
text-lg

text-green-700
dark:text-green-300
"
>

AI Motivation

</h3>

<p
className="
mt-3

leading-8

text-slate-700
dark:text-slate-300
"
>

{rescuePlan.motivation ||
"Stay focused. Completing the most critical work first will dramatically improve your chances of meeting the deadline."}

</p>

</div>

</div>

</div>
    </motion.div>
  );
}

export default RescueModeCard;