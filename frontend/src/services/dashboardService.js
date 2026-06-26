import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getDashboardData = async (userId) => {

  const response = await axios.get(

    `${API}/api/dashboard`,

    {
      params: {
        userId,
      },
    }

  );

  return response.data;

};