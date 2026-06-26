import { GoogleGenAI } from "@google/genai";

import {
  buildRescuePrompt,
} from "../../prompts/rescue.prompt.js";

export const generateRescuePlan =
async (task) => {

  try {

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response =
      await ai.models.generateContent({

        model: "gemini-2.5-flash",

        contents:
          buildRescuePrompt(task),

      });

    const text =
      response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(text);

  } catch (error) {

    console.log("Rescue Agent Fallback");

    return {

      mode: "Emergency",

      today: [
        "Complete highest priority task",
        "Remove distractions",
        "Work for two focused sessions",
      ],

      tomorrow: [
        "Review progress",
        "Complete remaining work",
      ],

      criticalActions: [
        "Disable social media",
        "Postpone non-essential work",
        "Sleep at least 7 hours",
      ],

      motivation:
        "Small focused progress today prevents a missed deadline tomorrow.",

    };

  }

};