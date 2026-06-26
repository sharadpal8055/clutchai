import db from "../../config/firebase.js";
import {
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
  if (!task.calendarSync?.synced)
    return;

  // Remove old events
  await deleteExistingEvents(task);

  // Create updated events
  const events = await createPlannerEvents(task);

  await db
    .collection("tasks")
    .doc(taskId)
    .update({

      calendarSync: {

        synced: true,

        syncedAt: new Date(),

        eventIds: events.map(e => e.id),

      },

    });

};