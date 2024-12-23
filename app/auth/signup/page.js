'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/signup.css'; // Import file CSS
import { signIn } from 'next-auth/react'; // Import signIn dari NextAuth

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (name && email && password) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      router.push('/auth/login');
    } else {
      setError('Please fill in all fields');
    }
  };

  const handleGoogleLogin = async () => {
    // Trigger Google OAuth login through NextAuth
    const result = await signIn('google', { callbackUrl: '/user' });
    if (result?.error) {
      console.error('Google Login failed:', result.error);
    }
  };


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Buat Akun</h2>

        <form className="signup-form" onSubmit={handleSignUp}>
          <div>
            <label className="signup-label">Nama Lengkap</label>
            <input
              type="text"
              className="signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="signup-label">Email</label>
            <input
              type="email"
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="signup-label">Password</label>
            <input
              type="password"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="signup-label">Confirm Password</label>
            <input
              type="password"
              className="signup-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="signup-error">{error}</p>}

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {/* Google OAuth login button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Sign Up with Google
          </button>
        </div>

        <p className="signup-login">
        Already have an account?{' '}
          <a href="/auth/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
