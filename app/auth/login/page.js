'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/login.css'; // Import file CSS
import { signIn } from 'next-auth/react'; // Import signIn dari NextAuth

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error

    // Kirim data login ke API
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
 
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Invalid email or password');
      }

      // Simpan status login jika login berhasil (optional)
      localStorage.setItem('isLoggedIn', 'true'); // Simpan status login

      // Redirect ke halaman user setelah login sukses
      router.push('/user');
    } catch (err) {
      setError(err.message); // Tampilkan error jika terjadi kesalahan
    }
  };

  const handleGoogleLogin = async () => {
    const result = await signIn('google', { callbackUrl: '/user' });

    if (result?.error) {
      setError('Google login failed');
      console.error('Google login error:', result.error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <button type="submit" className="button">Login</button>
        </form>

        {/* Google Login Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Login with Google
          </button>
        </div>

        <div className="text-link">
          <span>Don't have an account? </span>
          <a href="/auth/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
