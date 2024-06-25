import express from "express";
import { sendMessage, getMessages } from "../controllers/message_controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get('/:id', protectRoute, getMessages);


export default router;