import React from 'react';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import Classes from './Login.scss';

const loginForm = () => {
  let fieldClasses = [ Classes.form_control, 'form-control' ];
  let btnClasses = [ Classes.btn, 'btn' ];

  return <Formik
    // ASSIGN INITAIL VALUES TO LOGIN FORM CONTROLS
    initialValues = {{email: '',password: ''}}
    
    // VALIDATE LOGIN FORM CONTROLS VALUES  
    validationSchema ={ Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('required'),
        password: Yup.string()
            .min(8, 'Password Must be 8 characters or more')
            .required('required')
    })}

    onSubmit= {values => { alert('Sucessful Login');} }
  >
    <Form className={Classes.login}>
      
      <div className="form-group position-relative">
        {/* EMAIL INPUT CONTROL */}
        <Field 
          className={fieldClasses.join(' ')} 
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        {/* EMAIL ERROR MESSAGE */}
        <ErrorMessage className={Classes.error} name="email" component="div"/>
      </div>
      
      <div className="form-group position-relative">
        {/* PASSWORD INPUT CONTROL */}
        <Field
          className={fieldClasses.join(' ')} 
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        {/* PASSWORD ERROR MESSAGE */}
        <ErrorMessage className={Classes.error} name="password" component="div" />
      </div>

      {/* SUBMIT BUTTIN */}
      <button type="submit" className={btnClasses.join(' ')} >Submit</button>
    </Form>
  </Formik>
}
  
export default loginForm;