import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/authService";
// Dashboard Components
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import RiskOverview from "../components/dashboard/RiskOverview";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import RescueTasks from "../components/dashboard/RescueTasks";
import TodayPlanner from "../components/dashboard/TodayPlanner";
import AIInsights from "../components/dashboard/AIInsights";
import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import RiskPieChart from "../components/dashboard/charts/RiskPieChart";
import PriorityBarChart
from "../components/dashboard/charts/PriorityBarChart";
import CompletionRadialChart from "../components/dashboard/charts/CompletionRadialChart";

function DashboardPage() {
  const { user } = useAuth();

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    if (user) {
      loadDashboard();
    }
  }, [user]);
  const loadDashboard = async () => {
    const data = await getDashboardData(user.uid);

    setDashboard(data);
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Top Navbar */}
      <div className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-12 h-12 rounded-full border"
          />

          <div>
            <h2 className="font-semibold text-lg">{user?.displayName}</h2>

            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            to="/tasks"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-2
              rounded-lg
              transition
            "
          >
            Manage Tasks
          </Link>

          <button
            onClick={logoutUser}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-5
              py-2
              rounded-lg
              transition
            "
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}

      <div className="p-8">
        <DashboardHeader stats={dashboard?.stats} />

        <StatsCards stats={dashboard?.stats} />

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <RiskOverview tasks={dashboard?.tasks || []} />
          <RiskPieChart
tasks={dashboard?.tasks||[]}
/>

          <UpcomingDeadlines tasks={dashboard?.tasks || []} />
          <PriorityBarChart
tasks={dashboard?.tasks||[]}
/>
<CompletionRadialChart
stats={dashboard?.stats}
/>

          <RescueTasks tasks={dashboard?.tasks} />

          <TodayPlanner tasks={dashboard?.tasks || []} />
        </div>

        <AIInsights insights={dashboard?.insights} />
      </div>
    </div>
  );
}

export default DashboardPage;
