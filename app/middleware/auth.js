import { verifyToken } from "@/utils/auth";

export async function authMiddleware(req) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return new Response(
      JSON.stringify({ error: "Unauthorized, token missing" }),
      { status: 401 }
    );
  }

  try {
    const userData = verifyToken(token);
    return userData; // Kembalikan data pengguna jika token valid
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Unauthorized, token invalid" }),
      { status: 401 }
    );
  }
}
