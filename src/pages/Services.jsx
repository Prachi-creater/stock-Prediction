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
  var result ;
  const classes = useStyles();
  const [isDropdownDisabled, setisDropdownDisabled] = useState(false)
  const [selectedStock, setselectedStock] = useState("")
  const [showgraph,setshowgraph]=useState(false);
  const {addToast} = useToasts();
  const [isLoading, setisLoading] = useState(false)
  const history = useHistory();
  const [data, setdata] = useState(null);



const handleChange=(event)=>{
  setisLoading(true);
  setselectedStock(event.target.value)
 let payload = {
   "stock_name":event.target.value
 }
 setisDropdownDisabled(true)
 console.log(event.target.value)

 axios.post("/api/stockprice/",payload).then(
  (res)=>{
    setdata(res.data)
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

 

  const stock_names= ['AAPL','SAIL.NS'];
 

  return (
    <div>
      <Appbar></Appbar>

      <center>
        <div className='container'>
          <FormControl
            variant="outlined"
            className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">select stock names</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={stock_names}
              disabled={isDropdownDisabled}
              onChange={handleChange}
              label="select stock name"
              name = "stock_name"
              style={{ width: 300, backgroundColor: 'white' }}
            >
              {
                stock_names.length > 0 ? stock_names.map((ele, index) => <MenuItem value={ele} key={index}>{ele}</MenuItem>) : <MenuItem value=""><em>None</em></MenuItem>

              }


            </Select>
          </FormControl>


        </div>
        <br></br><br></br>
        <div className="chart-loader-container">
          {
            isLoading ? <><Loader/><h5>please wait while we are training our model</h5></> : ""
          }
          { 
            showgraph && <><h1>Selected Stock Name : {selectedStock}</h1><ChartDisplay data={result} /> </>  
            
          }
        </div>
      </center>

    </div>

  )
}