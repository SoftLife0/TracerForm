// Info.jsx
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const Info = ({ formData, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const genderOptions = [
    { value: '', label: 'Select an option...', disabled: true },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ];

  const othersOptions = [
    { value: '', label: 'Select an option...', disabled: true },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const satisfactionOptions = [
    { value: '', label: 'Select an option...', disabled: true },
    { value: 'Very satisfied', label: 'Very satisfied' },
    { value: 'Satisfied', label: 'Satisfied' },
    { value: 'Unsatisfied', label: 'Unsatisfied' },
    { value: 'Very unsatisfied', label: 'Very unsatisfied' }
  ];

  return (
    <div>

      <div className='headings'>
        <h2>Personal Information</h2>
      </div>

      <TextField
        select
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {genderOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Work Address"
        name="workAddress"
        value={formData.workAddress}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      />

      <TextField
        label="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      />

      <TextField
        label="Country of Residence"
        name="residence"
        value={formData.residence}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      />

      <TextField
        label="Programme Pursued"
        name="programmePursued"
        value={formData.programmePursued}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      />

      <TextField
        type="number"
        label="Year of Completion"
        name="yearOfCompletion"
        value={formData.yearOfCompletion}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      />

      <TextField
        select
        label="Since your graduation have you gone on to take any other programme?"
        name="others"
        value={formData.others}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {othersOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {formData.others === 'Yes' && (
      <>
        <TextField
          label="If Yes, List programme"
          name="pro"
          value={formData.pro}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          variant="standard"
        />

        {/* Additional fields for the "Yes" option */}
        <TextField
          label="Name of Institution"
          name="institution"
          value={formData.institution}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          variant="standard"
        />

        <TextField
          type="number"
          label="Year of Completion"
          name="completed"
          value={formData.completed}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          variant="standard"
        />

        <TextField
            select
            label="Overall satisfaction with academic preparation"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
            variant="standard"
          >
            {satisfactionOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </>
      )}


    </div>
  );
};

export default Info;
