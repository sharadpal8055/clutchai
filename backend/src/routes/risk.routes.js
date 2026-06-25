import express from "express";

import {
 analyzeRiskController
}
from "../controllers/risk.controller.js";

const router =
 express.Router();

router.post(
 "/analyze",
 analyzeRiskController
);

export default router;