import { useState } from "react";
import LandingpageNavbar from "../layouts/LandingpageNavbar";
import {
  ChevronDown,
  HelpCircle,
  BrainCircuit,
  CalendarDays,
  ShieldCheck,
  Smartphone,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    icon: BrainCircuit,
    question: "What is Clutch AI?",
    answer:
      "Clutch AI is an AI-powered productivity companion that helps users plan, prioritize, schedule and complete tasks before deadlines. Unlike traditional reminder apps, it proactively creates execution plans using Google Gemini AI.",
  },
  {
    icon: Sparkles,
    question: "Is Clutch AI free to use?",
    answer:
      "Yes. Clutch AI is currently free to use. It leverages Google's Gemini API and Firebase to provide intelligent productivity assistance while remaining accessible for students, professionals and creators.",
  },
  {
    icon: BrainCircuit,
    question: "Which AI model powers Clutch AI?",
    answer:
      "Clutch AI is powered by Google's Gemini 2.5 Flash Lite model through Google AI Studio. Gemini analyzes tasks, predicts risks, generates execution plans and provides personalized productivity recommendations.",
  },
  {
    icon: CalendarDays,
    question: "Can Clutch AI sync with Google Calendar?",
    answer:
      "Yes. After connecting your Google account, Clutch AI automatically converts AI-generated schedules into Google Calendar events, keeping your calendar organized without manual effort.",
  },
  {
    icon: ShieldCheck,
    question: "Is my data secure?",
    answer:
      "Absolutely. Authentication is handled using Firebase Authentication with Google OAuth. User data is securely stored in Firebase Firestore and sensitive credentials remain protected on the backend.",
  },
  {
    icon: Clock3,
    question: "How accurate is the risk prediction?",
    answer:
      "Risk prediction combines deadline proximity, estimated workload, task complexity, current progress and AI reasoning to generate a dynamic risk score. As your progress changes, the prediction updates automatically.",
  },
  {
    icon: Smartphone,
    question: "Does Clutch AI work on mobile devices?",
    answer:
      "Yes. The application is fully responsive and works smoothly across desktops, tablets and smartphones using a modern React interface.",
  },
  {
    icon: HelpCircle,
    question: "Why use AI instead of traditional reminders?",
    answer:
      "Reminders only tell you when time is running out. Clutch AI plans your work before deadlines arrive by creating milestones, schedules, risk analysis and rescue strategies, helping you finish work instead of simply reminding you about it.",
  },
];

function Accordion({ faq, open, onClick }) {
  const Icon = faq.icon;

  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      overflow-hidden
      transition-all
      duration-300
      hover:border-cyan-500/30
      "
    >
      <button
        onClick={onClick}
        className="
        w-full
        flex
        items-center
        justify-between
        px-8
        py-6
        text-left
        "
      >
        <div className="flex items-center gap-5">
          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            "
          >
            <Icon size={24} />
          </div>

          <h3 className="text-xl font-bold">
            {faq.question}
          </h3>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>

      <div
        className={`
        transition-all
        duration-500
        overflow-hidden
        ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }
        `}
      >
        <div className="px-8 pb-8 text-slate-400 leading-8">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <>
      <LandingpageNavbar />

      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

        {/* Background */}

        <div className="fixed inset-0 -z-10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d430,transparent_65%)]"/>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        {/* Hero */}

        <section className="pt-40 pb-24 px-6">

          <div className="max-w-5xl mx-auto text-center">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
              Frequently Asked Questions
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight">

              Everything You Need

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

                To Know

              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-400 leading-9">

              Learn more about Clutch AI, how it works,
              Google Gemini integration,
              security,
              productivity planning,
              and smart scheduling.

            </p>

          </div>

        </section>

        {/* FAQ */}

        <section className="pb-28 px-6">

          <div className="max-w-5xl mx-auto space-y-6">

            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                faq={faq}
                open={active === index}
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              />
            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="pb-28 px-6">

          <div className="max-w-5xl mx-auto">

            <div
              className="
              rounded-[40px]
              border
              border-cyan-500/20
              bg-gradient-to-r
              from-cyan-900/30
              to-blue-900/30
              p-16
              text-center
              "
            >

              <h2 className="text-5xl font-black">

                Ready to Experience AI Productivity?

              </h2>

              <p className="mt-6 text-xl text-slate-300 leading-9">

                Let Clutch AI transform the way you manage tasks,
                prioritize work,
                and achieve deadlines with confidence.

              </p>

              <a
                href="/login"
                className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-4
                text-lg
                font-bold
                transition
                hover:scale-105
                hover:shadow-xl
                hover:shadow-cyan-500/30
                "
              >
                Try Clutch AI

                <ArrowRight size={22} />

              </a>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}