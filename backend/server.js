import express from "express";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import path from "path";
import { app, server } from "./socket/socket.js";

import cookieParser from "cookie-parser";

// const app = express();

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests woth JSON payloads from req.body

app.use(cookieParser()); //be able to run the cookie and should be set before the route
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`servering is running on the port ${PORT}`);
});
