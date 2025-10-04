import express from "express"
import * as agreementController from "../controllers/agreement.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", agreementController.getAll)

router.post("/", authMiddleware, agreementController.create)
router.put("/:id", authMiddleware, agreementController.update)
router.delete("/:id", authMiddleware, agreementController.remove)

export default router
