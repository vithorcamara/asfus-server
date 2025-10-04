import express from "express"
import * as associateController from "../controllers/associate.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.use(authMiddleware)

router.get("/pending", associateController.getPending)
router.put("/:id/approve", associateController.approve)
router.post("/:id/dependents", associateController.addDependent)
router.put("/:id/dependents/:dependenteId", associateController.updateDependent)
router.delete("/:id/dependents/:dependenteId", associateController.deleteDependent)

export default router
