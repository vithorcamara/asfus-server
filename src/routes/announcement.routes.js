import express from "express"
import * as announcementController from "../controllers/announcement.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", announcementController.getAll)

router.post("/", authMiddleware, announcementController.create)
router.put("/:id", authMiddleware, announcementController.update)
router.delete("/:id", authMiddleware, announcementController.remove)

export default router
