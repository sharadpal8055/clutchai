import express from "express";
import cors from "cors";

const app = express();
import aiRoutes
from "./routes/ai.routes.js";
import riskRoutes
from "./routes/risk.routes.js";
console.log("FRONTEND_URL =", process.env.FRONTEND_URL);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
import taskRoutes
from "./routes/task.routes.js";
import dashboardRoutes
from "./routes/dashboard.routes.js";
import calendarRoutes from "./routes/calendar.routes.js";
app.use(express.json());



app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Clutch AI Backend Running"
  });
});
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
  });
});
app.use(
 "/api/ai",
 aiRoutes
);
app.use(
 "/api/risk",
 riskRoutes
);
app.use(
"/api/tasks",
taskRoutes
);
app.use(
"/api/dashboard",
dashboardRoutes
);
app.use(
  "/api/calendar",
  calendarRoutes
);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
export default app;