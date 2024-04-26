// Info.jsx
import React from 'react';
import FormField from './FormField';

const Info = ({ formData, errors, onChange }) => {
  // Options for gender select field
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  // Options for status select field
  const statusOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  // Options for additional field 1 when status is 'yes'
  const additionalField1Options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  const handleFieldChange = (fieldName, value) => {
    onChange(fieldName, value);
  };

  return (
    <div>
      {/* Gender select field */}
      <FormField
        label="Gender"
        type="select"
        value={formData.gender}
        onChange={handleFieldChange}
        options={genderOptions}
      />

      {/* Email input field */}
      <FormField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleFieldChange}
      />

      {/* Status select field */}
      <FormField
        label="Status"
        type="select"
        value={formData.status}
        onChange={handleFieldChange}
        options={statusOptions}
      />

      {/* Additional fields when status is 'yes' */}
      {formData.status === 'yes' && (
        <>
          {/* Select field */}
          <FormField
            label="Additional Field 1"
            type="select"
            value={formData.additionalField1}
            onChange={handleFieldChange}
            options={additionalField1Options}
          />

          {/* Input field */}
          <FormField
            label="Additional Field 2"
            type="text"
            value={formData.additionalField2}
            onChange={handleFieldChange}
          />
        </>
      )}
    </div>
  );
}

export default Info;
