import "dotenv/config";
import { google } from "googleapis";
import db from "../../config/firebase.js";
console.log("Google OAuth initialized");
const oauth2Client = new google.auth.OAuth2(
  
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,

);

export const getAuthClient = () => {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
};

export const getCalendar = () => {
  return google.calendar({
    version: "v3",
    auth: oauth2Client,
  });
};



export const getUserCalendar = async (userId) => {
  const userDoc = await db
    .collection("users")
    .doc(userId)
    .get();

  if (!userDoc.exists) {
    throw new Error("User not found");
  }

  const refreshToken = userDoc.data()?.calendar?.refreshToken;

  if (!refreshToken) {
    throw new Error("Google Calendar not connected");
  }

  const oauth2Client = getAuthClient();

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  return google.calendar({
    version: "v3",
    auth: oauth2Client,
  });
};
export const deleteExistingEvents = async (
  calendar,
  eventIds = []
) => {

  for (const eventId of eventIds) {

    try {

      await calendar.events.delete({

        calendarId: "primary",

        eventId,

      });

    } catch (error) {

      console.log(
        `Event ${eventId} already removed or not found.`
      );

    }

  }

};
export const createPlannerEvents = async (
  calendar,
  task
) => {

  const createdEvents = [];

  const schedule = task.planner?.schedule || [];

  for (const item of schedule) {

    // const baseDate = new Date(task.deadline);

    // // Adjust date based on planner day
    // if (item.day === "Today") {

    //   baseDate.setDate(baseDate.getDate() - 1);

    // } else if (item.day === "Day After Tomorrow") {

    //   baseDate.setDate(baseDate.getDate() + 1);

    // }
const baseDate = new Date();

baseDate.setHours(0, 0, 0, 0);

if (item.day === "Tomorrow") {
  baseDate.setDate(baseDate.getDate() + 1);
}
else if (item.day === "Day After Tomorrow") {
  baseDate.setDate(baseDate.getDate() + 2);
}
    const [sh, sm] = item.start.split(":");
    const [eh, em] = item.end.split(":");

    const startDate = new Date(baseDate);
    startDate.setHours(Number(sh), Number(sm), 0, 0);

    const endDate = new Date(baseDate);
    endDate.setHours(Number(eh), Number(em), 0, 0);
    if (endDate <= startDate) {
  endDate.setHours(startDate.getHours() + 1);
}

    const response = await calendar.events.insert({

      calendarId: "primary",

      requestBody: {

        summary: item.task,

        description: task.title,

        start: {

          dateTime: startDate.toISOString(),

          timeZone: process.env.DEFAULT_TIMEZONE || "Asia/Kolkata",

        },

        end: {

          dateTime: endDate.toISOString(),
 timeZone: process.env.DEFAULT_TIMEZONE || "Asia/Kolkata",

        },

        colorId: "9",

      },

    });

    createdEvents.push({

      id: response.data.id,

      link: response.data.htmlLink,

    });

  }

  return createdEvents;

};