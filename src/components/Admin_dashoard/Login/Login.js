/**** ADMINDASHOARD LOGIN COMPONENT ****/
import React , { Component } from 'react';
import Input from '../../Form_Controls/Input/Input';
import classes from './Login.scss';

class Login extends Component {
    state = {
      loginForm: {
        email: {
          label: 'Email',
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email'
          },
          value: '',
          validation: {
          required: true
          },
          valid : false,
          touched : false,
          errorMessage : 'Requried'
        },
        password: {
          label: 'Password',
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password'
          },
          value: '',
          validation: {
            required: true,
            minlength: 8
          },
          valid: false,
          touched: false,
          errorMessage: 'Password length must be at least 8 characters.'
        }
      },
      formIsValid: false
    }

    /**** CHECK VALIDATION OF FORM ELEMENTS VALUES  ****/
    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minlength) {
            isValid = value.length >= rules.minlength && isValid;
        }
        return isValid;
    }

    /**** INPUT CHANGE HANDLER ****/
    inputChangedHandler = (event, elementId) => {
        const updatedLoginForm = {...this.state.loginForm};
        const updatedLoginElement = {...updatedLoginForm[elementId]};
        updatedLoginElement.value = event.target.value;
        updatedLoginElement.valid = this.checkValidity(updatedLoginElement.value, updatedLoginElement.validation);
        updatedLoginElement.touched = true;
        updatedLoginForm[elementId] = updatedLoginElement;
        
        let formIsValid = true;
        for(let key in updatedLoginForm) {
          formIsValid = updatedLoginForm[key].valid && formIsValid;
        }

        this.setState({loginForm : updatedLoginForm, formIsValid : formIsValid});
    }

    render () {
        /**** PUSHING STATE LONGINFORM OBJECT PROPERTIES INTO ARRAY ****/
        let formElementsArr = [];
        for(let key in this.state.loginForm) {
            formElementsArr.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        /**** Maping `formElementsArr` INTO LIST OF JSX CODE REPRESENT THIS FORM ELEMENTS ****/
        let formElements = formElementsArr.map(element => 
                <Input 
                    key = {element.id}
                    title = {element.config.label}
                    elementtype = {element.config.elementType}
                    elementconfig = {element.config.elementConfig}
                    value = {element.config.value}
                    change = {(event) => this.inputChangedHandler(event, element.id) }
                    valid = {element.config.valid}
                    touched = {element.config.touched}
                    errorMessage = {element.config.errorMessage}
                    
                />
            );
            
        return (
            /**** LOGIN FORM ****/
            <form onSubmit={this.loginHandler} className={classes.login}>
                {formElements}
                <button type="submit" disabled={!this.state.formIsValid} className={[classes.btn, 'btn'].join(' ')}>Submit</button>
            </form>
        );
    }
}

export default Login;