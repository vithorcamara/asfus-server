import express from "express"
import * as photoController from "../controllers/photo.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", photoController.getAll)

router.post("/", authMiddleware, photoController.create)
router.put("/:id", authMiddleware, photoController.update)
router.delete("/:id", authMiddleware, photoController.remove)

export default router
