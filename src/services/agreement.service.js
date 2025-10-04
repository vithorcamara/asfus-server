import { supabase } from "../config/supabase.js"

export async function getAllAgreements() {
  const { data, error } = await supabase
    .from("agreement")
    .select("*")
  if (error) throw new Error(error.message)
  return data
}

export async function createAgreement(payload) {
  const { data, error } = await supabase
    .from("agreement")
    .insert([payload])
  if (error) throw new Error(error.message)
  return data[0]
}

export async function updateAgreement(id, updates) {
  const { data, error } = await supabase
    .from("agreement")
    .update(updates)
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deleteAgreement(id) {
  const { data, error } = await supabase
    .from("agreement")
    .delete()
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}
