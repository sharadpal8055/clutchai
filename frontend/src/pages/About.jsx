import LandingpageNavbar from "../layouts/LandingpageNavbar";
import {
  Target,
  TriangleAlert,
  Lightbulb,
  Rocket,
  BrainCircuit,
  CalendarDays,
  Database,
  Globe,
 

  ArrowRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const tech = [
    {
      title: "Google Gemini",
      desc: "AI reasoning, task analysis and planning",
      icon: BrainCircuit,
      color: "from-violet-500 to-indigo-600",
    },
    {
      title: "Firebase",
      desc: "Authentication & Firestore Database",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "React",
      desc: "Modern responsive frontend",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Node.js",
      desc: "Scalable backend APIs",
      icon: Rocket,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Google Calendar",
      desc: "Automatic schedule synchronization",
      icon: CalendarDays,
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <>
      <LandingpageNavbar />

      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

        {/* Background */}

        <div className="fixed inset-0 -z-10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d420,transparent_60%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        </div>

        {/* Hero */}

        <section className="pt-40 pb-24 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

              About Clutch AI

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

              Building the Future of

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

                AI Productivity

              </span>

            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-9">

              Clutch AI is more than a task manager. It is an intelligent
              productivity companion that helps people finish important work
              before deadlines become emergencies.

            </p>

          </div>

        </section>

        {/* Story */}

        <section className="pb-24 px-6">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

            {/* Mission */}

            <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                <Target size={30} />

              </div>

              <h2 className="mt-6 text-4xl font-bold">

                Mission

              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                Our mission is to transform productivity from passive reminders
                into proactive AI guidance.

                Instead of simply notifying users that time is running out,
                Clutch AI understands work, predicts risks, creates execution
                strategies, and helps people complete tasks with confidence.

              </p>

            </div>

            {/* Problem */}

            <div className="rounded-3xl border border-red-500/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">

                <TriangleAlert size={30} />

              </div>

              <h2 className="mt-6 text-4xl font-bold">

                Problem

              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                Millions of students, professionals and entrepreneurs miss
                deadlines because traditional productivity applications only
                send reminders.

                By the time a reminder appears, there is often not enough time
                left to complete meaningful work.

              </p>

            </div>

            {/* Solution */}

            <div className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">

                <Lightbulb size={30} />

              </div>

              <h2 className="mt-6 text-4xl font-bold">

                Solution

              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                Clutch AI analyzes every task using Google Gemini AI,
                intelligently estimates effort,
                predicts deadline risk,
                breaks projects into milestones,
                generates optimized schedules,
                synchronizes with Google Calendar,
                and continuously monitors progress until completion.

              </p>

            </div>

            {/* Vision */}

            <div className="rounded-3xl border border-indigo-500/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 flex items-center justify-center">

                <Rocket size={30} />

              </div>

              <h2 className="mt-6 text-4xl font-bold">

                Vision

              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                We envision Clutch AI becoming the world's smartest AI
                productivity companion—helping students, developers,
                freelancers, entrepreneurs and organizations plan smarter,
                work efficiently and never miss important deadlines.

              </p>

            </div>

          </div>

        </section>

        {/* Built With */}

        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto">

            <h2 className="text-center text-5xl font-black">

              Built With

            </h2>

            <p className="text-center text-slate-400 mt-5 mb-16">

              Powered by Google's AI ecosystem and modern web technologies.

            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {tech.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >

                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                    >

                      <Icon size={30} />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold">

                      {item.title}

                    </h3>

                    <p className="mt-3 text-slate-400">

                      {item.desc}

                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

        {/* Creator */}

        <section className="pb-32 px-6">

          <div className="max-w-6xl mx-auto">

            <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-12">

              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div className="flex justify-center">

                  <img
                    src="/creator.jpg"
                    alt="Sharad Pal"
                    className="w-72 h-72 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
                  />

                </div>

                <div>

                  <span className="text-cyan-400 font-semibold">

                    Meet the Creator

                  </span>

                  <h2 className="mt-4 text-5xl font-black">

                    Sharad Pal

                  </h2>

                  <p className="mt-6 text-slate-400 leading-8">

                    Computer Science Engineering student passionate about
                    Full Stack Development, Artificial Intelligence,
                    cloud technologies, and building impactful products.

                    Clutch AI was developed for the

                    <span className="text-cyan-400 font-semibold">

                      {" "}Coding Ninjas × Google for Developers – Vibe2Ship Hackathon

                    </span>

                    with the vision of making productivity proactive rather
                    than reactive.

                  </p>

                  <div className="mt-10 flex flex-wrap gap-5">

                    <a
                      href="https://www.linkedin.com/in/sharadpal8055"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:scale-105 transition"
                    >

                      <FaLinkedin size={20} />

                      LinkedIn

                    </a>

                    <a
                      href="https://github.com/sharadpal8055"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl bg-slate-800 px-6 py-3 font-semibold hover:scale-105 transition"
                    >

                      <FaGithub size={20} />

                      GitHub

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-28 px-6">

          <div className="max-w-5xl mx-auto rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-16 text-center">

            <h2 className="text-5xl font-black">

              Experience AI Productivity

            </h2>

            <p className="mt-6 text-slate-300 text-lg">

              Join Clutch AI and let intelligent planning help you stay ahead
              of every deadline.

            </p>

            <a
              href="/login"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold hover:scale-105 transition"
            >

              Get Started

              <ArrowRight />

            </a>

          </div>

        </section>

      </div>
    </>
  );
}