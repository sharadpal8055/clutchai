import LandingpageNavbar from "../layouts/LandingpageNavbar";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  ShieldCheck,
  Server,
  Globe,
  Rocket,
  CalendarDays,
  Code2,
  Layers3,
  Cloud,
} from "lucide-react";

const sections = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-cyan-500 to-blue-600",
    description:
      "Modern responsive interface focused on speed, accessibility and excellent developer experience.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-green-600",
    description:
      "RESTful backend responsible for AI orchestration, business logic and integrations.",
    tech: [
      "Node.js",
      "Express.js",
      "REST API",
    ],
  },

  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 to-red-600",
    description:
      "Cloud-native NoSQL database for storing tasks, AI outputs and user data.",
    tech: [
      "Firebase Firestore",
    ],
  },

  {
    title: "Authentication",
    icon: ShieldCheck,
    color: "from-purple-500 to-indigo-600",
    description:
      "Secure authentication with Google Sign-In and Firebase Authentication.",
    tech: [
      "Firebase Auth",
      "Google OAuth",
    ],
  },

  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    color: "from-violet-500 to-fuchsia-600",
    description:
      "Gemini powers task analysis, planning, prioritization and intelligent scheduling.",
    tech: [
      "Gemini 2.5 Flash Lite",
      "Google AI Studio",
      "Prompt Engineering",
    ],
  },

  {
    title: "Deployment",
    icon: Rocket,
    color: "from-cyan-500 to-indigo-600",
    description:
      "Production-ready deployment with scalable frontend and backend hosting.",
    tech: [
      "Vercel",
      "Render",
    ],
  },
];

function TechCard({ item }) {
  const Icon = item.icon;

  return (
    <div
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
      hover:border-cyan-500/30
      hover:shadow-2xl
      hover:shadow-cyan-500/10
      "
    >
      <div
        className={`
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        ${item.color}
        flex
        items-center
        justify-center
        `}
      >
        <Icon size={30} />
      </div>

      <h2 className="mt-6 text-3xl font-bold">
        {item.title}
      </h2>

      <p className="mt-4 text-slate-400 leading-8">
        {item.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            text-cyan-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
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

            <span
              className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-cyan-300
              "
            >
              Modern AI Technology Stack
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight">

              Built with

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

                Google's AI Ecosystem

              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-400 leading-9">

              Clutch AI combines Google's Gemini AI,
              Firebase,
              modern web technologies
              and cloud infrastructure
              to deliver an intelligent productivity experience.

            </p>

          </div>

        </section>

        {/* Technology Grid */}

        <section className="pb-24 px-6">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

            {sections.map((item) => (

              <TechCard
                key={item.title}
                item={item}
              />

            ))}

          </div>

        </section>
                {/* Architecture */}

        <section className="pb-28 px-6">

          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">

              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-cyan-300">
                System Architecture
              </span>

              <h2 className="mt-6 text-5xl font-black">
                End-to-End AI Pipeline
              </h2>

              <p className="mt-6 text-slate-400 text-lg">
                Every request flows through multiple intelligent services before
                becoming an actionable productivity plan.
              </p>

            </div>

            <div className="flex flex-col items-center gap-6">

              {[
                {
                  title: "Frontend",
                  desc: "React + Vite + Tailwind",
                  icon: Globe,
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  title: "Backend API",
                  desc: "Node + Express REST APIs",
                  icon: Server,
                  color: "from-emerald-500 to-green-600",
                },
                {
                  title: "Gemini AI",
                  desc: "Task Analysis & Planning",
                  icon: BrainCircuit,
                  color: "from-violet-500 to-fuchsia-600",
                },
                {
                  title: "Firestore",
                  desc: "Cloud Database",
                  icon: Database,
                  color: "from-orange-500 to-red-600",
                },
                {
                  title: "Google Calendar",
                  desc: "Automatic Scheduling",
                  icon: CalendarDays,
                  color: "from-cyan-500 to-indigo-600",
                },
              ].map((step, index) => {

                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                  >

                    <div
                      className="
                      w-80
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-6
                      text-center
                      hover:scale-105
                      transition-all
                      duration-300
                      hover:border-cyan-500/30
                      "
                    >

                      <div
                        className={`
                        mx-auto
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        ${step.color}
                        flex
                        items-center
                        justify-center
                        `}
                      >
                        <Icon size={30}/>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-slate-400">
                        {step.desc}
                      </p>

                    </div>

                    {index !== 4 && (

                      <ArrowRight
                        size={30}
                        className="rotate-90 my-4 text-cyan-400"
                      />

                    )}

                  </div>
                );

              })}

            </div>

          </div>

        </section>

        {/* Why These Technologies */}

        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
                Why This Stack?
              </span>

              <h2 className="mt-6 text-5xl font-black">
                Designed for Performance & Scalability
              </h2>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

              {[
                {
                  icon: Layers3,
                  title: "Modern Frontend",
                  text:
                    "React and Vite deliver a lightning-fast interface with reusable components and excellent developer experience.",
                },

                {
                  icon: Cloud,
                  title: "Cloud Native",
                  text:
                    "Firebase and Render provide scalable infrastructure without server management.",
                },

                {
                  icon: BrainCircuit,
                  title: "AI First",
                  text:
                    "Gemini powers intelligent planning, prioritization, scheduling and productivity recommendations.",
                },

              ].map((item,index)=>{

                const Icon=item.icon;

                return(

                  <div
                  key={index}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  hover:border-cyan-500/30
                  "
                  >

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                      <Icon size={30}/>

                    </div>

                    <h3 className="mt-6 text-2xl font-bold">

                      {item.title}

                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">

                      {item.text}

                    </p>

                  </div>

                )

              })}

            </div>

          </div>

        </section>

        {/* Google Technologies */}

        <section className="pb-28 px-6">

          <div className="max-w-6xl mx-auto rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-12">

            <div className="text-center">

              <h2 className="text-5xl font-black">

                Google Technologies Used

              </h2>

              <p className="mt-5 text-slate-300 text-lg">

                Built for the Google × Coding Ninjas Vibe2Ship Hackathon using
                Google's AI ecosystem.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

              {[
                "Gemini API",
                "Google AI Studio",
                "Firebase Firestore",
                "Google Calendar API",
              ].map((item)=>(
                <div
                  key={item}
                  className="
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  py-6
                  px-4
                  text-center
                  text-cyan-300
                  font-semibold
                  hover:border-cyan-500/30
                  transition
                  "
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-28 px-6">

          <div className="max-w-5xl mx-auto rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-16 text-center">

            <h2 className="text-5xl font-black">

              Experience AI Powered Productivity

            </h2>

            <p className="mt-6 text-xl text-slate-300 leading-9">

              Clutch AI combines modern web technologies with Google's AI
              ecosystem to help users finish work before deadlines.

            </p>

            <a
              href="/login"
              className="
              inline-flex
              items-center
              gap-3
              mt-10
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-bold
              hover:scale-105
              transition-all
              "
            >
              Try Clutch AI

              <ArrowRight/>

            </a>

          </div>

        </section>

      </div>

    </>

  );

}