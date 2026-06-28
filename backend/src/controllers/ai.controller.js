import { analyzeTask } from "../services/gemini/taskAnalyzer.js";

export const analyzeTaskController = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title?.trim() || !description?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    const analysis = await analyzeTask(title, description);

    return res.status(200).json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    console.error("AI Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to analyze task.",
    });
  }
};