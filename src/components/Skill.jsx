import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const Skill = ({ formData, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };


  const skillQuestions = [
    { name: 'theoretical', label: 'Specific job-related theoretical knowledge' },
    { name: 'technical', label: 'Specific job-related skills (e.g. technical skills)' },
    { name: 'communication', label: 'Communication (oral and written) – speak/write in a clear, concise, correct manner' },
    { name: 'comprehension', label: 'Comprehension - can restate information, ideas and concepts in different ways' },
    { name: 'quantitative', label: 'Quantitative skills (Ability to use mathematical concepts)' },
    { name: 'computer', label: 'Computer skills' },
    { name: 'critical', label: 'Critical thinking and problem solving - evaluates his/her own thinking for problem-solving and decision making' },
    { name: 'research', label: 'Research and analysis - collects, analyzes, and organizes relevant information' },
    { name: 'team', label: 'Team-work' },
    { name: 'planning', label: 'Organization and planning - determines tasks and resources to complete project objectives' },
    { name: 'management', label: 'Time management - sets priorities and allocates time efficiently to complete tasks within deadlines' },
    { name: 'quality', label: 'Quality of work - performs tasks accurately and pays attention to detail' },
    { name: 'creative', label: 'Creative and innovative - creates innovative strategies and / or products that meet identified needs' },
    { name: 'adaptable', label: 'Adaptable - adapts to new situations and demands by applying or updating knowledge and skills' },
    { name: 'responsible', label: 'Responsible - takes responsibility for his/her own actions and decisions' }
  ];

  const skillOptions = [
    { label: 'Select an option...', value: '' },
    { label: 'Extremely Important', value: 'Extremely Important' },
    { label: 'Important', value: 'Important' },
    { label: 'UnImportant', value: 'UnImportant' },
    { label: 'Not Applicable', value: 'Not Applicable' }
  ];

  const abilityOptions = [
    { label: 'Select an option...', value: '' },
    { label: 'Well Prepared', value: 'Well Prepared' },
    { label: 'Prepared', value: 'Prepared' },
    { label: 'Somewhat Unprepared', value: 'Somewhat Unprepared' },
    { label: 'Unprepared', value: 'Unprepared' },
    { label: 'Completely Unprepared', value: 'Completely Unprepared' }
  ];

  // Define an array of questions with their corresponding names
  const abilityQuestions = [
    { name: 'theoretical', label: 'Specific job-related theoretical knowledge' },
    { name: 'technical', label: 'Specific job-related skills (e.g. technical skills)' },
    { name: 'communication', label: 'Communication (oral and written) – speak/write in a clear, concise, correct manner' },
    { name: 'comprehension', label: 'Comprehension - can restate information, ideas and concepts in different ways' },
    { name: 'quantitative', label: 'Quantitative skills (Ability to use mathematical concepts)' },
    { name: 'computer', label: 'Computer skills' },
    { name: 'critical', label: 'Critical thinking and problem solving - evaluates his/her own thinking for problem-solving and decision making' },
    { name: 'research', label: 'Research and analysis - collects, analyzes, and organizes relevant information' },
    { name: 'teams', label: 'Team-work' },
    { name: 'plannings', label: 'Organization and planning - determines tasks and resources to complete project objectives' },
    { name: 'managements', label: 'Time management - sets priorities and allocates time efficiently to complete tasks within deadlines' },
    { name: 'qualitys', label: 'Quality of work - performs tasks accurately and pays attention to detail' },
    { name: 'creatives', label: 'Creative and innovative - creates innovative strategies and / or products that meet identified needs' },
    { name: 'adaptables', label: 'Adaptable - adapts to new situations and demands by applying or updating knowledge and skills' },
    { name: 'responsibles', label: 'Responsible - takes responsibility for his/her own actions and decisions' }
  ];

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
  
  const employmentOptions = [
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

  return (
    <div>
      <div className='headings'>
        <h2>Skills and Ability</h2>        
        <p>There are a number of skills and abilities that may be required of employees. For each skill and ability, please identify how important that skill and ability is to performing your own work. Please indicate if the skill is extremely important, important, unimportant, or not at all important.</p>
      </div>

      {/* Map over the array of questions to render each select field */}
    
    {/* Skills Question  */}

      {skillQuestions.map((question) => (
        <TextField
          key={question.name}
          select
          label={question.label}
          name={question.name}
          value={formData[question.name]}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="" disabled>Select an option...</MenuItem>
          {skillOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ))}

      {/* Ability Question */}
    
      <div className='headings'>
        <p style={{fontWeight:'bold', textAlign:'initial'}}>When you first started working after graduation, how would you rate your level of preparedness for the following skills and abilities. Please tell us if you were well prepared, prepared, somewhat unprepared and completely unprepared:</p>
      </div>

      {abilityQuestions.map((question) => (
        <TextField
          key={question.name}
          select
          label={question.label}
          name={question.name}
          value={formData[question.name]}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="" disabled>Select an option...</MenuItem>
          {abilityOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ))}

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
        margin="normal"
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
        margin="normal"
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
        margin="normal"
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
        name="employment"
        value={formData.employment}
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

      {formData.employment === 'Yes' && (
        <TextField
            select
            label="How long did you work?"
            name="workframe"
            value={formData.workframe}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
        >
            {workframeOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>
      )}

    </div>
  );
};

export default Skill;
