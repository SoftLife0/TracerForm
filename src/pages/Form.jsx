import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import SubmitButton from '../components/Button';
import Info from '../components/Info';

const Form = () => {
  const [formData, setFormData] = useState({
    gender: '',
    email: '',
    status: '',
    additionalField1: '',
    additionalField2: ''
  });

  // Define onChange function to handle form field changes
  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        // Handle successful form submission (e.g., show success message)
        console.log('Form submitted successfully!');
      } else {
        // Handle unsuccessful form submission (e.g., show error message)
        console.error('Failed to submit form');
      }
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
      <Header />
      <Container style={{marginTop:'10vh', background:'#fff'}} >

      <div className='headings'>
        <h2>Tracer Studies</h2>
        <p>Dear Graduate, Through this questionnaire CU aims to track its graduates and receive feedback regarding the type of work, further study or other activity you are/have been involved in since you completed your study from Central University. The information provided will assist the institution to plan both for future educational needs and improve its programmes. Results of this tracer study will only be presented in summary form and individual responses will be kept strictly confidential. We would, therefore, highly appreciate if you could complete the following questionnaire and return it to us, at your earliest convenience. 
            Thank you for your kind cooperation and support. </p>
        <p>This questionnaire is designed to enable follow your journey after Name of University.</p>
        <br/>
      </div>
  
      <form onSubmit={handleSubmit}>

        <div className='title'>
          <h4 style={{ fontWeight:'bold', fontSize:'18px', margin: '0' }}>Personal Information</h4>
        </div>

        
        <Info formData={formData} errors={errors} onChange={handleFieldChange} />

        <SubmitButton onClick={handleSubmit} text="Submit" />

      </form>
      </Container>
    </>
  );
}

export default Form;
