import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from '../components/AuthLayout';
import useFormValidation from '../hooks/useFormValidation';
import usePageTitle from "../components/Title";
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../context/ProgressContext';
import { AppKeyContext } from '../context/AppKeyContext';

function Signup() {
    usePageTitle("Signup");

    const { formData, passwordValid, isFormValid, passwordMatch, handleChange } = useFormValidation({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { email, password, confirmPassword } = formData;
    const { setProgress } = useProgress();
    const { appKey } = useContext(AppKeyContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setProgress(20);
    }, [setProgress]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid || !passwordMatch) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://staging.marasoftbank.com/oop/api/dashboard/auth/signup', {
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
        } finally {
            setIsLoading(false);
        }
    };

    const isConfirmPasswordFilled = confirmPassword.length > 0;

    return (
        <AuthLayout>
            <div className="container header_scroll pt-5 pb-4">
                <div className="row gx-0">
                    <div className="col-11 col-md-10 mx-auto">
                        <p className="text-end text-muted mb-0 have-an-account">
                            Already have an account? <Link to="/auth/login" className="text-decoration-none">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container form_scroll my-0 py-5 form_container_mobile">
                <div className="row g-0">
                    <div className="col-11 col-sm-10 col-lg-9 col-xl-8 mx-auto">
                        <ProgressBar progress={20} />
                        <h3 className="fw-600 mb-2 mt-4 form_header">Sign Up</h3>
                        <hr className="onboarding-hr" />
                        <form id="registerForm" method="post" onSubmit={handleSubmit}>
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
                                <label htmlFor="createPassword" className="form-label">Create Password*</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="createPassword"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div className="mb-4 maraform-control">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    required
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className="maraform-control mx-3">
                                <ul className="list-group psw_requirements">
                                    <li className="form-label">PASSWORD REQUIREMENTS</li>
                                    <li className={passwordValid.hasUpperCase ? 'text-success' : 'psw-text-muted'}>Upper case</li>
                                    <li className={passwordValid.hasLowerCase ? 'text-success' : 'psw-text-muted'}>Lower case</li>
                                    <li className={passwordValid.hasNumber ? 'text-success' : 'psw-text-muted'}>Number</li>
                                    <li className={passwordValid.hasSpecialChar ? 'text-success' : 'psw-text-muted'}>Special Characters</li>
                                    <li className={passwordValid.isLengthValid ? 'text-success' : 'psw-text-muted'}>Not less than 8 digits</li>
                                    {isConfirmPasswordFilled && !passwordMatch && <li className="text-danger">Passwords do not match</li>}
                                </ul>
                            </div>
                            <div className="d-grid my-4 maraform-control">
                                <button className={`btn btn-primary submit-btn ${!isFormValid || !passwordMatch ? 'disabled-btn' : ''}`} type="submit" disabled={!isFormValid || !passwordMatch}>
                                    {isLoading ? 'Loading...' : 'Continue'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Signup;
