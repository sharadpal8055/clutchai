import express from "express";

import {
 analyzeTaskController
}
from "../controllers/ai.controller.js";

const router =
 express.Router();

router.post(
 "/analyze",
 analyzeTaskController
);

export default router;