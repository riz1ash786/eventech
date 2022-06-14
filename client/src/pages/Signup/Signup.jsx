import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';

import Auth from '../../utils/auth';
import "./Signup.css";


const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
      <div className="auth-wrapper">
          <div className="auth-inner">
            {data ? (
              <p>
                <Link to="/"></Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                <label>First name</label>
                <input
                  placeholder="Your username"
                  className="form-control"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                </div>
         
                <div className="mb-3">
                <label>Email address</label>
                <input
                  placeholder="Your email"
                  className="form-control"
                  name="email"
                  type="email"
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
                  value={formState.password}
                  onChange={handleChange}
                  className="form-control"
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
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

