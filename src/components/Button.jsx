import React from 'react';
import { Button } from '@mui/material';

const SubmitButton = ({ onClick, text }) => {
  return (
    <Button className='pill-button' variant="contained" onClick={onClick} style={{ padding:'13px', fontWeight:'bold', textAlign:'center', width:'100%', margin:'4vh 0', background:'#dc3545'}}>
      {text}
    </Button>
  );
};

export default SubmitButton;