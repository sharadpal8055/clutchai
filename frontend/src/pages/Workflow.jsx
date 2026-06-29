import {
  ClipboardList,
  Brain,
  ShieldAlert,
  ListChecks,
  CalendarDays,
  Activity,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import LandingpageNavbar from "../layouts/LandingpageNavbar";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Create Task",
    color: "from-cyan-500 to-blue-600",

    description:
      "The user creates a new task by providing a title, description, deadline, and priority. This becomes the starting point of the AI pipeline.",

    prompt:
      "Task: Build Clutch AI Landing Page. Deadline: Tomorrow. Priority: High.",

    output: "Task successfully created and queued for AI analysis.",
  },

  {
    icon: Brain,
    title: "2. Gemini AI Analysis",
    color: "from-purple-500 to-indigo-600",

    description:
      "Google Gemini understands the task context, estimates complexity, predicts effort, and generates intelligent subtasks.",

    prompt:
      "Analyze this task and return priority, difficulty, estimated hours and subtasks.",

    output: `Priority: High
Difficulty: Hard
Estimated Time: 18 hrs
Subtasks:
• UI Design
• Backend APIs
• Testing`,
  },

  {
    icon: ShieldAlert,
    title: "3. Risk Prediction",
    color: "from-orange-500 to-red-600",

    description:
      "The Risk Agent calculates whether you're likely to miss the deadline using deadline proximity, workload, and progress.",

    prompt: "Predict deadline risk and assign a risk score from 0 to 10.",

    output: `Risk Score: 8.7
Status: High Risk
Recommendation:
Start immediately.`,
  },

  {
    icon: ListChecks,
    title: "4. AI Task Breakdown",
    color: "from-emerald-500 to-green-600",

    description:
      "Tasks are broken into smaller milestones, making large projects easier to complete step by step.",

    prompt: "Split the task into executable milestones.",

    output: `1. Research
2. UI Development
3. Backend
4. Testing
5. Deployment`,
  },

  {
    icon: CalendarDays,
    title: "5. Smart Schedule Creation",
    color: "from-blue-500 to-cyan-500",

    description:
      "The Planner Agent distributes work sessions across available time slots to maximize productivity.",

    prompt: "Generate an optimized schedule before the deadline.",

    output: `Today
09:00 - Research

Tomorrow
10:00 - Coding

Evening
Testing`,
  },

  {
    icon: CalendarDays,
    title: "6. Google Calendar Sync",
    color: "from-green-500 to-emerald-600",

    description:
      "Approved schedules are automatically converted into Google Calendar events using Calendar API.",

    prompt: "Create calendar events from generated schedule.",

    output: `✓ Calendar Connected
✓ 5 Events Created`,
  },

  {
    icon: Activity,
    title: "7. Progress Tracking",
    color: "from-pink-500 to-rose-600",

    description:
      "As users update progress, Clutch AI recalculates productivity metrics and continuously monitors deadline risk.",

    prompt: "Progress Updated: 65%",

    output: `Clutch Score: 82
Risk Reduced
Productivity Improving`,
  },

  {
    icon: CheckCircle2,
    title: "8. Deadline Completed",
    color: "from-cyan-500 to-indigo-600",

    description:
      "When all subtasks are completed, the task is marked as finished and analytics are updated automatically.",

    prompt: "Complete task and archive analytics.",

    output: `Task Completed
100% Progress
Calendar Updated`,
  },
];

export default function Workflow() {
  return (
    <>
      <LandingpageNavbar />
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}

        <section className="pt-36 pb-24 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-cyan-400">
              AI Productivity Pipeline
            </span>

            <h1 className="mt-8 text-6xl font-black">How Clutch AI Works</h1>

            <p className="mt-8 text-xl text-slate-400 leading-9">
              Every task goes through multiple AI agents before becoming an
              optimized execution plan.
            </p>
          </div>
        </section>

        {/* Timeline */}

        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="relative">
            {/* Vertical Line */}

            <div
              className="
            absolute
            left-1/2
            top-0
            h-full
            w-1
            bg-gradient-to-b
            from-cyan-500
            to-blue-700
            hidden
            lg:block
          "
            />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`
                relative
                mb-24
                flex
                flex-col
                lg:flex-row
                ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}
                items-center
                gap-12
                `}
                >
                  {/* Card */}

                  <div
                    className="
                  lg:w-5/12
                  
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-500/40
                  hover:shadow-2xl
                  hover:shadow-cyan-500/20
                "
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center`}
                    >
                      <Icon size={30} />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold">{step.title}</h2>

                    <p className="mt-6 text-slate-400 leading-8">
                      {step.description}
                    </p>

                    {/* Prompt */}

                    <div className="mt-8">
                      <p className="font-semibold text-cyan-400">AI Prompt</p>

                      <div className="mt-3 rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-sm whitespace-pre-wrap">
                        {step.prompt}
                      </div>
                    </div>

                    {/* Output */}

                    <div className="mt-6">
                      <p className="font-semibold text-green-400">AI Output</p>

                      <div className="mt-3 rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-sm whitespace-pre-wrap">
                        {step.output}
                      </div>
                    </div>
                  </div>

                  {/* Illustration */}

                  <div className="lg:w-5/12">
                    <img
                      src={`/workflow/step-${index + 1}.png`}
                      alt={step.title}
                        className="
      h-full
      w-full
      object-cover
      rounded-3xl
      border
      border-cyan-500/20
      shadow-2xl
      transition
      duration-500
      hover:scale-[1.02]
   "
                    />
                  </div>

                  {/* Timeline Dot */}

                  <div
                    className={`
                  hidden
                  lg:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-16
                  h-16
                  rounded-full
                  bg-gradient-to-r
                  ${step.color}
                  items-center
                  justify-center
                  shadow-xl
                  `}
                  >
                    <ArrowRight />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}

        <section className="py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-16 text-center">
              <h2 className="text-5xl font-black">
                Experience the Complete AI Workflow
              </h2>

              <p className="mt-6 text-xl text-slate-300">
                From task creation to successful completion, Clutch AI
                intelligently guides every step.
              </p>

              <a
                href="/login"
                className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold hover:scale-105 transition"
              >
                Try Clutch AI
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
