'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/login.css'; // Import file CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Simulate authentication
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      console.log('Login success!'); // Debugging log
      router.push('/blog'); // Redirect to blog page after successful login
    } else {
      console.log('Invalid credentials:', email, password); // Debugging log
      setError('Invalid email or password');
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

        <div className="text-link">
          <span>Belum memiliki akun? </span>
          <a href="/auth/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
