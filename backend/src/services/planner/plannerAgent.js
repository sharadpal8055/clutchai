import { GoogleGenAI } from "@google/genai";

import {
  buildPlannerPrompt
} from "../../prompts/planner.prompt.js";

export const generatePlanner =
async(task)=>{

try{

const ai =
new GoogleGenAI({

apiKey:
process.env.GEMINI_API_KEY

});

const response =
await ai.models.generateContent({

model:
process.env.GEMINI_MODEL,

contents:
buildPlannerPrompt(task)

});

const text =
response.text
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

return JSON.parse(text);

}
catch(error){

console.log(error);

return{

schedule:[

{

day:"Today",

start:"09:00",

end:"11:00",

task:"Complete highest priority subtask"

},

{

day:"Today",

start:"11:30",

end:"13:00",

task:"Continue implementation"

},

{

day:"Today",

start:"15:00",

end:"17:00",

task:"Testing and review"

}

]

};

}

};