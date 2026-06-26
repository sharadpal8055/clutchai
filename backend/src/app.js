import express from "express";
import cors from "cors";

const app = express();
import aiRoutes
from "./routes/ai.routes.js";
import riskRoutes
from "./routes/risk.routes.js";
app.use(cors());
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

export default app;