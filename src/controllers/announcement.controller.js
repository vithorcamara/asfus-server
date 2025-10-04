import * as announcementService from "../services/announcement.service.js"

export async function getAll(req, res, next) {
  try {
    const announcements = await announcementService.getAllAnnouncements()
    res.json(announcements)
  } catch (err) {
    next(err)
  }
}

export async function create(req, res, next) {
  try {
    const newAnnouncement = await announcementService.createAnnouncement(req.body)
    res.status(201).json(newAnnouncement)
  } catch (err) {
    next(err)
  }
}

export async function update(req, res, next) {
  try {
    const updatedAnnouncement = await announcementService.updateAnnouncement(req.params.id, req.body)
    res.json(updatedAnnouncement)
  } catch (err) {
    next(err)
  }
}

export async function remove(req, res, next) {
  try {
    const deletedAnnouncement = await announcementService.deleteAnnouncement(req.params.id)
    res.json(deletedAnnouncement)
  } catch (err) {
    next(err)
  }
}
