import React from 'react';

import '../assets/auth/css/stylesheet.css';

function AuthLayout({ children }) {
  return (
    <div className="oxyy-login-register auth-body">
      <div className="container-fluid px-0">
        <div className="row g-0 min-vh-100">
          <div className="col-md-6 d-md-block d-none">
            <div className="hero-wrap d-flex align-items-center h-100">
              <div className="hero-mask opacity-8 hero-mask-onboarding"></div>
              <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: 'url("/images/onboarding/form_bg.png")' }}></div>
              <div className="hero-content w-100 min-vh-100 d-flex flex-column">
                <div className="row g-0">
                  <div className="col-11 col-sm-10 col-lg-9 mx-auto">
                    <div className="logo mt-5 mb-5 mb-md-0">
                      <a className="d-flex" href="" title="mpay-logo">
                        <img src="/images/onboarding/mpay-logo.svg" alt="mpay-logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row g-0 my-auto">
                  <div className="col-11 col-sm-10 col-lg-9 mb-5 mx-6 text-end">
                    <img src="/images/onboarding/dots.svg" alt="" />
                  </div>
                  <div className="col-11 col-sm-10 col-lg-9 mb-5 mx-auto">
                    <img src="/images/onboarding/apostrophe.svg" alt="" width="25" />
                  </div>
                  <div className="col-11 col-sm-10 col-lg-9 mx-auto">
                    <p className="text-4 text-white lh-base">
                      Create a Marasoft account and get full access to all features. Trusted by over 4,000 businesses
                      across Africa.
                    </p>
                  </div>
                  <div className="col-11 col-sm-10 col-lg-9 mt-4 mx-auto text-start">
                    <p className="text-4 text-white lh-base quote_author">
                      Marasoft Pay <img src="/images/onboarding/circle check full.svg" alt="" />
                    </p>
                  </div>
                  <div className="col-11 col-sm-10 col-lg-9 mt-4 mx-4 text-end">
                    <img src="/images/onboarding/arrow-down.svg" alt="" width="25" />
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-11 col-sm-10 col-lg-12 mx-auto">
                    <div className="d-flex justify-content-between">
                      <div className="vector_1">
                        <img src="/images/onboarding/vector_1.svg" alt="" />
                      </div>
                      <div className="vector_2">
                        <img src="/images/onboarding/vector_2.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center order-2 order-md-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
