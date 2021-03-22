import React from 'react'
import Header from '../reuseableComponent/Header'
import InputField from '../reuseableComponent/InputField'
import Password from '../reuseableComponent/Password'
import SubmitButton from '../reuseableComponent/Button'
import '../pages/style.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {Link} from 'react-router-dom';


export default function Signup(){

    const phoneRegExp=/^\d{10}$/;
    const schema = yup.object().shape({
        Username: yup.string().required("This field is required"),
        Email: yup.string().required("This field is required").email("Invalid Email address"),
        Mobile: yup.string().matches(phoneRegExp,"Invalid phone number"),
        Password: yup.string().required("This field is required").min(8, "Password must be atleast 8 character"),
        ConfirmPassword: yup.string().required("This field is required"),
    })

    const formik = useFormik(
        {
            initialValues: {
                Username: "",
                Email: "",
                Mobile: "",
                Password: "",
                confirmPassword: ""
            },
            validationSchema: schema,
            onSubmit: (data) => {
                console.log(data)
            }
        }
    )
    return(
        console.log(formik),
        <div className="App">
        <div className="reg-div">
        <Header name="Sign Up!"></Header>

        <form onSubmit={formik.handleSubmit}>

        <InputField lable="Username"
        name="Username"
        values={formik.values.Username}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.Username}
        error={formik.errors.Username}></InputField>

        <InputField lable="Email Id"
        name="Email"
        values={formik.values.Email}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.Email}
        error={formik.errors.Email}></InputField>

        <InputField lable="Mobile Number"
         name="Mobile"
         values={formik.values.Mobile}
         handleChange={formik.handleChange}
         onBlur={formik.handleBlur}
         touched={formik.touched.Mobile}
         error={formik.errors.Mobile}></InputField>

        <Password Content="Password"
        name="Password"
        values={formik.values.Password}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.Password}
        error={formik.errors.Password}></Password><br></br><br></br>

        <Password Content=" Confirm Password"
         name="confirmPassword"
         values={formik.values.confirmPassword}
         handleChange={formik.handleChange}
         onBlur={formik.handleBlur}
         touched={formik.touched.confirmPassword}
         error={formik.errors.confirmPassword}></Password><br></br><br></br>

        <SubmitButton buttonContaint="Register"></SubmitButton>

        <Link to='/Signin'><h5>Already Registered? Signin here</h5></Link>
        </form>
        </div>
        </div>
    )
}