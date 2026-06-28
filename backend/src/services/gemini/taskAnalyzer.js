import { GoogleGenAI } from "@google/genai";
import { buildTaskAnalysisPrompt } from "../../prompts/taskAnalysis.prompt.js";

export const analyzeTask = async (title, description) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing.");
    }

    if (!process.env.GEMINI_MODEL) {
      throw new Error("GEMINI_MODEL is missing.");
    }
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await Promise.race([
      ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: buildTaskAnalysisPrompt(title, description),
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Gemini timeout")), 15000),
      ),
    ]);

    const cleanedText = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(cleanedText);
    } catch (err) {
      throw new Error("Gemini returned invalid JSON.");
    }
  } catch (error) {
    console.error("Gemini Failed, Using Fallback", error);

    const titleLower = title.toLowerCase();

    let priority = "Medium";
    let difficulty = "Medium";
    let estimatedHours = 8;

    if (
      titleLower.includes("interview") ||
      titleLower.includes("exam") ||
      titleLower.includes("hackathon")
    ) {
      priority = "High";
      difficulty = "Hard";
      estimatedHours = 20;
    }

    return {
  priority,
  estimatedHours,
  difficulty,

  recommendation:
    "Break the task into smaller milestones and focus on completing the highest priority work first.",

  warning:
    priority === "High"
      ? "This task appears time-sensitive and requires immediate attention."
      : "",

  subtasks: [
    `Understand requirements for "${title}"`,
    "Break work into smaller milestones",
    "Complete the implementation",
    "Test and fix issues",
    "Review and finalize",
  ],
};
  }
};
