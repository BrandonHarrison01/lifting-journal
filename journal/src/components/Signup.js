import React from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';


import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

import './Signup.scss'

const Signup = () => {
    return(
      <>
      <TopNav />
        <div>
            <h1 className="signup-welcome">Welcome to forLife Fitness</h1>
            <Form className='log-form'>
                <label className='log-title' >First Name</label>
                <Field
                    className='log-input' 
                    name='firstName'
                    type='text'
                />
                <br />
                <label className='log-title' >Last Name</label>
                <Field
                    className='log-input' 
                    name='lastName'
                    type='text'
                />
                <br />
                <label className='log-title' >Username</label>
                <Field
                    className='log-input' 
                    name='userName'
                    type='text'
                />
                <br />
                <label className='log-title' >Email</label>
                <Field
                    className='log-input' 
                    name="email"
                    type='text'
                />
                <br />
                <label className='log-title' >Password</label>
                <Field
                    className='log-input' 
                    name="password"
                    type='password'
                />
                <br />
                <button type="submit" className='log-btn' >SIGNUP</button>
            </Form>
        </div>
        <Footer />
        </>
    );
};

const FormikSignup = withFormik({
    mapPropsToValues() {
        return {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        }
    },

    handleSubmit: (values, formikBag) => {
        console.log(values)
        axios
        .post('https://weightlifingjournalbackend.herokuapp.com/api/auth/register', values)
        .then(res => {
            console.log(res)
            formikBag.props.history.push('/login')
        })
        .catch(err => console.log(err))
    }

})(Signup)

export default FormikSignup;
