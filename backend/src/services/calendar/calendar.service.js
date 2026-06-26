import "dotenv/config";
import { google } from "googleapis";
import db from "../../config/firebase.js";
  console.log("CLIENT_ID:", process.env.GOOGLE_CLIENT_ID),
console.log("CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET),
console.log("REDIRECT:", process.env.GOOGLE_REDIRECT_URI);

const oauth2Client = new google.auth.OAuth2(
  
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,

);

export const getAuthClient = () => {
  
  return oauth2Client;
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

  const refreshToken =
    userDoc.data()?.calendar?.refreshToken;

  if (!refreshToken) {
    throw new Error("Google Calendar not connected");
  }

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