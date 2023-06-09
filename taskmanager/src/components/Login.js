import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const API_BASE_URL = 'https://reqres.in/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard');
  });

  return (
    <div className='container'>
      
      <form className='form' onSubmit={handleLogin}>
      {error && <p className='error-message'>{error}</p>}
        <p className='form-title'>Login in to your account</p>
        <div className='input-container'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            <svg
              stroke='currentColor'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                strokeWidth={2}
                strokeLinejoin='round'
                strokeLinecap='round'
              />
            </svg>
          </span>
        </div>
        <div className='input-container'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            <svg
              stroke='currentColor'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                strokeWidth={2}
                strokeLinejoin='round'
                strokeLinecap='round'
              />
              <path
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                strokeWidth={2}
                strokeLinejoin='round'
                strokeLinecap='round'
              />
            </svg>
          </span>
        </div>
        <button className='submit' type='submit'>
          Login in
        </button>
      </form>
    </div>
  );
};

export default Login;
