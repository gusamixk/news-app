import User from '@/app/lib/models/user'; // Model User
import { ConnectDB } from '@/app/lib/config/db'; // Koneksi MongoDB
import bcrypt from 'bcryptjs'; // Untuk memverifikasi password

export async function POST(req) {
  const { email, password } = await req.json();

  await ConnectDB();

  const user = await User.findOne({ email });

  if (!user) {
    return new Response(JSON.stringify({ success: false, message: 'User not found' }), {
      status: 404,
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return new Response(JSON.stringify({ success: false, message: 'Invalid password' }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
