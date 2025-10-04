import express from "express"

// Importa todas as rotas individuais
import newsRoutes from "./news.routes.js"
import eventsRoutes from "./event.routes.js"
import agreementsRoutes from "./agreement.routes.js"
import announcementsRoutes from "./announcement.routes.js"
import photosRoutes from "./photo.routes.js"
import associatesRoutes from "./associate.routes.js"
import authRoutes from "./auth.routes.js"

const router = express.Router()

// Define o prefixo de cada recurso
router.use("/news", newsRoutes)
router.use("/events", eventsRoutes)
router.use("/agreements", agreementsRoutes)
router.use("/announcements", announcementsRoutes)
router.use("/photos", photosRoutes)
router.use("/associates", associatesRoutes)
router.use("/auth", authRoutes)

// Rota base para teste / status
router.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" })
})

export default router
