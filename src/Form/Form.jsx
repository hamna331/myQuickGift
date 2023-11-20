import React from "react";
import "../Form/Form.css";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { initialFormData, validationSchema } from './FormData';

const validationSchema = Yup.object().shape({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  position: Yup.string().required("Position is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.string().required("Zip Code is required"),
});

const YourFormComponent = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      position: "",
      phone: "",
      email: "",
      address: "",
      state: "",
      city: "",
      zipCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
    },
  });

  return (
    <>
      <div class="container-fluid main d-flex align-items-center justify-content-center">
        <div class="text-center mt-5">
          <h1>GOLDEN GIFT FORM</h1>
          <p>
            Enter your order details, and a team member will be in contact with
            you shortly.
          </p>
        </div>
      </div>
      <div className="container form mt-5">
        <div className="row d-flex justify-content-center">
          <div className="form">
            <h3 className="text-center">Contact Details</h3>
            <div className="row flex-wrap">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label" htmlFor="fName">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fName"
                  name="fName"
                  value={formik.values.fName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fName && formik.errors.fName ? (
                  <div className="text-danger">{formik.errors.fName}</div>
                ) : null}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <label className="form-label" htmlFor="lName">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lName"
                  name="lName"
                  value={formik.values.lName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lName && formik.errors.lName ? (
                  <div className="text-danger">{formik.errors.lName}</div>
                ) : null}
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <label className="form-label" htmlFor="position">
                  Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  name="position"
                  value={formik.values.position}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.position && formik.errors.position ? (
                  <div className="text-danger">{formik.errors.position}</div>
                ) : null}
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="form-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-danger">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="form-label" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger">{formik.errors.address}</div>
                ) : null}
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                  <select
                    className="form-control"
                    id="state"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select State</option>
                    {/* Add other options here */}
                  </select>
                  {formik.touched.state && formik.errors.state ? (
                    <div className="text-danger">{formik.errors.state}</div>
                  ) : null}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <div className="text-danger">{formik.errors.city}</div>
                  ) : null}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <label className="form-label" htmlFor="zipCode">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.zipCode && formik.errors.zipCode ? (
                    <div className="text-danger">{formik.errors.zipCode}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex w-75  d-flex justify-content-center">
            <input
              className="checkboxMark "
              type="checkbox"
              id="myCheckbox"
              value="true"
              formControlName="checkBox"
            />
            <label className="form-label mt-0 checkbox" for="myCheckbox">
              I’m ready to order corporate gifts now!
            </label>
          </div>
        </div>
        <div className="btn-top d-flex justify-content-center  mt-5">
          <button type="submit" class=" btn-primary-1 submitted ">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default YourFormComponent;
