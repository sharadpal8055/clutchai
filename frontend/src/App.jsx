import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import TasksPage from "./pages/TasksPage";
import Layout from "./layouts/Layout";
import "./App.css";

    console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID);
function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Public */}

        <Route path="/" element={<LandingPage />} />

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
