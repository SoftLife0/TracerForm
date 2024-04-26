import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const FormField = ({ label, type, value, onChange, options }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      {type === 'select' ? (
        <TextField
          fullWidth
          select
          label={label}
          value={value}
          margin='normal'
          onChange={handleChange}
          name={label.toLowerCase().replace(/\s+/g, '_')} // Convert label to lowercase and replace spaces with underscores
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          fullWidth
          type={type} // Set input type dynamically
          label={label}
          value={value}
          margin='normal'
          onChange={handleChange}
          name={label.toLowerCase().replace(/\s+/g, '_')} // Convert label to lowercase and replace spaces with underscores
        />
      )}
    </>
  );
}

export default FormField;
