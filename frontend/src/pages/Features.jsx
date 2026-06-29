import { Link } from "react-router-dom";
import {
  Brain,
  CalendarDays,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Clock3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import LandingpageNavbar from "../layouts/LandingpageNavbar";

const features = [
  {
    icon: Brain,
    title: "AI Task Analysis",
    description:
      "Gemini AI analyzes every task to understand complexity, urgency, estimated effort and execution strategy.",
  },
  {
    icon: Sparkles,
    title: "Smart Prioritization",
    description:
      "Automatically ranks tasks based on deadlines, importance, workload and risk level.",
  },
  {
    icon: Clock3,
    title: "Deadline Prediction",
    description:
      "Predicts whether you're likely to miss a deadline before it actually happens.",
  },
  {
    icon: ShieldCheck,
    title: "AI Rescue Mode",
    description:
      "Generates emergency recovery plans whenever a deadline becomes critical.",
  },
  {
    icon: CalendarDays,
    title: "Google Calendar Sync",
    description:
      "Automatically creates calendar events from AI-generated schedules.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Monitor productivity, completion rates, risk trends and overall Clutch Score.",
  },
];
export default function Features() {
  return (<>
  <LandingpageNavbar/>
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-400">
            ✨ Everything you need to stay ahead
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">

            Powerful AI Features
            <br />

            Built For Productivity

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400 leading-9">

            Clutch AI combines Google Gemini,
            intelligent planning,
            risk prediction,
            calendar automation,
            and productivity analytics
            into one seamless workspace.

          </p>

          <Link
            to="/login"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold transition hover:scale-105"
          >
            Try Clutch AI

            <ArrowRight />

          </Link>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:shadow-2xl
                hover:shadow-cyan-500/20
              "
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">

                  <Icon className="h-8 w-8" />

                </div>

                <h2 className="mt-8 text-2xl font-bold">

                  {feature.title}

                </h2>

                <p className="mt-5 leading-8 text-slate-400">

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </section>

      {/* AI WORKFLOW */}

      <section className="bg-slate-900/40 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-black">

              AI Planning Pipeline

            </h2>

            <p className="mt-6 text-slate-400 text-xl">

              Every task passes through multiple AI agents before becoming an executable plan.

            </p>

          </div>

          <div className="grid lg:grid-cols-5 gap-8 mt-20">

            {[
              "Create Task",
              "Analyze",
              "Predict Risk",
              "Generate Plan",
              "Sync Calendar",
            ].map((step, i) => (

              <div
                key={i}
                className="text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl font-black">

                  {i + 1}

                </div>

                <h3 className="mt-8 text-xl font-bold">

                  {step}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DASHBOARD */}

      <section className="max-w-7xl mx-auto py-28 px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <h2 className="text-5xl font-black">

              Productivity Dashboard

            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-400">

              Track your Clutch Score,
              monitor task completion,
              identify high-risk deadlines,
              and understand your productivity trends
              through an interactive analytics dashboard.

            </p>

            <ul className="mt-10 space-y-5">

              {[
                "Live Clutch Score",
                "Task Analytics",
                "Deadline Monitoring",
                "Productivity Insights",
                "Calendar Integration",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="text-cyan-400" />

                  {item}

                </li>

              ))}

            </ul>

          </div>

          <div>

            <img
              src="/dashboard.png"
              alt="Dashboard"
              className="
              rounded-3xl
              border
              border-white/10
              shadow-2xl
            "
            />

          </div>

        </div>

      </section>

      {/* GOOGLE TECH */}

      <section className="bg-slate-900 py-24">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black">

            Powered By Google Technologies

          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Gemini AI",
              "Firebase",
              "Google Calendar",
              "Google AI Studio",
            ].map((tech) => (

              <div
                key={tech}
                className="
                rounded-2xl
                bg-white/5
                border
                border-white/10
                p-8
                text-xl
                font-bold
              "
              >

                {tech}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-32">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-20 text-center">

            <h2 className="text-5xl font-black">

              Ready To Never Miss A Deadline?

            </h2>

            <p className="mt-8 text-xl text-slate-300">

              Let Gemini AI become your intelligent productivity companion.

            </p>

            <Link
              to="/login"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-xl font-bold transition hover:scale-105"
            >
              Start For Free

              <ArrowRight />

            </Link>

          </div>

        </div>

      </section>

    </div>
    </>
  );
}