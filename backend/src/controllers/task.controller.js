import {
  createTaskPipeline
}
from "../services/aiPipeline.js";

import db from "../config/firebase.js";

import { updateCalendarEvents }
from "../services/calendar/updateCalendarEvents.js";





// export const createTaskController = async (req, res) => {

//   try {

//     const taskData = req.body;

//     const finalTask = await createTaskPipeline(taskData);

//     const doc = await db
//       .collection("tasks")
//       .add(finalTask);

//     // Save Firestore document ID inside the document
//     await doc.update({
//       id: doc.id,
//     });

//     res.status(201).json({

//       success: true,

//       data: {

//         id: doc.id,

//         ...finalTask,

//       },

//     });

//   }

//   catch (error) {

//     console.log(error);

//     res.status(500).json({

//       success: false,

//       message: error.message

//     });

//   }

// };

export const createTaskController = async (req, res) => {
  try {
    const taskData = req.body;

    const finalTask = await createTaskPipeline(taskData);

    // Create document reference first
    const docRef = db.collection("tasks").doc();

    // Save everything INCLUDING id
    await docRef.set({
      id: docRef.id,
      ...finalTask,
    });

    res.status(201).json({
      success: true,
      data: {
        id: docRef.id,
        ...finalTask,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
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

    await db
      .collection("tasks")
      .doc(id)
      .update(finalTask);
      await updateCalendarEvents(id);

    res.json({

      success: true,

      data: {

        id,

        ...finalTask,

      },

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};