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

Return ONLY valid JSON in EXACTLY this format.

{
  "priority": "High",
  "estimatedHours": 20,
  "difficulty": "Hard",
  "subtasks": [
    "Research topic",
    "Create study plan",
    "Complete implementation",
    "Test thoroughly",
    "Review and finalize"
  ]
}

Rules:

1. priority must be ONLY one of:
   - Low
   - Medium
   - High

2. difficulty must be ONLY one of:
   - Easy
   - Medium
   - Hard

3. estimatedHours must be a single integer.

4. subtasks MUST be:
   - An array of strings ONLY.
   - Between 3 and 8 items.
   - Each item should be a short actionable task (5–10 words).
   - No nested arrays.
   - No objects.
   - No descriptions.
   - No priorities.
   - No estimatedHours.
   - No difficulty fields.
   - No numbering.

5. Do NOT generate phases, sections, or categories.

6. Do NOT return nested subtasks.

7. Do NOT include markdown, code fences, comments, explanations, or additional fields.

Return ONLY valid JSON.
`;