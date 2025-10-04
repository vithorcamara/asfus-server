import { supabase } from "../config/supabase.js"

/**
 * GET /associados/pending
 * Obtém todos os associados que ainda não foram aprovados
 */
export async function getPendingAssociates() {
  const { data, error } = await supabase
    .from("associates")
    .select("*")
    .eq("approved", false)

  if (error) throw new Error(error.message)
  return data
}

/**
 * PUT /associados/:id/approve
 * Aprova um associado
 */
export async function approveAssociate(id) {
  const { data, error } = await supabase
    .from("associates")
    .update({ approved: true })
    .eq("id", id)
    .single()

  if (error) throw new Error(error.message)
  return data
}

/**
 * POST /associados/:id/dependents
 * Adiciona um novo dependente a um associado
 */
export async function addDependent(associateId, dependent) {
  const { data, error } = await supabase
    .from("dependents")
    .insert([{ ...dependent, associate_id: associateId }])

  if (error) throw new Error(error.message)
  return data[0]
}

/**
 * PUT /associados/:id/dependents/:dependentId
 * Atualiza um dependente
 */
export async function updateDependent(associateId, dependentId, updates) {
  const { data, error } = await supabase
    .from("dependents")
    .update(updates)
    .eq("id", dependentId)
    .eq("associate_id", associateId)
    .single()

  if (error) throw new Error(error.message)
  return data
}

/**
 * DELETE /associados/:id/dependents/:dependentId
 * Remove um dependente
 */
export async function deleteDependent(associateId, dependentId) {
  const { data, error } = await supabase
    .from("dependents")
    .delete()
    .eq("id", dependentId)
    .eq("associate_id", associateId)
    .single()

  if (error) throw new Error(error.message)
  return data
}
