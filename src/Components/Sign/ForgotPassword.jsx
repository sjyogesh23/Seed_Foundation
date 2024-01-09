import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  CssBaseline,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./ForgotPassword.css";

export const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Clear OTP value when component mounts
    setOtp("");
  }, []);

  const handleInputChange = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setStep(2); // Move to the next step
  };

  const handleVerifyOtpSubmit = (event) => {
    event.preventDefault();
    // Add your logic for OTP verification here
    setStep(3); // Move to the next step
  };

  const handleResetPasswordSubmit = (event) => {
    event.preventDefault();

    if (password !== repeatedPassword) {
      setErrors({ ...errors, password: "Passwords do not match" });
      return;
    }

    setErrors({});

    // Add your logic for password reset here
    console.log("Password reset successful");
    setStep(4); // Move to the next step or reset to step 1 if needed
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ minHeight: "80vh", display: "grid", placeItems: "center" }}
    >
      <CssBaseline />
      <div className="form-paper">
        <Typography variant="h5" gutterBottom className="logo_color">
          Forgot Password
        </Typography>

        {step === 1 && (
          // Email Input Form
          <form onSubmit={handleEmailSubmit}>
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Enter Email"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
              sx={{
                width: "100%",
                color: "white",
                backgroundColor: "#1D617A",
                ":hover": { backgroundColor: "#1D617A" },
                textTransform: "none",
              }}
            >
              Submit Email
            </Button>
          </form>
        )}

        {step === 2 && (
          // OTP Verification Form
          <form onSubmit={handleVerifyOtpSubmit}>
            <TextField
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Enter OTP"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
              sx={{
                width: "100%",
                color: "white",
                backgroundColor: "#1D617A",
                ":hover": { backgroundColor: "#1D617A" },
                textTransform: "none",
              }}
            >
              Verify OTP
            </Button>
          </form>
        )}

        {step === 3 && (
          // Reset Password Form
          <form onSubmit={handleResetPasswordSubmit}>
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
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
            <Grid>
              <TextField
                style={{ width: "356px" }}
                required
                variant="outlined"
                margin="normal"
                fullWidth
                name="repeatedPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={repeatedPassword}
                onChange={(e) => {
                  handleInputChange(e);
                  setRepeatedPassword(e.target.value);
                }}
                error={password !== repeatedPassword}
                helperText={
                  password !== repeatedPassword ? "Passwords do not match" : ""
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
              href="/SignIn"
              sx={{
                width: "100%",
                color: "white",
                backgroundColor: "#1D617A",
                ":hover": { backgroundColor: "#1D617A" },
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </Container>
  );
};
