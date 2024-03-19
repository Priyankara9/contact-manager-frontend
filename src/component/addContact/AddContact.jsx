import React from "react";

export default function AddContact() {
  return (
    <div className="container-fluid">
      <div className="row g-5 justify-content-center align-item-center">
        <div className="col-sm-11 col-md-10 col-lg-8 ">
          <h2>Add Contact Form</h2>
          <form className="needs-validation" noValidate>
            <div className="row g-3  ">
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className=" col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid Phone Number is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="note" className="form-label">
                  Note /Optional
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="note"
                  placeholder=""
                />
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
