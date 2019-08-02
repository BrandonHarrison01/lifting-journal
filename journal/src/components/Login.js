import React from 'react';
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';


import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

function Login () {
    return (
      <>
        <TopNav />
        <h1 className='signup-welcome'>Login Form</h1>
        <Form className='log-form'>
            <label className='log-title' htmlFor="email">UserName:</label>
            <Field
                name='userName'
                type='text'
            />
            <br />
            <label className='log-title' htmlFor="password">Password:</label>
            <Field
                name='password'
                type='password'
            />
            <br />
            <button className='log-btn'>Login</button>
        </Form>
        <Footer />
      </>
    )
}
        
const FormikLogin = withFormik({
    mapPropsToValues() {
        return {
            userName: '',
            password: ''
        }
    },

    handleSubmit: (values, formikBag) => {
        console.log(values)
        axios
            .post('https://weightlifingjournalbackend.herokuapp.com/api/auth/login', values)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.Token)
                formikBag.props.history.push('./dashboard')
            })
            .catch(err => console.log(err))
    }

})(Login)

export default FormikLogin;