import React from 'react';
import Button from '@material-ui/core/Button';

export default function SubmitButton(props) {
  return (
    <Button variant="contained" id="button" disableElevation type="submit">
      {props.buttonContaint}
    </Button>
  );
}
