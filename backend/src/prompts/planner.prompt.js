export const buildPlannerPrompt = (
  task
) => `
You are an AI productivity planner.

Task:

${JSON.stringify(task)}

Generate a realistic study/work schedule.

Return ONLY JSON.

{
  "schedule":[
    {
      "day":"Today",
      "start":"09:00",
      "end":"11:00",
      "task":""
    }
  ]
}

Rules:

1. Create between 3 and 6 schedule blocks.

2. Each block must contain:

- day
- start
- end
- task

3. Use realistic timings.

4. Do NOT explain anything.

5. Return ONLY JSON.
`;