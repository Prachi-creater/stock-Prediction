import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function Password(props){
    return(
       
        <TextField
        id="outlined-password-input"
        label={props.Content}
        type="password"
        autoComplete="current-password"
        variant="outlined"
        style={{width:300}}
        name={props.name}
        onBlur={props.onBlur}
        error={props.touched && props.error ? true : false}
        helperText={props.error && props.touched ? props.error : ""}
        value={props.values}
        onChange={props.handleChange}
      />
    )
}