import * as eventService from "../services/event.service.js"

export async function getAll(req, res, next) {
  try {
    const events = await eventService.getAllEvents()
    res.json(events)
  } catch (err) {
    next(err)
  }
}

export async function create(req, res, next) {
  try {
    const newEvent = await eventService.createEvent(req.body)
    res.status(201).json(newEvent)
  } catch (err) {
    next(err)
  }
}

export async function update(req, res, next) {
  try {
    const updatedEvent = await eventService.updateEvent(req.params.id, req.body)
    res.json(updatedEvent)
  } catch (err) {
    next(err)
  }
}

export async function remove(req, res, next) {
  try {
    const deletedEvent = await eventService.deleteEvent(req.params.id)
    res.json(deletedEvent)
  } catch (err) {
    next(err)
  }
}
