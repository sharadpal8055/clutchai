import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

console.log("Current Directory:", process.cwd());
console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});