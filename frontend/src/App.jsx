import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServerLoader from "./components/ServerLoader";
import useServerWakeup from "./hooks/useServerWakeup";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import TasksPage from "./pages/TasksPage";
import Layout from "./layouts/Layout";
import "./App.css";
import Features from "./pages/Features";
import Workflow from "./pages/Workflow";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import FAQ from "./pages/FAQ";

    console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID);
function App() {
  const serverReady = useServerWakeup();
  if (!serverReady) {
  return <ServerLoader />;
}

if (!serverReady) {
  return <ServerLoader />;
}

return (
  <BrowserRouter>

      <Routes>
        {/* Public */}

        <Route path="/" element={<LandingPage />} />
<Route path="/features" element={<Features />} />

<Route path="/workflow" element={<Workflow />} />

<Route path="/about" element={<About />} />

<Route path="/tech-stack" element={<TechStack />} />

<Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected */}

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/tasks"
            element={<TasksPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
