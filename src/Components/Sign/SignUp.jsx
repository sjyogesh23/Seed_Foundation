import * as React from "react";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
// import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";

const BASE_URL = require("../../global_vars");

const defaultTheme = createTheme();

export const SignUp = () => {
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [repeatedPassword, setRepeatedPassword] = React.useState("");
  const [otpDialogOpen, setOtpDialogOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "info",
  });

  const departmentOptions = ["CSE", "IT", "EEE", "ECE", "MECH"];
  const degreeOptions = ["B.Tech", "M.Tech", "B.Sc", "M.Sc"];

  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatedPassword: "",
    year: "",
    Degree: "",
    Dept: "",
  });

  const [isInputEmpty, setIsInputEmpty] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    repeatedPassword: false,
    year: false,
    Degree: false,
    Dept: false,
  });

  const [errors, setErrors] = React.useState({});
  // const [otp, setOtp] = React.useState("");
  // const [otpSent, setOtpSent] = React.useState(false);
  // const [userData, setUserData] = useState({})
  const [resendDisabled, setResendDisabled] = React.useState(false);

  const handleResendOtp = () => {
    console.log("Resending OTP...");
    setResendDisabled(true);

    setTimeout(() => {
      console.log("OTP Resent!");
      setResendDisabled(false);
    }, 30000);
  };

  useEffect(() => {
    // Cleanup the timer if the component is unmounted or if resendDisabled is set to false.
    let timer;
    if (resendDisabled) {
      timer = setTimeout(() => {
        setResendDisabled(false);
      }, 30000);
    }

    return () => clearTimeout(timer);
  }, [resendDisabled]);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAgreeTermsChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  const handleInputChange = (event, fieldName) => {
    if (event && event.target) {
      const { name, value } = event.target;
  
      // Check if the value is a string before using trim
      const trimmedValue = typeof value === "string" ? value.trim() : value;
  
      setInputValue((prevInputValue) => ({
        ...prevInputValue,
        [name]: trimmedValue,
      }));
  
      setIsInputEmpty((prevIsEmpty) => ({
        ...prevIsEmpty,
        [name]: typeof trimmedValue === "string" && trimmedValue === "",
      }));
  
      // Validate 'year' field
      if (name === "year") {
        if (/^\d{4}$/.test(trimmedValue)) {
          // Valid 4-digit integer
          setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Enter a valid year.",
          }));
        }
      }
  
      // Validate 'password' field
      if (name === "password") {
        if (trimmedValue.length < 8) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Password must be at least 8 characters long.",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
      } else if (name === "repeatedPassword") {
        // Additional validation if needed for the 'repeatedPassword' field
      }
    }
  };
  
  // Handles Radio button Functionality
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedValue, setSelectedValue] = useState("Student");

  // **************** [POST REQUEST] *******************************************************

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const role = formData.get("role");
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "Degree",
      "Dept",
      "year",
      "password",
      "repeatedPassword",
    ];

    for (const field of requiredFields) {
      const value = formData.get(field);

      if (typeof value === "string" && value.trim() === "") {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    }

    console.log("Form Data:", Object.fromEntries(formData.entries())); // Log all form data
    console.log("New Errors:", newErrors); // Log the new errors

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      console.log("Form has errors.");
      return;
    }
    let userData = {
      name: `${inputValue.firstName} ${inputValue.lastName}`,
      email: inputValue.email,
      password: inputValue.password,
      degree: inputValue.Degree,
      department: inputValue.Dept,
      year_of_joining: inputValue.year,
    };

    // If the role is "Member", update the field name to "yearOfPassing"
    if (role === "Member") {
      userData = {
        ...userData,
        yearOfPassing: inputValue.year,
        year_of_joining: undefined, // Remove the old field if needed
      };
    }
    console.log("SignUp Info", userData);
    const urlEndpoint = role == "Student" ? "signup" : "member-signup";

    axios
      .post(`${BASE_URL}/${urlEndpoint}`, userData)
      .then((response) => {
        // Handle success, if needed
        navigate("/VerifyEmail", {
          state: {
            endpoint: `${urlEndpoint}`,
            data: userData,
          },
        });
      })
      .catch((error) => {
        setSnackbar((prev) => ({
          ...prev,
          open: true,
          message: error.response.data.message,
          severity: "error",
        }));
        // Handle error, if needed
      });

    // setOtpSent(true);
    // setResendDisabled(true);

    // // Simulate OTP sent after 2 seconds
    // setTimeout(() => {
    //   console.log("OTP Sent!");
    //   setResendDisabled(false);
    // }, 2000);
  };

  // ******************** [END] OF POST REQUEST *****************************

  const isSubmitDisabled =
    // (otpSent && otp.trim() === "") ||
    password !== repeatedPassword || !agreeTerms;

  const isSignUpDisabled = password !== repeatedPassword || !agreeTerms; //|| otp.trim() === "";

  // const handleOtpSubmit = (event) => {
  //   event.preventDefault();

  //   if (otp === "1234") {
  //     console.log("Correct OTP! Navigating to the next page...");
  //   } else {
  //     setOtpDialogOpen(true);
  //   }
  // };

  // const handleCloseOtpDialog = () => {
  //   setOtpDialogOpen(false);
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}
      >
        <CssBaseline />
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            id="signupForm"
            sx={{ mt: 3 }}
          >
            <Typography component="h1" variant="h5" className="logo_color">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              id="signupForm"
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={inputValue.firstName}
                    autoFocus
                    onChange={handleInputChange}
                    error={!!errors["firstName"]}
                    helperText={errors["firstName"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={inputValue.lastName}
                    onChange={handleInputChange}
                    error={!!errors["lastName"]}
                    helperText={errors["lastName"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={inputValue.email}
                    onChange={handleInputChange}
                    error={!!errors["email"]}
                    helperText={errors["email"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="role"
                    value={selectedValue}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="Student"
                      control={<Radio />}
                      label="Student"
                    />
                    <FormControlLabel
                      value="Member"
                      control={<Radio />}
                      label="Member"
                    />
                  </RadioGroup>
                </Grid>
                <Grid container xs={12} spacing={2} style={{ margin: "auto" }}>
                  <Grid item sm={4}>
                    <Autocomplete
                      id="Degree"
                      options={degreeOptions || []}
                      autoHighlight
                      value={inputValue.Degree}
                      onChange={(e) => handleInputChange(e, "Degree")}
                      onInputChange={(e, newInputValue) =>
                        handleInputChange(
                          { target: { name: "Degree", value: newInputValue } },
                          "Degree"
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Degree"
                          id="Degree"
                          fullWidth
                          required
                          error={!!errors["Degree"]}
                          helperText={errors["Degree"]}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <Autocomplete
                      id="Dept"
                      options={departmentOptions || []}
                      autoHighlight
                      value={inputValue.Dept}
                      onChange={(e) => handleInputChange(e, "Dept")}
                      onInputChange={(e, newInputValue) =>
                        handleInputChange(
                          { target: { name: "Dept", value: newInputValue } },
                          "Dept"
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Dept"
                          fullWidth
                          required
                          error={!!errors["Degree"]}
                          helperText={errors["Degree"]}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      required
                      fullWidth
                      id="year"
                      label="Year"
                      name="year"
                      type="number"
                      value={inputValue.year}
                      onChange={(e) => handleInputChange(e, "year")}
                      error={!!errors["year"]}
                      helperText={errors["year"]}
                    />
                  </Grid>
                           
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => {
                      handleInputChange(e);
                      setPassword(e.target.value);
                    }}
                    error={!!errors["password"]}
                    helperText={
                      errors["password"] ||
                      "Password must be at least 8 characters long"
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="repeatedPassword"
                    label="Re-type Password"
                    type={showPassword ? "text" : "password"}
                    id="repeatedPassword"
                    autoComplete="new-password"
                    value={repeatedPassword}
                    onChange={(e) => {
                      handleInputChange(e);
                      setRepeatedPassword(e.target.value);
                    }}
                    error={password !== repeatedPassword}
                    helperText={
                      password !== repeatedPassword
                        ? "Passwords do not match"
                        : ""
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "10px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={agreeTerms}
                        onChange={handleAgreeTermsChange}
                        name="agreeTerms"
                        color="primary"
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        id="terms"
                      >
                        I agree to the{" "}
                        <Link href="/terms" target="_blank">
                          Terms and Conditions
                        </Link>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              {/* {otpSent && (
                <Grid item xs={12} style={{ marginTop: '16px',marginBottom: '16px' }}>
                  <TextField
                    required
                    fullWidth
                    name="otp"
                    label="OTP"
                    id="otp"
                    autoComplete="one-time-code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    error={otp.trim() === ""}
                    helperText={otp.trim() === "" ? "Please enter the OTP." : ""}
                  />
                </Grid>
              )}
              <Grid container spacing={2} justifyContent="space-between">
             <Grid
                item
                xs={6}
              >
                <Button
                fullWidth
                  type="reset"
                  variant="contained"
                  className="resetBtn"
                  onClick={otpSent ? handleResendOtp : () => {
                    setInputValue({
                      firstName: '',
                      lastName: '',
                      email: '',
                      password: '',
                      repeatedPassword: '',
                      year: '',
                      Degree: '',
                      Dept: '',
                    });
                    setIsInputEmpty({
                      firstName: false,
                      lastName: false,
                      email: false,
                      password: false,
                      repeatedPassword: false,
                      year: false,
                      Degree: false,
                      Dept: false,
                    });
                    setErrors({});
                    setOtp("");
                    setOtpSent(false);
                    setResendDisabled(false);
                    setPassword('');
                    setRepeatedPassword('');
                  }}
                  disabled={otpSent && resendDisabled}>
                 {otpSent ? (
                resendDisabled ?"Sending OTP" : "Resend OTP"
              ) : "Reset"}

                </Button>
                </Grid> */}
              <Grid item xs={6}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  className="submitBtn"
                  disabled={isSubmitDisabled}
                  // component={RouterLink}  // Use 'RouterLink' only when otpSent is true
                  // to= '/VerifyEmail'// Set to null when otpSent is false
                  sx={{
                    width: "100%",
                    color: "white",
                    backgroundColor: "#1D617A",
                    ":hover": { backgroundColor: "#1D617A" },
                    textTransform: "none",
                  }}
                >
                  Verify email
                </Button>
              </Grid>
              {/* </Grid> */}
              <Grid container justifyContent="flex-end">
                <Grid item style={{ marginTop: "20px" }}>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          >
            <Alert
              elevation={6}
              variant="filled"
              severity={snackbar.severity}
              onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
