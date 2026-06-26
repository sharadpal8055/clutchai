import { analyzeTask } from "./gemini/taskAnalyzer.js";

import { analyzeRisk } from "./risk/riskAnalyzer.js";

import { calculateClutchScore } from "../utils/calculateClutchScore.js";
import { generateRescuePlan } from "./rescue/rescueAgent.js";
import {
generatePlanner
}
from "./planner/plannerAgent.js";

export const createTaskPipeline = async (taskData) => {
  const today = new Date();

const deadline = new Date(taskData.deadline);

const daysRemaining = Math.max(
  0,
  Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))
);
  // STEP 1
  const taskAI = await analyzeTask(taskData.title, taskData.description);

  // STEP 2
  const riskAI = await analyzeRisk({
    ...taskData,

    ...taskAI,
    currentDate: new Date().toISOString(),
     daysRemaining,
  });
  let rescuePlan = null;

  if (riskAI.riskScore >= 10) {
    rescuePlan = await generateRescuePlan({
      ...taskData,

      ...taskAI,

      ...riskAI,
    });
  }

  // STEP 3

  const clutchScore = calculateClutchScore({
    riskScore: riskAI.riskScore,

   progress: taskData.progress || 0,
  });

  // Rescue Agent will be added
  // in next phase
let planner = null;

planner =
await generatePlanner({

...taskData,

...taskAI,

...riskAI,

rescuePlan

});


  return {
    ...taskData,

    ...taskAI,

    ...riskAI,

    clutchScore,

    rescuePlan,
      planner,

  };
};
