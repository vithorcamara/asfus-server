import express from "express"
import * as eventController from "../controllers/event.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", eventController.getAll)

router.post("/", authMiddleware, eventController.create)
router.put("/:id", authMiddleware, eventController.update)
router.delete("/:id", authMiddleware, eventController.remove)

export default router
