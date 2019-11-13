import React from 'react';
import { Formik, Form, useField  } from 'formik';
import * as Yup from 'yup';
import Classes from './Login.scss';

let fieldClasses = [ Classes.form_control, 'form-control' ];
let btnClasses = [ Classes.btn, 'btn' ];

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let inptLabel = null;
  if(label) {
    inptLabel = <label htmlFor={props.id || props.name} className={Classes.label}>{label} : </label>
  }
  return (
    <>
      {inptLabel}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={Classes.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

const loginForm = () => {

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
      
      <div className='form-group position-relative'>
        {/* EMAIL */}
        <MyTextInput
          className={fieldClasses.join(' ')} 
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      {/* PASSWORD */}
      <div className='form-group position-relative'>
        <MyTextInput
          className={fieldClasses.join(' ')} 
          type="password"
          name="password"
          placeholder="Password"
        /> 
      </div>

      {/* SUBMIT BUTTIN */}
      <button type="submit" className={btnClasses.join(' ')} >Submit</button>
    </Form>
  </Formik>
}
  
export default loginForm;