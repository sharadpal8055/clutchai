# 🚀 Clutch AI

> **AI-Powered Productivity Companion for Smarter Planning, Risk Prediction & Deadline Rescue**

Clutch AI is an intelligent productivity assistant built with **Google Gemini AI** that helps users stay ahead of deadlines. Instead of relying on passive reminders, Clutch AI proactively analyzes tasks, predicts execution risks, creates personalized work plans, synchronizes schedules with Google Calendar, and activates an AI-powered rescue strategy whenever deadlines are at risk.

Built for the **Coding Ninjas × Google for Developers – Vibe2Ship Hackathon**, Clutch AI demonstrates how AI can become a proactive productivity partner rather than just a reminder tool.

---

## 🌟 Live Demo

**Frontend:** https://clutchai-frontend.vercel.app

**Backend API:** https://clutchai-backend.onrender.com

---



---

# 🎯 Problem Statement

### The Last-Minute Life Saver

Students, professionals, freelancers, and entrepreneurs often miss deadlines because existing productivity tools depend on passive notifications.

They remind users **when it's already too late** instead of helping them execute work efficiently.

Clutch AI solves this by acting as an **AI Productivity Agent** that continuously plans, prioritizes, predicts risks, and recommends the best actions before deadlines become emergencies.

---

# ✨ Features

## 🤖 AI Task Analysis

* Understands task complexity
* Estimates effort required
* Identifies dependencies
* Generates execution insights using Gemini

---

## 📅 Smart Planner Agent

Automatically creates:

* Daily schedules
* Time blocks
* Study/work sessions
* Break recommendations
* Execution roadmap

---

## ⚠️ Risk Prediction Engine

Predicts:

* Deadline risks
* Workload overload
* Low completion probability
* Urgency score

---

## 🚨 Rescue Mode

When a task is in danger:

* Generates emergency plans
* Compresses schedules
* Removes unnecessary work
* Prioritizes critical actions

---

## 📈 Productivity Dashboard

Track:

* Total Tasks
* Completed Tasks
* Pending Tasks
* Clutch Score
* Progress
* AI Insights

---

## 📆 Google Calendar Integration

Automatically syncs AI-generated schedules with Google Calendar.

Users receive:

* Smart time blocks
* Daily plans
* Calendar events
* Updated schedules after edits

---

## 🔐 Secure Authentication

* Google Login
* Firebase Authentication
* Firestore Database

---

## 🧠 Gemini AI Powered

Uses Google Gemini for:

* Task Understanding
* Planning
* Risk Analysis
* Rescue Strategy
* Personalized Productivity Suggestions

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Firebase SDK

---

## Backend

* Node.js
* Express.js
* Firebase Admin SDK
* Google APIs
* Gemini API

---

## Database

* Firebase Firestore

---

## AI

* Google Gemini API
* Google AI Studio

---

## Authentication

* Firebase Authentication
* Google OAuth

---

## Integrations

* Google Calendar API

---

# ⚙️ Project Architecture

```
                    Google Login
                         │
                         ▼
               Firebase Authentication
                         │
                         ▼
React Frontend ─────► Express Backend
                         │
                         ▼
                  AI Task Pipeline
                         │
     ┌───────────────────┼────────────────────┐
     ▼                   ▼                    ▼
 Task Analyzer      Risk Predictor      Planner Agent
     │                   │                    │
     └──────────────► Rescue Agent ◄──────────┘
                         │
                         ▼
                  Firebase Firestore
                         │
                         ▼
                Google Calendar Sync
```

---

# 🧠 AI Pipeline

Every created task passes through an intelligent pipeline:

```
Task Creation

        ↓

Gemini Task Analysis

        ↓

Risk Prediction

        ↓

Clutch Score Calculation

        ↓

Planner Generation

        ↓

Rescue Plan (if required)

        ↓

Firestore Storage

        ↓

Google Calendar Sync
```

---

# 📂 Folder Structure

```
ClutchAI/

│

├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── middleware/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/sharadpal8055/clutchai.git

cd clutchai
```

---

## Install Dependencies

### Backend

```bash
cd backend

npm install
```

### Frontend

```bash
cd frontend

npm install
```

---

## Environment Variables

### Backend

Create `.env`

```env
PORT=5000

GEMINI_API_KEY=

GEMINI_MODEL=

FIREBASE_PROJECT_ID=

FIREBASE_CLIENT_EMAIL=

FIREBASE_PRIVATE_KEY=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

GOOGLE_REDIRECT_URI=

DEFAULT_TIMEZONE=Asia/Kolkata

FRONTEND_URL=
```

---

### Frontend

Create `.env`

```env
VITE_API_URL=

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=

VITE_FIREBASE_MEASUREMENT_ID=

VITE_GOOGLE_CLIENT_ID=
```

---

## Run Backend

```bash
npm run dev
```

---

## Run Frontend

```bash
npm run dev
```

---

# 📦 Deployment

**Frontend**

* Vercel

**Backend**

* Render

**Database**

* Firebase Firestore

**Authentication**

* Firebase Authentication

**AI**

* Google Gemini API

**Calendar**

* Google Calendar API

---

# 🎯 Future Improvements

* Voice Assistant
* Email Reminder Agent
* WhatsApp Notifications
* Team Collaboration
* AI Productivity Analytics
* Mobile Application
* Offline Support
* Multi-language Support
* Smart Habit Tracking
* AI Time Estimation

---

# 👨‍💻 Author

**Sharad Pal**

Computer Science Engineering Student

Full Stack Developer • AI Enthusiast • Hackathon Builder

GitHub: https://github.com/sharadpal8055

LinkedIn: https://linkedin.com/in/sharadpal8055

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub!
