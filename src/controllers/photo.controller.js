import * as photoService from "../services/photo.service.js"

export async function getAll(req, res, next) {
  try {
    const photos = await photoService.getAllPhotos()
    res.json(photos)
  } catch (err) {
    next(err)
  }
}

export async function create(req, res, next) {
  try {
    const newPhoto = await photoService.createPhoto(req.body)
    res.status(201).json(newPhoto)
  } catch (err) {
    next(err)
  }
}

export async function update(req, res, next) {
  try {
    const updatedPhoto = await photoService.updatePhoto(req.params.id, req.body)
    res.json(updatedPhoto)
  } catch (err) {
    next(err)
  }
}

export async function remove(req, res, next) {
  try {
    const deletedPhoto = await photoService.deletePhoto(req.params.id)
    res.json(deletedPhoto)
  } catch (err) {
    next(err)
  }
}
