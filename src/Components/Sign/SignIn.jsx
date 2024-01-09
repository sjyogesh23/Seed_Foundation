import React, { useState, useEffect } from "react";
import "./signin_style.css";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
const BASE_URL = require("../../global_vars");
const defaultTheme = createTheme();

export const SignIn = (props) => {
  const [formValid, setFormValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "info",
  });

  const [response, setResponse] = useState({});

  const handleInputChange = (event) => {
    const formData = new FormData(event.target.form);
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if both email and password are not empty
    setFormValid(email.trim() !== "" && password.trim() !== "");
  };

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signin");
    const data = new FormData(event.target);

    // fetching values from input fields
    const email = data.get("email");
    const password = data.get("password");
    const selectedValue = data.get("row-radio-buttons-group");

    // If you plan to make HTTP requests using Axios, you can include that code here.
    const endpoint = selectedValue === "Student" ? "student" : "member";
    axios
      .post(`${BASE_URL}/signin/${endpoint}`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);

        setSnackbar((prev) => ({
          ...prev,
          open: true,
          message: "Sign in Successful",
          severity: "success",
        }));

        const data = response.data;
        const userAttr = data.userAttributes;
        const userRole = data.role;
        const tokens = data.tokens;

        //Pass user data to the parent component
        props.setUserData(data);

        // Save user data to local storage
        localStorage.setItem("userData", JSON.stringify(data));

        // Automatically navigate to the /Profile page
        navigate("/Profile", { replace: true });
      })
      .catch((err) => {
        switch (err?.response?.status) {
          case 401:
            // handle Incorrect username or password
            setSnackbar((prev) => ({
              ...prev,
              open: true,
              message: err.response.data,
              severity: "error",
            }));
            break;
          case 403:
            // handle User doesn't exist
            setSnackbar((prev) => ({
              ...prev,
              open: true,
              message: err.response.data,
              severity: "error",
            }));
            break;
          default:
            // handle other errors
            setSnackbar((prev) => ({
              ...prev,
              open: true,
              message: "An error occurred during sign in.",
              severity: "error",
            }));
        }
      });
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{ fontFamily: "Inter" }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color={"#1D617A"}
              sx={{ fontFamily: "Inter", fontWeight: "400" }}
            >
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInputChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                helperText="Password must be at least 8 characters long"
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box className="forgot-pwd">
                    <Link href="/ForgotPassword" underline="hover">
                      Forgot password?
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ width: "100%", textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#1D617A",
                      ":hover": { backgroundColor: "#1D617A" },
                      textTransform: "none",
                    }}
                    disabled={!formValid}
                    as={Link}
                    to="/Profile"
                  >
                    Sign In
                  </Button>
                </Grid>

                <div className="signup-wrapper-in">
                  <div>Don't have an account?</div>
                  <a className="sign-up-route" href="/SignUp">
                    Sign up
                  </a>
                </div>
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
