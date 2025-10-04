import express from "express"
import router from "./routes/index.js"

const app = express()
app.use(express.json())
app.use("/api", router)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: err.message })
})

export default app
