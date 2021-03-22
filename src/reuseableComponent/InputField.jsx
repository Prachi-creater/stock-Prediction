import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputField
(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label={props.lable} style={{width:300}} variant="outlined" 
      onBlur={props.onBlur}
      error={props.touched && props.error ? true : false}
      helperText={props.error && props.touched ? props.error : ""}
      name={props.name}
      value={props.values}
      onChange={props.handleChange}
      
      
      
      />
    </form>
  );
}
