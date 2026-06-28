import {
  createTaskPipeline
}
from "../services/aiPipeline.js";

import db from "../config/firebase.js";

import { updateCalendarEvents }
from "../services/calendar/updateCalendarEvents.js";
import {
  getUserCalendar,
  createPlannerEvents,
} from "../services/calendar/calendar.service.js";

export const createTaskController = async (req, res) => {
  try {
    if (!req.body?.title || !req.body?.description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    const taskData = req.body;

    const finalTask = await createTaskPipeline(taskData);

    const docRef = db.collection("tasks").doc();

    const task = {
      id: docRef.id,
      ...finalTask,
    };

    await docRef.set(task);

    // -----------------------------
    // AUTO GOOGLE CALENDAR SYNC
    // -----------------------------

    try {
      const calendar = await getUserCalendar(task.userId);

      const events = await createPlannerEvents(calendar, task);

      await docRef.update({
        calendarSync: {
          synced: true,
          syncedAt: new Date(),
          eventIds: events.map((e) => e.id),
        },
      });

      task.calendarSync = {
        synced: true,
        syncedAt: new Date(),
        eventIds: events.map((e) => e.id),
      };
    } catch (err) {
      console.log("Calendar not connected:", err.message);
    }

    return res.status(201).json({
      success: true,
      data: task,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTaskController = async (req, res) => {

  try {

    const { id } = req.params;

    const taskData = req.body;

    const finalTask = await createTaskPipeline(taskData);

  const taskRef = db.collection("tasks").doc(id);

const doc = await taskRef.get();

if (!doc.exists) {
  return res.status(404).json({
    success: false,
    message: "Task not found.",
  });
}

await taskRef.update(finalTask);
      try {
  await updateCalendarEvents(id);
} catch (err) {
  console.error("Calendar Sync:", err.message);
}

   return res.json({

      success: true,

      data: {

        id,

        ...finalTask,

      },

    });

  } catch (error) {

    console.log(error);

  return  res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};