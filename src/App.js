import './App.css'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";



function App() {
return (
    <div style={{margin:'0'}}>
      <Router>
        <Switch>
        <Route exact path='/signin' render={(props)=><SignIn  {...props}></SignIn>}/>
          <Route exact path='/signup' render={(props)=><SignUp  {...props}></SignUp>}/>
        <Route exact path='/' render={(props)=><Home  {...props}></Home>}/>
          <Route exact path='/services' render={(props)=><Services  {...props}></Services>}/>
          <Route exact path='/aboutus' render={(props)=><AboutPage  {...props}></AboutPage>}/>
       
        </Switch>
        </Router>


      

    </div>
  );
}


export default App;












