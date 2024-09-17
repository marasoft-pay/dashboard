import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeMobile = () => {
    return (
        <div id="main-wrapper" className="oxyy-login-register">
            <div className="container-fluid px-0">
                <div className="row g-0 min-vh-100">
                    <div className="col-md-6">
                        <div className="hero-wrap hero-wrap-mobile d-flex align-items-center h-100">
                            <div className="hero-mask opacity-8 hero-mask-onboarding hero-mask-onboarding-mobile"></div>
                            <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: "url('/images/onboarding/form_bg.png')" }}></div>
                            <div className="hero-content w-100 min-vh-100 d-flex flex-column">
                                <div className="row g-0">
                                    <div className="col-11 col-sm-10 col-lg-9 mx-4">
                                        <div className="logo mt-5 mb-5 mb-md-0">
                                            <a className="d-flex" href="/" title="mpay-logo">
                                                <img src="/images/onboarding/mpay-logo-blue.svg" alt="mpay-logo" width="150" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 my-auto mx-4 welcome_mobile">
                                    <h4 className="text-white mt-5 mb-2">Welcome 👋🏽</h4>
                                    <p className="text-2 text-light lh-base mb-3">Welcome to Marasoft Pay, Join now to start banking on the move</p>

                                    <div className="d-grid my-0">
                                        <Link to="/auth/signup" className="btn btn-primary text-1 submit-btn landing-btn-mobile " type="submit">Get Started</Link>
                                        <p className="text-center text-light mt-2 text-2 ">
                                            Already have an account? &nbsp;
                                            <Link to="/auth/login" className="text-decoration-none signin-mobile">Sign In</Link>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeMobile;
