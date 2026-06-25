import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const analyzeRisk = async (taskData) => {
  const response = await axios.post(
    `${API}/api/risk/analyze`,
    taskData
  );

  return response.data.data;
};