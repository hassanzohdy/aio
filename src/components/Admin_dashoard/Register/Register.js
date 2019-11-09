import React from 'react';
import {Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Classes from './Register.scss';

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

const registerForm = () => {

  return <Formik
    // ASSIGN INITAIL VALUES TO REGISTER FORM CONTROLS
    initialValues = {{
        email: '',
        firstName: '', 
        lastName: '', 
        password: '',
        confirmPassword: '',
        gender: '',
        birthDate: '',
        profileImage: ''
    }}
    
    // VALIDATE REGISTER FORM CONTROLS VALUES  
    validationSchema ={ Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('required'),
        firstName: Yup.string()
            .required('required'),
        lastName: Yup.string()
            .required('required'),
        password: Yup.string()
            .min(8, 'Password Must be 8 characters or more')
            .required('required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
            .required('required'),
        gender: Yup.mixed()
            .label('Gender')
            .oneOf(['male', 'female'])
            .required('requried'),
        birthDate: Yup.string()
            .required('required'),
        profileImage: Yup.string()
        .required('required')
    })}

    onSubmit= {values => { alert('Sucessful register');} }
  >
    <Form className={Classes.register}>
      {/* EMAIL */}
      <div className='form-group position-relative'>
        <MyTextInput
          className={fieldClasses.join(' ')} 
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>

      {/* FIRST NAME */}
      <div className='form-group position-relative'>
        <MyTextInput
          className={fieldClasses.join(' ')} 
          type="text"
          name="firstName"
          placeholder="First Name"
        /> 
      </div>

      {/* LAST NAME */}
      <div className='form-group position-relative'>
        <MyTextInput
          className={fieldClasses.join(' ')} 
          type="text"
          name="lastName"
          placeholder="Last Name"
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

      {/* CONFIRM PASSWORD */}
      <div className='form-group position-relative'>
        <MyTextInput
          className={fieldClasses.join(' ')} 
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>

      {/* GENDER */}
      <div className='form-group position-relative'>
        <MyTextInput
          label="Gender"
          type="radio"
          name="gender"
          value="male"
        /> Male
        <MyTextInput
          type="radio"
          name="gender"
          value="female"
        /> Female
      </div>

      {/* BIRTHDATE */}
      <div className='form-group position-relative'>
        <MyTextInput
          label="Birth date"
          type="date"
          name="birthDate"
        />
      </div>

      {/* PROFILE IMAGE */}
      <div className='form-group position-relative'>
        <MyTextInput
          label="Profile Image"
          type="file"
          name="profileImage"
          accept="image/*"
        />
      </div>

      {/* SUBMIT BUTTIN */}
      <button type="submit" className={btnClasses.join(' ')} >Submit</button>
    </Form>
  </Formik>
}
  
export default registerForm;