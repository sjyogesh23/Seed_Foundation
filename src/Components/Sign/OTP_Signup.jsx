import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import axios from "axios";
import BASE_URL from "../../global_vars";
import { useLocation, useNavigate } from "react-router-dom";

export const OTP_Signup = (props) => {
  const storedTimestamp =
    parseInt(localStorage.getItem("otpResendTimestamp"), 10) || 0;
  const { state } = useLocation();
  const navigate = useNavigate();

  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(calculateCountdown());
  const [confirmationCode, setConfirmationCode] = useState("");
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "info",
  });

  function calculateCountdown() {
    const elapsedTime = Math.floor((Date.now() - storedTimestamp) / 1000);
    return Math.max(0, 30 - elapsedTime);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `${BASE_URL}/${state.endpoint}/confirm-signup`;
    const formData = new FormData(event.currentTarget);
    const data = {
      email: state.data.email,
      confirmation_code: formData.get("confirmation_code"),
    };

    axios
      .post(apiUrl, data)
      .then((response) => {
        setSnackbar((prev) => ({
          ...prev,
          open: true,
          message: response.data.message,
          severity: "success",
        }));
        navigate("/Profile", { replace: true });
        // Handle success, if needed
      })
      .catch((error) => {
        switch (error?.response?.status) {
          case 400:
            setSnackbar((prev) => ({
              ...prev,
              open: true,
              message: error.response.data.message,
              severity: "error",
            }));
        }
        // Handle error, if needed
      });
  };

  useEffect(() => {
    let countdownInterval;

    if (resendDisabled) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [resendDisabled]);

  const handleResendClick = () => {
    axios
      .post(`${BASE_URL}/${state.endpoint}/resend-code`, {
        email: state.data.email,
      })
      .then((response) => {
        setSnackbar((prev) => ({
          ...prev,
          open: true,
          message: response.data.message,
          severity: "success",
        }));
      })
      .catch((error) => {
        setSnackbar((prev) => ({
          ...prev,
          open: true,
          message: error.response.data.message,
          severity: "error",
        }));
      });
    const timestamp = Date.now();
    localStorage.setItem("otpResendTimestamp", timestamp);
    setCountdown(30);
    setResendDisabled(true);

    // Simulate API call to resend OTP
    setTimeout(() => {
      setResendDisabled(false);
    }, 30000);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}
    >
      <CssBaseline />
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{
            maxWidth: "500px",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <TextField
            autoComplete="given-name"
            name="confirmation_code"
            required
            fullWidth
            id="confirmation_code"
            label="Enter OTP"
            autoFocus
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              width: "100%",
              color: "white",
              backgroundColor: "#1D617A",
              ":hover": { backgroundColor: "#1D617A" },
              textTransform: "none",
            }}
            // href="/Profile"
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{
              mt: 1,
              mb: 2,
              width: "100%",
              color: "#1D617A",
              backgroundColor: "#fff",
              ":hover": { backgroundColor: "#fff", color: "#1D617A" },
              border: "1px solid #1D617A",
              textTransform: "none",
            }}
            onClick={handleResendClick}
            disabled={resendDisabled}
          >
            Resend OTP {resendDisabled ? `(${countdown}s)` : ""}
          </Button>
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
  );
};
