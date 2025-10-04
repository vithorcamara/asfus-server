import { supabase } from "../config/supabase.js"

export async function getAllPhotos() {
  const { data, error } = await supabase
    .from("photo")
    .select("*")
  if (error) throw new Error(error.message)
  return data
}

export async function createPhoto(payload) {
  const { data, error } = await supabase
    .from("photo")
    .insert([payload])
  if (error) throw new Error(error.message)
  return data[0]
}

export async function updatePhoto(id, updates) {
  const { data, error } = await supabase
    .from("photo")
    .update(updates)
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deletePhoto(id) {
  const { data, error } = await supabase
    .from("photo")
    .delete()
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}
