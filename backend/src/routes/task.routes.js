import express
from "express";

import {
  createTaskController,
  updateTaskController,
} from "../controllers/task.controller.js";

const router =
express.Router();

router.post(
"/create",
createTaskController
);
router.put(
  "/update/:id",
  updateTaskController
);
export default router;