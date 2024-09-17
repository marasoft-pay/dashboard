import React from 'react';

const KYC = () => {
  return (
    <div className="container-fluid dashboard-container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-12">
          <div>
            <div className="card-header card-head-title pb-0">
              <h2 className="mb-3 me-auto activate-kyc">
                <span>Hello Khalid</span>, Let's help you activate your account.
              </h2>
              <p style={{ color: '#000000' }} className="mb-0">Please provide the requested Information.</p>
            </div>
            <div className="card-body">
              <div className="col-lg-10">
                <div className="nav flex-column nav-pills mb-3 kyc-tabs">
                  <a href="#personal-info" data-bs-toggle="pill" className="nav-link active show">
                    <div>
                      <span>Personal Information</span>
                      <p className="mb-0">Verify personal information</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <a href="#business-info" data-bs-toggle="pill" className="nav-link">
                    <div>
                      <span>Business Information</span>
                      <p className="mb-0">Verify business information</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <a href="#documents-info" data-bs-toggle="pill" className="nav-link">
                    <div>
                      <span>Documents</span>
                      <p className="mb-0">Verify required documents</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-12">
          <div className="tab-content">
            <div id="personal-info" className="tab-pane fade active show">
              <div className="card-header card-head-title pb-0">
                <h2 className="mb-0 me-auto">Personal Information.</h2>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form className="kyc-form">
                    <div className="row">
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Fullname<sup>*</sup></label>
                        <input type="text" className="form-control form-control-lg" placeholder="Fullname" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Phone Number<sup>*</sup></label>
                        <input type="text" className="form-control form-control-lg" placeholder="0000 0000 000" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Account Name<sup>*</sup></label>
                        <input type="text" className="form-control form-control-lg" placeholder="Account Name" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">BVN Number<sup>*</sup></label>
                        <input type="text" className="form-control form-control-lg" placeholder="BVN Number" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Date of Birth<sup>*</sup></label>
                        <input type="date" className="form-control form-control-lg" placeholder="Date of Birth" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Address<sup>*</sup></label>
                        <input type="text" className="form-control form-control-lg" placeholder="Address" />
                      </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary float-end save-continue-btn">Save & Continue</button>
                    <button type="button" className="btn btn-primary float-end me-3 back-btn">Back</button>
                  </form>
                </div>
              </div>
            </div>

            <div id="business-info" className="tab-pane fade">
              <div className="card-header card-head-title pb-0">
                <h2 className="mb-0 me-auto">Business Information.</h2>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form className="kyc-form">
                    <div className="row">
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Business Name</label>
                        <input type="text" className="form-control form-control-lg" placeholder="Business Name" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Business Description ( Max 50 Characters )</label>
                        <textarea className="form-control form-control-lg" rows="4" cols="50" placeholder="Business Description"></textarea>
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Website</label>
                        <input type="text" className="form-control form-control-lg" placeholder="Website URL" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Industry Type</label>
                        <select id="inputState" className="default-select form-control form-control-lg wide">
                          <option selected>Laundry</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                        <hr />
                      </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary float-end save-continue-btn">Save & Continue</button>
                    <button type="button" className="btn btn-primary float-end me-3 back-btn">Back</button>
                  </form>
                </div>
              </div>
            </div>

            <div id="documents-info" className="tab-pane fade">
              <div className="card-header card-head-title pb-0">
                <h2 className="mb-0 me-auto">Documents.</h2>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form className="kyc-form">
                    <div className="row">
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Utility Bill<sup>*</sup> <span style={{ color: '#1236F4' }}>(View Sample document)</span></label>
                        <input type="text" className="form-control form-control-lg" placeholder="Utility Bill" />
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">National ID or Driver’s License<sup>*</sup> <span style={{ color: '#1236F4' }}>(View Sample document)</span></label>
                        <textarea className="form-control form-control-lg" rows="4" cols="50" placeholder="National ID or Driver’s License"></textarea>
                        <hr />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Photo<sup>*</sup> <span style={{ color: '#1236F4' }}>(View Sample document)</span></label>
                        <input type="text" className="form-control form-control-lg" placeholder="Photo" />
                        <hr />
                      </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary float-end save-continue-btn">Save & Continue</button>
                    <button type="button" className="btn btn-primary float-end me-3 back-btn">Back</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;