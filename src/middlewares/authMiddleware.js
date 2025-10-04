import { supabase } from "../config/supabase.js"

/**
 * Middleware para proteger rotas
 * Verifica se o token JWT do Supabase é válido
 */
export async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ error: "Token não fornecido" })
    }

    const token = authHeader.replace("Bearer ", "")

    // Verifica o token no Supabase
    const { data, error } = await supabase.auth.getUser(token)

    if (error || !data.user) {
      return res.status(401).json({ error: "Token inválido ou expirado" })
    }

    req.user = data.user // adiciona info do usuário à requisição
    next()
  } catch (err) {
    res.status(500).json({ error: "Erro ao validar token" })
  }
}
