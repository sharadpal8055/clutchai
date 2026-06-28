import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/authService";
//polishin ui
import { motion } from "framer-motion";
//theme
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

// Dashboard Components
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import RiskOverview from "../components/dashboard/RiskOverview";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import RescueTasks from "../components/dashboard/RescueTasks";
import TodayPlanner from "../components/dashboard/TodayPlanner";
import AIInsights from "../components/dashboard/AIInsights";
import { calculateDashboardStats } from "../utils/calculateDashboardStats";
import { generateDashboardData } from "../utils/generateDashboardData";
import { useEffect, useState } from "react";
// import { getDashboardData } from "../services/dashboardService";
import RiskPieChart from "../components/dashboard/charts/RiskPieChart";
import PriorityBarChart from "../components/dashboard/charts/PriorityBarChart";
import CompletionRadialChart from "../components/dashboard/charts/CompletionRadialChart";
import { collection, onSnapshot, query, where } from "firebase/firestore";

//calendar
import { connectCalendar } from "../services/calendarService";

import { db } from "../firebase/firebase";
import Navbar from "../layouts/Navbar";
function DashboardPage() {
  const { user } = useAuth();
  const { darkMode, toggleTheme } = useTheme();
  const [dashboard, setDashboard] = useState(null);
  const handleConnectCalendar = async () => {
    try {
      await connectCalendar(user.uid);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "tasks"), where("userId", "==", user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const { stats, insights } = generateDashboardData(tasks);

      const connectedTask = tasks.find((task) => task.calendarSync?.synced);

      setDashboard({
        tasks,

        stats,

        insights,

        calendarConnected: !!connectedTask,

        lastCalendarSync: connectedTask?.calendarSync?.syncedAt || null,
      });
    });

    return () => unsubscribe();
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     loadDashboard();
  //   }
  // }, [user]);
  // const loadDashboard = async () => {
  //   const data = await getDashboardData(user.uid);

  //   setDashboard(data);
  // };

  return (
    <div
      className="
min-h-screen
bg-slate-100
dark:bg-gradient-to-br
dark:from-slate-950
dark:via-slate-900
dark:to-slate-950
transition-colors
duration-500
"
    >
      {/* Top Navbar */}
  <Navbar/>
      {/* Dashboard Content */}

      <motion.div
        className="p-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <DashboardHeader
          stats={dashboard?.stats}
          calendarConnected={dashboard?.calendarConnected}
          lastCalendarSync={dashboard?.lastCalendarSync}
        />

        <StatsCards stats={dashboard?.stats} />

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <RiskOverview tasks={dashboard?.tasks || []} />
          <RiskPieChart tasks={dashboard?.tasks || []} />

          <UpcomingDeadlines tasks={dashboard?.tasks || []} />
          <PriorityBarChart tasks={dashboard?.tasks || []} />
          <CompletionRadialChart stats={dashboard?.stats} />

          <RescueTasks tasks={dashboard?.tasks} />

          <TodayPlanner tasks={dashboard?.tasks || []} />
        </div>
        {console.log(dashboard?.insights)}

        <AIInsights insights={dashboard?.insights} />
      </motion.div>
    </div>
  );
}

export default DashboardPage;
