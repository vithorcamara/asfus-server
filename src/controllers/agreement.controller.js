import * as agreementService from "../services/agreement.service.js"

export async function getAll(req, res, next) {
  try {
    const agreements = await agreementService.getAllAgreements()
    res.json(agreements)
  } catch (err) {
    next(err)
  }
}

export async function create(req, res, next) {
  try {
    const newAgreement = await agreementService.createAgreement(req.body)
    res.status(201).json(newAgreement)
  } catch (err) {
    next(err)
  }
}

export async function update(req, res, next) {
  try {
    const updatedAgreement = await agreementService.updateAgreement(req.params.id, req.body)
    res.json(updatedAgreement)
  } catch (err) {
    next(err)
  }
}

export async function remove(req, res, next) {
  try {
    const deletedAgreement = await agreementService.deleteAgreement(req.params.id)
    res.json(deletedAgreement)
  } catch (err) {
    next(err)
  }
}
