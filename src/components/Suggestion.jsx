import React from 'react'
import { TextField, MenuItem } from '@mui/material';

const Suggestion = ({ formData, onChange }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    }

    const stayingOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'Very likely', label: 'Very likely' },
      { value: 'Likely', label: 'Likely' },
      { value: 'Unlikely', label: 'Unlikely' },
      { value: 'Very unlikely', label: 'Very unlikely' }
    ];
    
    const schoolReturnOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'Very likely', label: 'Very likely' },
      { value: 'Likely', label: 'Likely' },
      { value: 'Unlikely', label: 'Unlikely' },
      { value: 'Very unlikely', label: 'Very unlikely' }
    ];
    
    const unemployedReasonOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'There are no jobs available in my field', label: 'There are no jobs available in my field' },
      { value: 'I do not have the required skills in my field', label: 'I do not have the required skills in my field' },
      { value: 'I do not know where to look for jobs in my field', label: 'I do not know where to look for jobs in my field' },
      { value: 'Personal reasons', label: 'Personal reasons' },
      { value: 'Others', label: 'Others' }
    ];
    
    const workOptions = [
      { value: '', label: 'Select an option...' },
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ];
    
    const workframeOptions = [
      { value: '', label: 'Select an option...' },
      { value: '1-3 months', label: '1-3 months' },
      { value: '4-6 months', label: '4-6 months' },
      { value: 'More than 6 months', label: 'More than 6 months' }
    ];

    
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

      {/* Rest of the Questions for this Section  */}

      <div className="headings">
        <h2>Career and Future Intentions</h2>
      </div>

      <TextField
        select
        label="How likely are you to staying in your current job or profession?"
        name="staying"
        value={formData.staying}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {stayingOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="How likely are you to return to the same school?"
        name="schoolReturn"
        value={formData.schoolReturn}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {schoolReturnOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="What is the main reason you are unemployed?"
        name="unemployedReason"
        value={formData.unemployedReason}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {unemployedReasonOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Have you ever been employed since graduation?"
        name="work"
        value={formData.work}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
        variant="standard"
      >
        {workOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {formData.employment === 'Yes' && (
        <TextField
            select
            label="How long did you work?"
            name="workframe"
            value={formData.workframe}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
            variant="standard"
        >
            {workframeOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>

      )}


        <div className='headings'>
            <h2>Feedback & Suggestion</h2>
            <p></p>
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