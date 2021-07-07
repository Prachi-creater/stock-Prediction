import React, {useState} from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChartDisplay from '../reuseableComponent/Chart';
import {useFormik} from 'formik';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import Loader from '../reuseableComponent/Loader'
import { useHistory } from "react-router-dom";
import PredictionComponent from '../reuseableComponent/predictionComponent';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function Services() {
  const classes = useStyles();
  const [isDropdownDisabled, setisDropdownDisabled] = useState(false)
  const [selectedStock, setselectedStock] = useState("")
  const [showgraph,setshowgraph]=useState(false);
  const {addToast} = useToasts();
  const [isLoading, setisLoading] = useState(false)
  const history = useHistory();
  const [data, setdata] = useState(null);
  
  let initialData = {
   quote: "SAIL",
   vol:20000,
   adj_close: 200,
   close_s:300,
   high_s:10,
   low_s:45,
   open_s:2,
   lstm_pred:133,
   lr_pred:222,
   decision:"SELL",
   arima_pred:200,
   lr_graph: "http://127.0.0.1:5000/static/LSTM.png",
   lstm_graph:"http://127.0.0.1:5000/static/LR.png",
   twitter_graph:"http://127.0.0.1:5000/static/SA.png", 
   arima_graph:"http://127.0.0.1:5000/static/ARIMA.png",
   tw_pol :"positive",
   tw_list : ["asjfnerjg","sfkenjgrk","asjferkgvksneg","afnkejrknwe",
   "afnekrferggk"
  ],
  forecast_set:[[2],[3]]
  }

  const [result, setresult] = useState(null)



const handleChange=(event)=>{
  setisLoading(true);
  setselectedStock(event.target.value)
 let payload = {
   "stock_name":event.target.value
 }
 setisDropdownDisabled(true)
 console.log(event.target.value)

 axios.post("/predictions",payload).then(
  (res)=>{
    setresult(res.data.data)
    addToast("successfully fetched data", { appearance: 'success',autoDismiss : true });
    setisLoading(false);
    setshowgraph(true);
    setisDropdownDisabled(false)
  }
).catch((err)=>{
  console.log(err);
  addToast("please try again", { appearance: 'error',autoDismiss : true });
  setisLoading(false);
  setisDropdownDisabled(false)
})
};

 

  const stock_names= ['AAPL','SAIL.NS','AMZN','GOOG'];
 

  return (
    <>
    <div>
      <Appbar></Appbar>
      <div className="outer-container">
        <div className='container'>
          <h1 style={{color:'#ffba08'}}>Select Stock Name</h1>     
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={stock_names}
              disabled={isDropdownDisabled}
              onChange={handleChange}
              name = "stock_name"
              style={{ width: 400, height:70,backgroundColor: 'white' }}
            >
              {
                stock_names.length > 0 ? stock_names.map((ele, index) => <MenuItem value={ele} key={index}>{ele}</MenuItem>) : <MenuItem value=""><em>None</em></MenuItem>

              }

            </Select>
        </div>
        <br></br><br></br>
        
        </div>
    </div>
    <br></br><br></br>
    <div className="chart-loader-container" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          {
            isLoading ? <><Loader/><h4 style={{fontWeight: 'bold',color:'03045e'}}>please wait while we are training our model and getting predictions for you</h4></> : ""
          }
        </div>
    <br></br>
    <p></p>
    <p></p>
     
     {
       
      showgraph ? 
       <PredictionComponent
           data={result}
           date={new Date()}
     /> 
     : ""
    }
    </>

  )
}