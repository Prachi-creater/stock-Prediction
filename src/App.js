import './App.css'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import {BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";



function App() {
return (
    <div>
      <Router>
        <Switch>
          <Route path='/Signin' component={SignIn}/>
          <Route path='/Signup' component={SignUp}/>
       
        </Switch>
        </Router>


      

    </div>
  );
}


export default App;



















    // <div className="container">

    //     <RegisterHeader></RegisterHeader>

    //     <InputField lable='Name' className='ml'></InputField>
    //     <InputField lable='Mobile Number' id="main"></InputField><br></br><br></br>
    //     <InputField lable='USN' id='text'></InputField>
    //     <InputField lable='Password'></InputField><br></br><br></br>
    //     <SimpleSelect name="Branch"></SimpleSelect>
    //     <SimpleSelect name="Division"></SimpleSelect>
    //     <SimpleSelect name="sem"></SimpleSelect>

    //     <SubmitButton></SubmitButton>
    //   </div>