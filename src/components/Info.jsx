import React from 'react';
import { TextField } from '@mui/material';

const Info = ({ formData, errors, handleChange }) => {
  return (
    <div>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
      />
    </div>
  );
}

export default Info;
