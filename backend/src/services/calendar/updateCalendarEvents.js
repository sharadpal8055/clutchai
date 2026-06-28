import db from "../../config/firebase.js";

import {
  getUserCalendar,
  deleteExistingEvents,
  createPlannerEvents,
} from "./calendar.service.js";

export const updateCalendarEvents = async (taskId) => {
  const doc = await db
    .collection("tasks")
    .doc(taskId)
    .get();

  if (!doc.exists) return;

  const task = {
    id: doc.id,
    ...doc.data(),
  };

  // Calendar not connected
  if (!task.calendarSync?.synced) return;

  // Get authenticated Google Calendar client
  const calendar = await getUserCalendar(task.userId);

  // Delete previously created events
  await deleteExistingEvents(
    calendar,
    task.calendarSync.eventIds || []
  );

  // Create new events
  const events = await createPlannerEvents(
    calendar,
    task
  );

  // Save new event IDs
  await db
    .collection("tasks")
    .doc(taskId)
    .update({
      calendarSync: {
        synced: true,
        syncedAt: new Date(),
        eventIds: events.map((e) => e.id),
      },
    });
};