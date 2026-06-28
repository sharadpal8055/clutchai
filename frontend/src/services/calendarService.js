import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const connectCalendar = async (userId) => {
  try {
    const { data } = await axios.get(
      `${API}/api/calendar/connect`,
      {
        params: { userId },
      }
    );

    console.log("Backend Response:", data);

    if (data.success && data.url) {
      window.location.href = data.url;
    } else {
      console.error("Invalid response:", data);
    }
  } catch (err) {
    console.error(err);
  }
};