import {
  analyzeTask,
} from "./gemini/taskAnalyzer.js";

import {
  analyzeRisk,
} from "./risk/riskAnalyzer.js";

import {
  calculateClutchScore,
} from "../utils/calculateClutchScore.js";

export const createTaskPipeline =
async(taskData)=>{

  // STEP 1
  const taskAI =
    await analyzeTask(
      taskData.title,
      taskData.description
    );

  // STEP 2
  const riskAI =
    await analyzeRisk({

      ...taskData,

      ...taskAI

    });

  // STEP 3

  const clutchScore =
    calculateClutchScore({

      riskScore:
        riskAI.riskScore,

      progress:0

    });

  // Rescue Agent will be added
  // in next phase

  return{

    ...taskData,

    ...taskAI,

    ...riskAI,

    clutchScore,

    rescuePlan:null

  };

};