export const buildRiskPrompt = (task) => `

You are an expert productivity risk analyst.

Analyze:

${JSON.stringify(task)}

Return ONLY JSON.

{
  "riskScore":0,
  "completionProbability":0,
  "warning":"",
  "recommendation":""
}

Rules:

riskScore:
0-100

completionProbability:
0-100

Higher estimated hours +
closer deadline
=
higher risk.

No explanation.
Only JSON.

`;
