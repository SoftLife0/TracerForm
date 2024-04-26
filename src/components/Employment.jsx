import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const Employment = ({ formData, onChange }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const currentOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Working full-time', label: 'Working full-time' },
    { value: 'Working part-time but seeking full-time work', label: 'Working part-time but seeking full-time work' },
    { value: 'Working part-time but not seeking full-time work', label: 'Working part-time but not seeking full-time work' },
    { value: 'Self-employed', label: 'Self-employed' },
    { value: 'Not working and looking for a job', label: 'Not working and looking for a job' },
    { value: 'Not working and not looking for a job', label: 'Not working and not looking for a job' }
    ];

    const jobOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'I found employment prior to graduation', label: 'I found employment prior to graduation' },
    { value: 'I found employment after graduation', label: 'I found employment after graduation' },
    { value: 'I found employment during my national service', label: 'I found employment during my national service' },
    { value: 'I found employment after national service', label: 'I found employment after national service' }
    ];

    const serviceOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Fully related', label: 'Fully related' },
    { value: 'Partial related', label: 'Partial related' },
    { value: 'Not related', label: 'Not related' }
    ];

    const orgtypeOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Private', label: 'Private' },
    { value: 'Government', label: 'Government' },
    { value: 'NGO/INGO', label: 'NGO/INGO' },
    { value: 'Self Employed', label: 'Self Employed' }
    ];

    const salaryOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Below GHC1000', label: 'Below GHC1000' },
    { value: 'Between GHC1000-GHC2000', label: 'Between GHC1000-GHC2000' },
    { value: 'Between GHC2100-GHC3000', label: 'Between GHC2100-GHC3000' },
    { value: 'Between GHC3001-GHC4000', label: 'Between GHC3001-GHC4000' },
    { value: 'Above GHC4000', label: 'Above GHC4000' },
    { value: 'Prefer not to answer', label: 'Prefer not to answer' }
    ];

    const employmentOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'A permanent employee', label: 'A permanent employee' },
    { value: 'A contract employee', label: 'A contract employee' },
    { value: 'A seasonal/temporary employee', label: 'A seasonal/temporary employee' },
    { value: 'Self-employed', label: 'Self-employed' }
    ];

    const skillsOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Very helpful', label: 'Very helpful' },
    { value: 'Helpful', label: 'Helpful' },
    { value: 'Somewhat helpful', label: 'Somewhat helpful' },
    { value: 'Not helpful', label: 'Not helpful' }
    ];

    const timeframeOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Less than 6 months', label: 'Less than 6 months' },
    { value: '6 months to 1 year', label: '6 months to 1 year' },
    { value: '1 year to 18 months', label: '1 year to 18 months' },
    { value: 'Greater than 18 months', label: 'Greater than 18 months' }
    ];

    const earnOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
    ];

  return (
    <div>

      <div className='headings'>
        <h2>Employment Information</h2>        
        {/* <p>Kindly fill this form</p> */}
      </div>
      
      <TextField
        select
        label="Current Employment Status"
        name="current"
        value={formData.current}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {currentOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="How long did it take you to find your job?"
        name="job"
        value={formData.job}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {jobOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="How related is your current job to your program of study?"
        name="serviceOptions"
        value={formData.serviceOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {serviceOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Organization"
        name="orgname"
        value={formData.orgname}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Organization Address"
        name="orgadd"
        value={formData.orgadd}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Job Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />

      <TextField
        select
        label="Type of Organization"
        name="orgtypeOptions"
        value={formData.orgtypeOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {orgtypeOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="What is your current monthly gross salary?"
        name="salaryOptions"
        value={formData.salaryOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {salaryOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="In your current job, are you"
        name="employmentOptions"
        value={formData.employmentOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {employmentOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="To what extent did the skills you developed during your studies help you get your job? Would you say that your skills were"
        name="skillsOptions"
        value={formData.skillsOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {skillsOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="How long have you been employed or self-employed?"
        name="timeframeOptions"
        value={formData.timeframeOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {timeframeOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Did your degree earned from CU provide the requisite technical know-how of your job?"
        name="earnOptions"
        value={formData.earnOptions}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {earnOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      

    </div>
  );
};

export default Employment;
