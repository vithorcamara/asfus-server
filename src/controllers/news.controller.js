import * as newsService from "../services/news.service.js"

export async function getAll(req, res, next) {
  try {
    const news = await newsService.getAllNews()
    res.json(news)
  } catch (err) {
    next(err)
  }
}

export async function create(req, res, next) {
  try {
    const created = await newsService.createNews(req.body)
    res.status(201).json(created)
  } catch (err) {
    next(err)
  }
}

export async function update(req, res, next) {
  try {
    const updated = await newsService.updateNews(req.params.id, req.body)
    res.json(updated)
  } catch (err) {
    next(err)
  }
}

export async function remove(req, res, next) {
  try {
    const deleted = await newsService.deleteNews(req.params.id)
    res.json(deleted)
  } catch (err) {
    next(err)
  }
}
