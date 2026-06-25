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

export default app;