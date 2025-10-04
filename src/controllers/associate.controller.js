import * as associateService from "../services/associate.service.js"

export async function getPending(req, res, next) {
  try {
    const associates = await associateService.getPendingAssociates()
    res.json(associates)
  } catch (err) {
    next(err)
  }
}

export async function approve(req, res, next) {
  try {
    const { id } = req.params
    const associate = await associateService.approveAssociate(id)
    res.json(associate)
  } catch (err) {
    next(err)
  }
}

export async function addDependent(req, res, next) {
  try {
    const { id } = req.params
    const dependent = await associateService.addDependent(id, req.body)
    res.status(201).json(dependent)
  } catch (err) {
    next(err)
  }
}

export async function updateDependent(req, res, next) {
  try {
    const { id, dependenteId } = req.params
    const dependent = await associateService.updateDependent(id, dependenteId, req.body)
    res.json(dependent)
  } catch (err) {
    next(err)
  }
}

export async function deleteDependent(req, res, next) {
  try {
    const { id, dependenteId } = req.params
    const deleted = await associateService.deleteDependent(id, dependenteId)
    res.json(deleted)
  } catch (err) {
    next(err)
  }
}
