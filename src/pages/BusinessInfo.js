import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from '../components/AuthLayout';
import usePageTitle from "../components/Title";
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../context/ProgressContext';

function BusinessInfo() {

    usePageTitle("Business Signup");

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const [selectedAccountType, setSelectedAccountType] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isRegistered, setIsRegistered] = useState('');
    const [bvn, setBvn] = useState('');

    const handleContainerClick = (accountType) => {
        setSelectedAccountType(accountType);
    };



    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    const { setProgress } = useProgress();
    useEffect(() => {
        setProgress(40);
    }, [setProgress]);


    const handleIsRegisteredChange = (event) => {
        setIsRegistered(event.target.value);
    };

    const isFormValid = () => {
        if (!selectedCountry || !selectedAccountType || !isRegistered) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
        navigate('/auth/industry_info');

    };

    return (
        <AuthLayout>
            <div className="container header_scroll pt-5 pb-4">
                <div className="row gx-0">
                    <div className="col-6">
                        <p className="text-start text-muted mb-0 have-an-account mx-3 d-flex back_arrow"
                            onClick={handleBackClick}
                            style={{ cursor: 'pointer' }}>
                            <img src="/images/onboarding/arrow_back_ios_24px.svg" alt="" /> Back
                        </p>
                    </div>
                    <div className="col-6">
                        <p className="text-end text-muted buss_info mb-0 have-an-account mx-5">Business Information</p>
                    </div>
                </div>
            </div>
            <div className="container form_scroll_kyc my-3 py-4 form_container_mobile">
                <div className="row g-0">
                    <div className="col-11 col-sm-10 col-lg-9 col-xl-8 mx-auto">
                        <ProgressBar progress={40} />

                        <hr className="onboarding-hr my-0" />
                        <form id="registerForm" method="post" onSubmit={handleSubmit}>
                            <div className="mb-4 mt-4 maraform-control-kyc">
                                <label htmlFor="country" className="form-label kyc_label">Country Of Operation?</label>
                                <div className="dropdown">
                                    <button
                                        className={`btn country_dropdown dropdown-toggle form-control`}
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {selectedCountry ? (
                                            <>
                                                <img src={selectedCountry.flag} alt={selectedCountry.name} style={{ marginRight: '8px' }} />
                                                {selectedCountry.name}
                                            </>
                                        ) : (
                                            <>
                                                
                                                <div>Select a Country</div>
                                                <span style={{ visibility: 'hidden' }}></span> 
                                            </>
                                        )}
                                    </button>

                                    <ul className="dropdown-menu country_dropdown_ul" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a className="dropdown-item" data-value="Nigeria" onClick={() => handleCountrySelect({ name: 'Nigeria', flag: '/images/onboarding/NGA.svg' })}>
                                                <img src="/images/onboarding/NGA.svg" alt="" /> Nigeria
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" data-value="Kenya" onClick={() => handleCountrySelect({ name: 'Kenya', flag: '/images/onboarding/Kenya.svg' })}>
                                                <img src="/images/onboarding/Kenya.svg" alt="" /> Kenya
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <small className="country_desc">What Country is your business registered?</small> */}
                            </div>
                            <label htmlFor="account_type" className="form-label kyc_label">Account Type?</label>
                            <div className={`mb-3 form-control form-control-radio maraform-control-kyc justify-content-between d-flex ${selectedAccountType === 'individual' ? 'checked' : ''}`}
                                onClick={() => handleContainerClick('individual')}>
                                <div>
                                    <p className="form-check-label radio-label-bold" htmlFor="individualBusiness">
                                        Individual Business
                                    </p>
                                    <p className="form-check-label radio-label" htmlFor="individualBusiness">
                                        For small to medium scale businesses
                                    </p>
                                </div>
                                <div className="align-content-center">
                                    <input
                                        className="form-check-input input_radio"
                                        type="radio"
                                        name="accountType"
                                        id="individualBusiness"
                                        value="individual"
                                        checked={selectedAccountType === 'individual'}
                                        onChange={() => setSelectedAccountType('individual')}
                                    />
                                </div>
                            </div>
                            <div className={`mb-3 form-control form-control-radio maraform-control-kyc justify-content-between d-flex ${selectedAccountType === 'corporate' ? 'checked' : ''}`}
                                onClick={() => handleContainerClick('corporate')}>
                                <div>
                                    <p className="form-check-label radio-label-bold" htmlFor="corporateBusiness">
                                        Corporate Business
                                    </p>
                                    <p className="form-check-label radio-label" htmlFor="corporateBusiness">
                                        Best for large Chains and Enterprises
                                    </p>
                                </div>
                                <div className="align-content-center">
                                    <input
                                        className="form-check-input input_radio"
                                        type="radio"
                                        name="accountType"
                                        id="corporateBusiness"
                                        value="corporate"
                                        checked={selectedAccountType === 'corporate'}
                                        onChange={() => setSelectedAccountType('corporate')}
                                    />
                                </div>
                            </div>
                            {selectedAccountType && (
                                <div className="mb-3">
                                    <p className="form-check-label business_reg_info radio-label-bold">
                                        Is your business registered with CAC?
                                    </p>
                                    <label className="form-label kyc_label">Yes</label> &nbsp;
                                    <input className="form-check-input" type="radio" name="isRegistered" id="registeredYes" value="yes" onChange={handleIsRegisteredChange} />
                                    &nbsp;&nbsp;&nbsp;
                                    <label className="form-label kyc_label">No</label> &nbsp;
                                    <input className="form-check-input" type="radio" name="isRegistered" id="registeredNo" value="no" onChange={handleIsRegisteredChange} />
                                </div>
                            )}
                            <div className="d-grid my-4 maraform-control-kyc">
                                <button className={`btn btn-primary submit-btn ${!isFormValid() ? 'disabled-btn' : ''}`} type="submit" disabled={!isFormValid()} >
                                    Next
                                </button>

                            </div>
                            <small className="text-center info-secure"><img src="/images/onboarding/lock_24px.svg" alt="" /> Your Info is safely secured </small>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default BusinessInfo;
