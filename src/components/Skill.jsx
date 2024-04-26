import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const Skill = ({ formData, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  // Define the array of options
  const options = [
    { label: 'Well Prepared', value: 'Well Prepared' },
    { label: 'Prepared', value: 'Prepared' },
    { label: 'Somewhat Unprepared', value: 'Somewhat Unprepared' },
    { label: 'Unprepared', value: 'Unprepared' },
    { label: 'Completely Unprepared', value: 'Completely Unprepared' }
  ];

  // Define an array of questions with their corresponding names
  const questions = [
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
      <div className='title'>
        <h4 style={{ fontWeight: 'bold', fontSize: '20px', margin: '0' }}>Skills and Ability</h4>
      </div>

      {/* Map over the array of questions to render each select field */}
      {questions.map((question) => (
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
          <MenuItem value="">Select an option...</MenuItem>
          {options.map((option) => (
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
