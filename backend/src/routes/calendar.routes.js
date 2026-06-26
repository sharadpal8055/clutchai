import express from "express";

import {
  connectCalendar,
  syncTaskToCalendar,
    oauthCallback,
} from "../controllers/calendar.controller.js";
import {
  getUserCalendar,
  deleteExistingEvents,
} from "../services/calendar/calendar.service.js";

const router = express.Router();

// Google OAuth
router.get("/connect", connectCalendar);

router.get(
  "/oauth2callback",
  oauthCallback
);

// Sync Task
router.post("/sync/:taskId", syncTaskToCalendar);

export default router;