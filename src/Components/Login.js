import React, { Component } from "react";
import { Form, FormGroup } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { input } from 'reactjs-input-validator';

class Login extends Component {
    render() {
        return (
            <Form className="login-form">
                <h2 className="text-center">Login</h2>
                <FormGroup>
                    <label for="Email">Email</label>
                    <input

                        validator="isEmail" required
                        type="email" name="email" class="form-control" placeholder="Email" />
                </FormGroup>

                <FormGroup>
                    <label for="password">Password</label>
                    <input
                        validator="isPassword" required

                        type="password" class="form-control" maxlength="8" placeholder="Password" />
                </FormGroup>

                <button type="submit" class="btn btn-dark btn-block">
                    Login
        </button>
                <div className="text-center pt-3">
                    Or continue with your social account
        </div>
                <FacebookLoginButton className="mt-3 mp-3" />

                <div className="options text-center">
                    <a href="#">SignUp</a>
                    <span className="p-2">|</span>
                    <a href="#">Forget Password</a>
                </div>
            </Form>
        );
    }
}

export default Login;
