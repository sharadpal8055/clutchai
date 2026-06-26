import "dotenv/config";

import app from "./app.js";

console.log("Current Directory:", process.cwd());
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
console.log("Google Client:", process.env.GOOGLE_CLIENT_ID);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});