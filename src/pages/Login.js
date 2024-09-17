import React, {useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from '../components/AuthLayout';
import useFormValidation from '../hooks/useFormValidation';
import usePageTitle from "../components/Title";
import { AppKeyContext } from '../context/AppKeyContext';


function Signin() {

  usePageTitle("Signin");

  const { formData, isLoginValid, handleChange } = useFormValidation({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const { appKey } = useContext(AppKeyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://staging.marasoftbank.com/oop/api/dashboard/auth/login', {
        method: 'POST',
        headers: {
          'app_key': appKey
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log('Signup successful:', data);
      navigate('/auth/login');

    } catch (error) {
      console.error('Error during signup:', error);
    } 
  };

  return (
    <AuthLayout>
      <div className="container header_scroll pt-5 pb-4">
        <div className="row gx-0">
          <div className="col-11 col-md-10 mx-auto">
            <p className="text-end text-muted mb-0 have-an-account">
              Don't have an account? <Link to="/auth/signup" className="text-decoration-none">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container form_scroll my-0 py-5 form_container_mobile">
        <div className="row g-0">
          <div className="col-11 col-sm-10 col-lg-9 col-xl-8 mx-auto">
            <h3 className="fw-600 mb-4 form_header">Sign In</h3>
            <hr className="onboarding-hr" />
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="mb-4 mt-4 maraform-control">
                <label htmlFor="emailAddress" className="form-label">Email Address*</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="Enter valid email address"
                />
              </div>
              <div className="mb-4 maraform-control">
                <label htmlFor="loginPassword" className="form-label">Password*</label>
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  placeholder="Enter Password"
                />
              </div>
              <div className="d-grid my-4 maraform-control">
                <button className={`btn btn-primary submit-btn ${!isLoginValid ? 'disabled-btn' : ''}`} type="submit" disabled={!isLoginValid}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Signin;
