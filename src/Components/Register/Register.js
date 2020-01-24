import React, { Component } from "react";
import { Form, FormGroup } from "reactstrap";
import { FaUserAlt, FaLock, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Register.scss";

// Email address regular exeprision... 
const emailRegax = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      conf_password: null,
      gender: null,
      chooseOne: '',
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conf_password: "",
        gender: ""
      }
    };
  }

  radioChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  handelSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      alert("Submit is Done !");
    } else {
      console.error("Submit Error !");
    }
  };

  handelChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let { formErrors } = this.state;

    switch (name) {
      // First Name
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "Minimum 3 charechters is required"
            : "";
        break;

      // Last Name
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimum 3 charechters is required" : "";
        break;

      // Email Address
      case "email":
        formErrors.email = emailRegax.test(value)
          ? ""
          : "Invalid Email Address !";
        break;

      // Password
      case "password":
        formErrors.password =
          value.length < 8 ? "Minimum 8 charechters is required" : "";
        break;

      // Conf-password
      case "conf-password":
        const { password } = this.state;
        formErrors.conf_password = value !== password ? "Dosn't matches !" : "";
        break;


      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <Form className="register-form" onSubmit={this.handelSubmit} noValidate>
        <div>
          <h2 className="text-center">Create Account</h2>
        </div>
        <div className="container">
          {/* First name */}
          <FormGroup className="first-name">
            <div className="form-group input-group w-50">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaUserAlt />
                </span>
              </div>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                noValidate
                onChange={this.handelChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="alert alert-danger">
                  {formErrors.firstName}
                </span>
              )}
            </div>
          </FormGroup>

          {/* Last name */}
          <FormGroup className=" last-name">
            <div className="form-group input-group w-50">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaUserAlt />
                </span>
              </div>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                noValidate
                onChange={this.handelChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="alert alert-danger">
                  {formErrors.lastName}
                </span>
              )}
            </div>
          </FormGroup>

          {/* Email Adress */}
          <FormGroup className="email">
            <div className="form-group input-group w-50">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaMailBulk />
                </span>
              </div>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                noValidate
                onChange={this.handelChange}
              />
              {formErrors.email.length > 0 && (
                <span className="alert alert-danger">{formErrors.email}</span>
              )}
            </div>
          </FormGroup>

          {/* Password */}
          <FormGroup className="">
            <div className="form-group input-group w-50">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaLock />
                </span>
              </div>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                noValidate
                onChange={this.handelChange}
              />
              {formErrors.password.length > 0 && (
                <span className="alert alert-danger">
                  {formErrors.password}
                </span>
              )}
            </div>
          </FormGroup>

          {/* Confirm-Password */}
          <FormGroup className="">
            <div className="form-group input-group w-50">
              <div className="input-group-prepend">
                <span className="input-group-text pass-not-Matched">
                  <FaLock />
                </span>
              </div>
              <input
                type="password"
                name="conf-password"
                className="form-control"
                placeholder="Conf-password"
                noValidate
                onChange={this.handelChange}
              />
              {formErrors.conf_password.length > 0 && (
                <span className="alert alert-danger">
                  {formErrors.conf_password}
                </span>
              )}
            </div>
          </FormGroup>

          {/* Upload Photo */}
          <FormGroup className="">
            <div className="custom-file w-50">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                noValidate
              ></input>
              <label className="custom-file-label" htmlFor="customFile">
                Upload Photo
              </label>
            </div>
          </FormGroup>

          {/* Gander */}
          <FormGroup className="">
            <div className="center ">
              <h6 className="gander">Gander :</h6>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                value="male"
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                className="custom-control-input"
                onChange={this.radioChange}
              ></input>
              <label
                className="custom-control-label"
                htmlFor="customRadioInline1"
              >
                male
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                value="female"
                type="radio"
                id="customRadioInline2"
                name="customRadioInline2"
                className="custom-control-input"
              ></input>
              <label
                className="custom-control-label"
                htmlFor="customRadioInline2"
              >
                Female
              </label>
            </div>
          </FormGroup>

          {/* BIRTHDATE */}
          <FormGroup className="">
            <div className="center ">
              <h6 className="birth-data">Birth Data :</h6>
            </div>
            <div className="form-group position-relative">
              <input label="Birth date" type="date" name="birthDate" />
            </div>
          </FormGroup>

          {/* Submit Section */}
          <div className="submit-register">
            <button type="submit" className="btn btn-primary btn-block w-25">
              Register
            </button>
            <div className="reg-option">
              <span>Have an account? &nbsp;</span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default Register;
