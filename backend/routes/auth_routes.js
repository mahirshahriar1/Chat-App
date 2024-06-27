import express from "express";
const router = express.Router();

import { signup, login, logout, refresh } from "../controllers/auth_controller.js";

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/refresh", refresh);



export default router;