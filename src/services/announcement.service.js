import { supabase } from "../config/supabase.js"

export async function getAllAnnouncements() {
  const { data, error } = await supabase
    .from("announcement")
    .select("*")
  if (error) throw new Error(error.message)
  return data
}

export async function createAnnouncement(payload) {
  const { data, error } = await supabase
    .from("announcement")
    .insert([payload])
  if (error) throw new Error(error.message)
  return data[0]
}

export async function updateAnnouncement(id, updates) {
  const { data, error } = await supabase
    .from("announcement")
    .update(updates)
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deleteAnnouncement(id) {
  const { data, error } = await supabase
    .from("announcement")
    .delete()
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}
