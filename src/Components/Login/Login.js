import React, { Component } from "react";
import "./Login.css";
import { Form, FormGroup } from "reactstrap";
import {Link,} from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";

class Login extends Component {
    render() {
        return (
            <Form className="login-form">
                <h2 className="text-center">Login</h2>
                {/* Email Adress */}
                <FormGroup>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <FaUserAlt /></span>
                        </div>
                        <input
                            validator="isEmail" required
                            type="email" name="email" class="form-control" placeholder="Email" />
                    </div>
                </FormGroup>

                {/* Password */}
                <FormGroup>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <FaLock /></span>
                        </div>
                        <input
                            validator="isPassword" required
                            type="password" name="password" class="form-control" maxlength="8" placeholder="Password" />
                    </div>
                </FormGroup>

                <button type="submit" class="btn btn-dark btn-block">
                    Login
        </button>
                <div className="log-option text-center">
                    <Link to="/register">SignUp</Link>
                    <span className="p-2">|</span>
                    <Link to="/">Forget Password</Link>
                </div>
            </Form>
        );
    }
}

export default Login;
