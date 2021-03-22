import Header from '../reuseableComponent/Header'
import InputField from '../reuseableComponent/InputField'
import Password from '../reuseableComponent/Password'
import SubmitButton from '../reuseableComponent/Button'
import '../pages/style.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useFormik } from 'formik'
import * as yup from 'yup'
import {Link} from 'react-router-dom'


export default function SignIn() {
  const schema=yup.object().shape({
    Username:yup.string().required("This field is required"),
    Password:yup.string().required("This field is required").min(8,"Password must be atleast 8 character"),
  
  })

const formik=useFormik(
  {
    initialValues:{
      Username:"",
      Password:""
    },
    validationSchema:schema,
    onSubmit:(data)=>{
      console.log(data)
    }
  }
)





  return (
    console.log(formik),
    <div className="App">
      <div className="container">
        <AccountCircleIcon className="logo"></AccountCircleIcon>

        <Header name="Members Login"></Header>

        <form onSubmit={formik.handleSubmit}>

        <InputField lable="Username"
        name="Username"
        values={formik.values.username}
        onChange={formik.handleChange}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.Username}
        error={formik.errors.Username}></InputField><br></br>

        <Password Content="Password"
        name="Password"
        values={formik.values.Password}
        onChange={formik.handleChange}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.Password}
        error={formik.errors.Password}></Password><br></br><br></br>

        <SubmitButton buttonContaint="Sign in"></SubmitButton>
        
        <Link to='/Signup'><h5>Don't have account? SignUp</h5></Link>
        </form>
        
      </div>
      



    </div>
  );
}