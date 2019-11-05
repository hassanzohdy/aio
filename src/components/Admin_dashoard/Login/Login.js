import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Classes from './Login.scss';

const login = () =>
    <Formik
      // ASSIGN INITAL VALUES TO LOGIN FORM CONTROLS
      initialValues={{ email: '', password: '' }}

      // VALIDATE LOGIN FORM CONTROLS VALUES
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';

        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}

      // ONSUBMIT
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => {

        let fieldClasses = [ Classes.form_control, 'form-control' ];
        let btnClasses = [ Classes.btn, 'btn' ];

        return (
          <Form className={Classes.login}>
            <div className="form-group position-relative">
              {/* EMAIL INPUT CONTROL */}
              <Field 
                className={fieldClasses.join(' ')} 
                type="email" 
                name="email"
                placeholder="Your Email"
              />
              {/* EMAIL ERROR MESSAGE */}
              <ErrorMessage className={Classes.error}  name="email" component="div" />
            </div>

            <div className="form-group position-relative">
              {/* PASSWORD INPUT CONTROL */}
              <Field 
                className={fieldClasses.join(' ')} 
                type="password"
                name="password"
                placeholder="Your Password"
                minLength="8"
                />
              {/* PASSWORD ERROR MESSAGE */}
              <ErrorMessage className={Classes.error} name="password" component="div" />
            </div>

            {/* SUBMIT BUTTIN */}
            <button className={btnClasses.join(' ')} type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        );
      }}
    </Formik>
;

export default login;