import db from "../config/firebase.js";
import { generateInsights } from "../utils/generateInsights.js";
export const getDashboardData = async (req, res) => {
  try {
    const { userId } = req.query;

    const snapshot = await db
      .collection("tasks")
      .where("userId", "==", userId)
      .get();

    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const completed = tasks.filter((task) => task.progress === 100);

    const highRisk = tasks.filter((task) => task.riskScore >= 80);

    const rescueTasks = tasks.filter((task) => task.rescuePlan);

    const avgClutchScore =
      tasks.length === 0
        ? 0
        : Math.round(
            tasks.reduce((sum, task) => sum + (task.clutchScore || 0), 0) /
              tasks.length,
          );
    const completionRate =
      tasks.length === 0
        ? 0
        : Math.round((completed.length / tasks.length) * 100);

    const averageRisk =
      tasks.length === 0
        ? 0
        : Math.round(
            tasks.reduce((sum, t) => sum + (t.riskScore || 0), 0) /
              tasks.length,
          );
    const insights = generateInsights(tasks);

    res.json({
      success: true,

      stats: {
        totalTasks: tasks.length,

        completed: completed.length,

        highRisk: highRisk.length,

        rescueMode: rescueTasks.length,

        clutchScore: avgClutchScore,
        completionRate,

averageRisk,

streak:0 // placeholder
      },

      tasks,
      insights,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
