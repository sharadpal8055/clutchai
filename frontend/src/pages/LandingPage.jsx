import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold">
        Clutch AI
      </h1>

      <p className="mt-4 text-lg">
        Your AI Deadline Rescue Assistant
      </p>

      <Link
        to="/login"
        className="mt-8 bg-black text-white px-6 py-3 rounded"
      >
        Get Started
      </Link>

    </div>
  );
}

export default LandingPage;