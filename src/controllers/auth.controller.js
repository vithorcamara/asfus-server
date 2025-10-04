import { supabase } from "../config/supabase.js"

/**
 * Cria um novo usuário (signup)
 */
export async function register(req, res) {
  try {
    const { email, password, ...metadata } = req.body

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata, // você pode salvar dados extras, como nome ou role
      },
    })

    if (error) throw error

    res.status(201).json({
      message: "Usuário registrado com sucesso!",
      user: data.user,
    })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

/**
 * Realiza login e retorna o token JWT
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    res.json({
      message: "Login bem-sucedido!",
      user: data.user,
      access_token: data.session.access_token, // 🔑 token JWT
    })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

/**
 * Realiza logout (invalida o token atual)
 */
export async function logout(req, res) {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    res.json({ message: "Logout realizado com sucesso!" })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
