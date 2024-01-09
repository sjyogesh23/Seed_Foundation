import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

export const SignPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "student",
    degree: "",
    department: "",
    yearOfJoining: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Container className="mt-5">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <TextField
              label="E-mail ID"
              fullWidth
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <RadioGroup
              row
              aria-label="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              style={{ marginBottom: 16 }}
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="member"
                control={<Radio />}
                label="Member"
              />
            </RadioGroup>

            <InputLabel id="degree-label">Degree</InputLabel>
            <Select
              labelId="degree-label"
              id="degree"
              fullWidth
              value={formData.degree}
              onChange={handleChange}
              name="degree"
              required
            >
              <MenuItem value="Btech">B.Tech</MenuItem>
              <MenuItem value="Mtech">M.Tech</MenuItem>
              <MenuItem value="BSc">B.Sc</MenuItem>
              <MenuItem value="MSc">M.Sc</MenuItem>
            </Select>

            <TextField
              label="Department"
              fullWidth
              margin="normal"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />

            <TextField
              label="Year of Joining"
              fullWidth
              margin="normal"
              name="yearOfJoining"
              value={formData.yearOfJoining}
              onChange={handleChange}
              required
            />

            <TextField
              label="Create Password"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <TextField
              label="Confirm Password"
              fullWidth
              margin="normal"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
              }
              label="I agree to the terms and conditions"
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!formData.agreeTerms}
              style={{ marginRight: 8 }}
            >
              Generate OTP
            </Button>
            <Button variant="contained" color="secondary" type="reset">
              Reset
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
