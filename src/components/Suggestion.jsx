import React from 'react'
import { TextField, MenuItem } from '@mui/material';

const Suggestion = ({ formData, onChange }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const overallOptions = [
        { value: '', label: 'Select an option...' },
        { value: 'Very satisfied', label: 'Very satisfied' },
        { value: 'Satisfied', label: 'Satisfied' },
        { value: 'Unsatisfied', label: 'Unsatisfied' },
        { value: 'Very unsatisfied', label: 'Very unsatisfied' }
    ];
    
    const recommendOptions = [
        { value: '', label: 'Select an option...' },
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
    ];

  return (
    <div>
        <div className='headings'>
            <h2>Suggestion</h2>
        </div>

        <TextField
        select
        label="How would you rate your overall satisfaction with your university’s preparation for the type of work you were/are doing?"
        name="overall"
        value={formData.overall}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {overallOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Would you recommend your program to someone else or not?"
        name="recommend"
        value={formData.recommend}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {recommendOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Do you have any suggestions for overall service delivery at Central University?"
        name="suggestion"
        value={formData.suggestion}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      />

    </div>
  );
};

export default Suggestion;