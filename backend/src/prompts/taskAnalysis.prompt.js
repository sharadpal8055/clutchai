export const buildTaskAnalysisPrompt = (
  taskTitle,
  description
) => `
You are an expert productivity coach.

Analyze the following task.

Task:
${taskTitle}

Description:
${description}

Return ONLY valid JSON.

{
  "priority":"",
  "estimatedHours":0,
  "difficulty":"",
  "subtasks":[]
}

Rules:

priority:
Low | Medium | High

difficulty:
Easy | Medium | Hard

subtasks:
array of actionable subtasks

No explanation.
No markdown.
Only JSON.
`;