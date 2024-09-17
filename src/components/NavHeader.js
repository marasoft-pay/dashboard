import React from 'react';

const NavHeader = () => {
    return (
        <div className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="nav-item">
                                <div className="input-group">
                                    <h3 className="welcome-area">Welcome, Khalid</h3>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav header-right">
                            <li className="currency">
                                <div className="basic-form">
                                    <form>
                                        <div className="row align-items-center">
                                            <div className="col-auto my-1">
                                                <select className="default-select form-control wide" id="inlineFormCustomSelect">
                                                    <option value="" selected>NGN</option>
                                                    <option value="">KSH</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                    <img src="images/dashboard/profile-1.jpg" width="56" alt="Profile" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavHeader;