import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChartDisplay from '../reuseableComponent/Chart'


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
 

  const [state,setState]=useState(false);

const handleChange=()=>{
 setState(true);
};

 

  const prod= ['google', 'tata', 'amezon', 'byjus'];
 
  // const bgChange=()=>{
  //   console.log("clicked")
     
  // };

  return (
    <div>
      <Appbar></Appbar>

      <center>
        <div className='container'>
          <FormControl
            variant="outlined"
            className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">select commodities</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={prod}
              onChange={handleChange}
              label="select commodities"
              style={{ width: 300, backgroundColor: 'white' }}
            >
              {
                prod.length > 0 ? prod.map((ele, index) => <MenuItem value={ele} key={index}>{ele}</MenuItem>) : <MenuItem value=""><em>None</em></MenuItem>

              }


            </Select>
          </FormControl>

          {/* <Button variant="contained" color="secondary" onClick={bgChange}>
            Submit
      </Button> */}

        </div>
        <br></br><br></br>
        <div>
        <ChartDisplay/>
        </div>
      </center>

    </div>

  )
}