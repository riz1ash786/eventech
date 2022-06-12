import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import "./Login.css";
const Login = () => {
const [formState, setFormState] = useState({ email: '', password: '' });
const [login, { error, data }] = useMutation(LOGIN_USER);

// update state based on form input changes
const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });
};

// submit form
const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
  try {
    const { data } = await login({
      variables: { ...formState },
    });

    Auth.login(data.login.token);
  } catch (e) {
    console.error(e);
  }

  // clear form values
  setFormState({
    email: '',
    password: '',
  });
};

return (
  <main>
    <div className="auth-wrapper">
        <div className="auth-inner">
        <div>
        <h3>Login</h3>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
             <div className="mb-3">
              <label>Email</label>
              <input
                placeholder="Your email"
                name="email"
                type="email"
                className="form-control"
                value={formState.email}
                onChange={handleChange}
              />
              </div>
              <div className="mb-3">
              <label>Password</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                className="form-control"
                value={formState.password}
                onChange={handleChange}
              />
              </div>
              <div className="d-grid">
              <button
                style={{ cursor: 'pointer' }}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              </div>
            </form>
          )}

          {error && (
            <div>
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
);
};

export default Login;

  
