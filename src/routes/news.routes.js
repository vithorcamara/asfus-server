import express from "express"
import * as newsController from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", newsController.getAll)

router.post("/", authMiddleware, newsController.create)
router.put("/:id", authMiddleware, newsController.update)
router.delete("/:id", authMiddleware, newsController.remove)

export default router
