import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth_routes.js";
import messageRoutes from "./routes/message_routes.js";
import userRoutes from "./routes/user_routes.js";
import connectDB from "./db/connect.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse json data
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
);

app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
