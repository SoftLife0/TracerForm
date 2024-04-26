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
    { name: 'research', label: 'Research and analysis - collects, analyzes, and organizes relevant information' }
  ];

  const skillOptions = [
    { label: 'Extremely Important', value: 'Extremely Important' },
    { label: 'Important', value: 'Important' },
    { label: 'UnImportant', value: 'UnImportant' },
    { label: 'Not Applicable', value: 'Not Applicable' }
  ];

  const abilityOptions = [
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

  return (
    <div>
      <div className='headings'>
        <h2>Skills and Ability</h2>        
        <p>There are a number of skills and abilities that may be required of employees. For each skill and ability, please identify how important that skill and ability is to performing your own work. Please indicate if the skill is extremely important, important, unimportant, or not at all important.</p>
      </div>

      {/* Map over the array of questions to render each select field */}

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
    </div>
  );
};

export default Skill;
