import { GoogleGenAI }
from "@google/genai";

import {
 buildRiskPrompt
}
from "../../prompts/riskAnalysis.prompt.js";

export const analyzeRisk =
 async (task)=>{

 try{

  const ai =
   new GoogleGenAI({
    apiKey:
     process.env.GEMINI_API_KEY
   });

  const response =
   await ai.models.generateContent({

    model:
     "gemini-2.5-flash",

    contents:
     buildRiskPrompt(task)

   });

  const text =
   response.text
    .replace(/```json/g,"")
    .replace(/```/g,"")
    .trim();

  return JSON.parse(text);

 }
 catch(error){

  return {

   riskScore:50,

   completionProbability:50,

   warning:
    "Unable to calculate risk",

   recommendation:
    "Start early and monitor progress"

  };

 }

};