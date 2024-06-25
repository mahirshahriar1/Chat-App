import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_routes.js";
import messageRoutes from "./routes/message_routes.js";
import userRoutes from "./routes/user_routes.js";
import connectDB from "./db/connect.js";

const app = express();
const PORT = process.env.port || 5000;

dotenv.config();

app.use(express.json()); // to parse json data
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("Hello World!");    
})


app.use("/api/messages", messageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
