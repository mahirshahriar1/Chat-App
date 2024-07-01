import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth_routes.js";
import messageRoutes from "./routes/message_routes.js";
import userRoutes from "./routes/user_routes.js";
import connectDB from "./db/connect.js";

import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse json data
app.use(cookieParser());

app.use(
  cors({
    origin: "https://chat-app-1-ioju.onrender.com",
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
);

app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
