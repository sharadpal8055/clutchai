import { GoogleGenAI } from "@google/genai";
import { buildTaskAnalysisPrompt } from "../../prompts/taskAnalysis.prompt.js";

export const analyzeTask = async (
  title,
  description
) => {

  try {

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response =
      await ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: buildTaskAnalysisPrompt(
          title,
          description
        ),
      });

    const text =
      response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(text);

  }catch (error) {

  console.error(
    "Gemini Failed, Using Fallback",
    error
  );

  const titleLower =
    title.toLowerCase();

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

    subtasks: [
      `Research ${title}`,
      `Plan ${title}`,
      `Execute ${title}`,
      `Test and review`,
      `Complete final submission`
    ]
  };
}
};