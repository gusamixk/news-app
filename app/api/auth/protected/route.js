import { verifyToken } from "@/app/middleware/auth";

export async function GET(req) {
  // Verifikasi token menggunakan middleware
  const authResponse = verifyToken(req);
  if (authResponse) return authResponse; // Jika token tidak valid, middleware akan mengembalikan Response

  // Jika token valid, lanjutkan ke logic endpoint
  return new Response(
    JSON.stringify({ message: "You have access to this protected route!" }),
    { status: 200 }
  );
}
