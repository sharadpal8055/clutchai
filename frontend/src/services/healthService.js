import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const checkBackend = async () => {
  try {
    const res = await axios.get(`${API}/health`, {
      timeout: 5000,
    });

    return res.status === 200;
  } catch {
    return false;
  }
};