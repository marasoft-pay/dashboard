import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthLayout from '../components/AuthLayout';
import usePageTitle from "../components/Title";
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../context/ProgressContext';

function IndustryInfo() {

    usePageTitle("Business Signup");

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedTransactionVolume, setSelectedTransactionVolume] = useState('');
    const [selectedAccountType, setSelectedAccountType] = useState(''); // Add state for account type if needed
    const [isRegistered, setIsRegistered] = useState(''); // Add state for registration status
    const [bvn, setBvn] = useState(''); // Add state for BVN if needed

    const handleIndustrySelect = (industry) => {
        setSelectedIndustry(industry);
    };

    const handleTransactionVolumeSelect = (volume) => {
        setSelectedTransactionVolume(volume);
    };

    const { setProgress } = useProgress();
    useEffect(() => {
        setProgress(100);
    }, [setProgress]);

    const isFormValid = () => {
        if (!selectedIndustry || !selectedTransactionVolume) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard/settings');
    };

    return (
        <AuthLayout>
            <div className="container header_scroll pt-5 pb-4">
                <div className="row gx-0">
                    <div className="col-6">
                        <p className="text-start text-muted mb-0 have-an-account mx-3 d-flex back_arrow"
                            onClick={handleBackClick}
                            style={{ cursor: 'pointer' }}>
                            <img src="/images/onboarding/arrow_back_ios_24px.svg" alt="Back" /> Back
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
                        <ProgressBar progress={100} />

                        <hr className="onboarding-hr my-0" />
                        <form id="registerForm" method="post" onSubmit={handleSubmit}>
                            <div className="mb-4 mt-4 maraform-control-kyc">
                                <label htmlFor="industry" className="form-label kyc_label">Industry Of Operation?</label>
                                <div className="dropdown">
                                    <button className="btn country_dropdown dropdown-toggle form-control" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selectedIndustry ? (
                                            <>
                                                {selectedIndustry.name}
                                            </>
                                        ) : 'Select an Industry'}
                                    </button>
                                    <ul className="dropdown-menu country_dropdown_ul" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a className="dropdown-item" onClick={() => handleIndustrySelect({ name: 'Technology'})}>
                                                Technology
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" onClick={() => handleIndustrySelect({ name: 'Finance'})}>
                                                 Finance
                                            </a>
                                        </li>
                                        {/* Add more industries as needed */}
                                    </ul>
                                </div>
                            </div>
                            <label htmlFor="transaction_volume" className="form-label kyc_label mb-3">Volume of Monthly Transactions</label>

                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="100M and above" onChange={() => handleTransactionVolumeSelect('100M and above')} />
                                <label className="form-label industry_label">100M and above</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="50M - 100M" onChange={() => handleTransactionVolumeSelect('50M - 100M')} />
                                <label className="form-label industry_label">50M - 100M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="20M - 50M" onChange={() => handleTransactionVolumeSelect('20M - 50M')} />
                                <label className="form-label industry_label">20M - 50M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="10M - 20M" onChange={() => handleTransactionVolumeSelect('10M - 20M')} />
                                <label className="form-label industry_label">10M - 20M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="5M - 10M" onChange={() => handleTransactionVolumeSelect('5M - 10M')} />
                                <label className="form-label industry_label">5M - 10M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="3M - 5M" onChange={() => handleTransactionVolumeSelect('3M - 5M')} />
                                <label className="form-label industry_label">3M - 5M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="1M - 3M" onChange={() => handleTransactionVolumeSelect('1M - 3M')} />
                                <label className="form-label industry_label">1M - 3M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="500K - 1M" onChange={() => handleTransactionVolumeSelect('500K - 1M')} />
                                <label className="form-label industry_label">500K - 1M</label>
                            </div>
                            <div className="mb-2 d-flex gap-3">
                                <input className="form-check-input radio_industrial" type="radio" name="transactionVolume" value="500K and below" onChange={() => handleTransactionVolumeSelect('500K and below')} />
                                <label className="form-label industry_label">500K and below</label>
                            </div>

                            <div className="d-grid my-4 maraform-control-kyc">
                                <button className={`btn btn-primary submit-btn ${!isFormValid() ? 'disabled-btn' : ''}`} type="submit" disabled={!isFormValid()}>
                                    Finish
                                </button>
                            </div>
                            <small className="text-center info-secure"><img src="/images/onboarding/lock_24px.svg" alt="Secure" /> Your Info is safely secured </small>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default IndustryInfo;