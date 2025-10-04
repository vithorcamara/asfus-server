import { supabase } from "../config/supabase.js"

export async function getAllNews() {
  const { data, error } = await supabase
  .from("news")
  .select("*")
  if (error) throw new Error(error.message)
  return data
}

export async function createNews(payload) {
  const { data, error } = await supabase
  .from("news")
  .insert([payload])
  if (error) throw new Error(error.message)
  return data[0]
}

export async function updateNews(id, updates) {
  const { data, error } = await supabase
  .from("news")
  .update(updates)
  .eq("id", id)
  .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deleteNews(id) {
  const { data, error } = await supabase
  .from("news")
  .delete()
  .eq("id", id)
  .single()
  if (error) throw new Error(error.message)
  return data
}
