import { supabase } from "../config/supabase.js"

export async function getAllEvents() {
  const { data, error } = await supabase
    .from("event")
    .select("*")
  if (error) throw new Error(error.message)
  return data
}

export async function createEvent(payload) {
  const { data, error } = await supabase
    .from("event")
    .insert([payload])
  if (error) throw new Error(error.message)
  return data[0]
}

export async function updateEvent(id, updates) {
  const { data, error } = await supabase
    .from("event")
    .update(updates)
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deleteEvent(id) {
  const { data, error } = await supabase
    .from("event")
    .delete()
    .eq("id", id)
    .single()
  if (error) throw new Error(error.message)
  return data
}
