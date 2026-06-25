import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const analyzeTask =
 async (taskData)=>{

  const response =
   await axios.post(
    `${API}/api/ai/analyze`,
    taskData
   );

  return response.data.data;
 };