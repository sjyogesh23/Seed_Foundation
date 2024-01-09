import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './contact_style.css'


export const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      Name: '',
      email: '',
      Subject: '',
      message: '',
    });
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  return (
      <Container className="all_contact_us">
          <Box className="contact_form">
              <Typography component="h1" variant="h5" className='logo_color contactus_title'>
                Contact Us
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} className='cont_ips'>
                <Grid container spacing={2}>
                  {['Name', 'email', 'Subject'].map((field) => (
                    <Grid item xs={12} key={field}>
                      <TextField
                        required
                        fullWidth
                        id={field}
                        label={field === 'email' ? 'Email Address' : field}
                        name={field}
                        autoComplete={field === 'email' ? 'email' : 'given-name'}
                        value={formData[field]}
                        onChange={handleChange}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={8}
                      id="message"
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      helperText={`${formData.message.length}/1000 Characters`}
                      inputProps={{ maxLength: 1000 }}
                    />
                  </Grid>
                  <Grid item xs={12} container justifyContent="space-between" style={{gap:'10px'}} >
  <Button
    type="submit"
    variant="contained"
    className="contact_submitBtn"
    disabled={!isFormValid}
  >
    Submit
  </Button>
  <Button
    type="reset"
    variant="contained"
    className="contact_resetBtn"
    onClick={handleReset}
    disabled={!isFormValid}
  >
    Reset
  </Button>
</Grid>
                </Grid>
              </Box>
            </Box>
      </Container>
  );
};