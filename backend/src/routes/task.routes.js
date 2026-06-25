import express
from "express";

import{
 createTaskController
}
from "../controllers/task.controller.js";

const router =
express.Router();

router.post(
"/create",
createTaskController
);

export default router;