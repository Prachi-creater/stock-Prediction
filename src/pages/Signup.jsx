import React from 'react'
import '../pages/style.css';
import Image from '../Images/stock_1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',

    },
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const schema = yup.object().shape({
    name: yup.string().required("This field is required"),
    phone: yup.string().required("This field is required"),
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required").min(8, "Password must be atleast 8 character"),

  })

  const formik = useFormik(
    {
      initialValues: {
        name:"",
        phone:"",
        email: "",
        password: ""
      },
      validationSchema: schema,
      onSubmit: (data) => {
        console.log(data)
      }
    }
  )

  return (
    <div className="parent-div">

      <div className="outer-div">


        <div className="image">
          <img src={Image} width='700px' height='600px' />
        </div>


        <div className="login-div">

          <center><LockOpenIcon className="logo" /></center>
          <center><h1>WELCOME</h1></center>

          <center><form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
          <TextField
              id="name"
              label="UserName"
              variant="outlined"
              InputProps={{ endAdornment: <PersonIcon className="icon1" /> }}
              name="name"
              values={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={(formik.touched.email && formik.errors.name) ? true : false}
              helperText={(formik.touched.email && formik.errors.name) ? formik.errors.name: ""}
            /><br /><br />

            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              InputProps={{ endAdornment: < CallIcon className="icon1" /> }}
              name="phone"
              values={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={(formik.touched.email && formik.errors.phone) ? true : false}
              helperText={(formik.touched.email && formik.errors.phone) ? formik.errors.phone: ""}
            /><br /><br />

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              InputProps={{ endAdornment: <PersonIcon className="icon1" /> }}
              name="email"
              values={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={(formik.touched.email && formik.errors.email) ? true : false}
              helperText={(formik.touched.email && formik.errors.email) ? formik.errors.email : ""}
            /><br /><br />

            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              InputProps={{ endAdornment: < VisibilityOffIcon className="icon2" /> }}
              name="password"
              values={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={(formik.touched.password && formik.errors.password) ? true : false}
              helperText={(formik.touched.password && formik.errors.password) ? formik.errors.password : ""}
            /><br /><br />


            <Button variant="contained" color="primary" id="button" type="submit">
              Register
            </Button>
            
            <Link to='/Signin' className="link"><Button variant="contained" color="primary" id="button3" type="submit">
              SignIn <TrendingFlatIcon/>
            </Button></Link>

          </form>
          </center>
        </div>
      </div>
    </div>
  )
}