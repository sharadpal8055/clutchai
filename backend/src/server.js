import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;


try {
  app.listen(PORT, () => {
    console.log(`
 Clutch AI Backend Started

 Environment : ${process.env.NODE_ENV || "development"}

 Port        : ${PORT}

 Server Ready
`);
  });
} catch (err) {
  console.error("Failed to start server");
  console.error(err);
}