import React, { Component } from "react";
import { Form, FormGroup } from "reactstrap";
import { FaUserAlt, FaLock, FaMailBulk, FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends Component {
  state = {
    password: "",
    confirmPassword: "",
    not_Match: null
  };

  updatePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  updateConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  checkMatch = e => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ not_Match: true });
    } else {
      this.setState({ not_Match: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password Dosn't match");
    } else {
      alert(" Success !");
    }
  };

  render() {
    const style = { transition: " all .3s ease-in-out" }
    return (
      <Form className="register-form"
       onSubmit={this.handleSubmit}>
        <div>
          <h2 className="text-center">Create Account</h2>
        </div>
        <div className="container">
          <div className="row">
            {/* First name */}
            <FormGroup className="col-4 first-name">
              <div className="form-group input-group w-50 ">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <FaUserAlt />
                  </span>
                </div>
                <input
                  validator="isName"
                  required
                  type="name"
                  name="name"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
            </FormGroup>

            {/* Last name */}
            <FormGroup className="col-4 last-name">
              <div className="form-group input-group w-75">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <FaUserAlt />
                  </span>
                </div>
                <input
                  validator="isName"
                  required
                  type="name"
                  name="name"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </FormGroup>
            {/* Email Adress */}
            <FormGroup className="col-8">
              <div className="form-group input-group w-50">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <FaMailBulk />
                  </span>
                </div>
                <input
                  validator="isEmail"
                  required
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </FormGroup>

            {/* Password */}
            <FormGroup className="col-8">
              <div className="form-group input-group w-50">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <FaLock />
                  </span>
                </div>
                <input
                  validator="isPassword"
                  required
                  type="password"
                  onChange={this.updatePassword}
                  name="Password"
                  className="form-control"
                  maxLength="8"
                  placeholder="Password"
                />
              </div>
            </FormGroup>

            {/* Confirm-Password */}
            <FormGroup className="col-8">
              <div
                onKeyUp={this.checkMatch}
                className="form-group input-group w-50"
              >
                <div className="input-group-prepend">
                  {this.state.not_Match !== null && (
                    <span
                      className={
                        this.state.not_Match
                          ? "input-group-text pass-not-Matched"
                          : "input-group-text pass-Matched"
                      }
                    >
                      <FaFingerprint style={style} />
                    </span>
                  )}
                </div>
                <input
                  validator="isPassword"
                  required
                  type="password"
                  onChange={this.updateConfirmPassword}
                  name="confirmPassword"
                  className="form-control"
                  maxLength="8"
                  placeholder="Confirm Password"
                />
              </div>
            </FormGroup>

            {/* Gander */}
            <FormGroup className="col-8">
              <div className="center ">
                <h6 className="gander">Gander :</h6>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  required
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  className="custom-control-input"
                ></input>
                <label className="custom-control-label" htmlFor="customRadioInline1">
                  Male
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  className="custom-control-input"
                ></input>
                <label className="custom-control-label" htmlFor="customRadioInline2">
                  Female
                </label>
              </div>
            </FormGroup>

            {/* BIRTHDATE */}
            <FormGroup className="col-8">
              <div className="center ">
                <h6 className="birth-data">Birth Data :</h6>
              </div>
              <div className='form-group position-relative'>
                <input
                  required
                  label="Birth date"
                  type="date"
                  name="birthDate"
                />
              </div>
            </FormGroup>

            {/* Upload Photo */}
            <FormGroup className="col-8">
              <div className="custom-file w-50">
                <input
                  type="file"
                  required
                  className="custom-file-input"
                  id="customFile"
                ></input>
                <label className="custom-file-label" htmlFor="customFile">
                  Upload Photo
                </label>
              </div>
            </FormGroup>

            {/* Submit Section */}
            <div className="submit-register col-5">
              <button type="submit" className="btn btn-primary btn-block w-25">
                Register
              </button>
              <div className="reg-option">
                <span>Have an account? &nbsp;</span>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default Register;
