import React from "react";
import { useState } from "react";
import "./style.css";
import {
  Button,
  InputBase,
  Paper,
  IconButton,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  TextField,
  Link,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const defaultTheme = createTheme();

export default function MajorInitiatives() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          fontFamily: "Inter",
        }}
      >
        {/* Rest of the code remains unchanged */}
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
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
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

            {/* <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "85%",
                maxWidth: "380px",
                boxShadow: "none",
              }}
            >
              <InputBase
                sx={{
                  flex: 1,
                  py: "1vh",
                  px: "2vh",
                  borderRadius: "2vh",
                  "& input": {
                    border: "2px solid #808080",
                    py: "1.5vh",
                    px: "2vh",
                    borderRadius: "2vh",
                  },
                  "& input:focus": {
                    border: "2px solid #1D617A",
                  },
                }}
                required
                placeholder="Password"
                inputProps={{ "aria-label": "Password" }}
                type={showPassword ? "text" : "password"}
              />
              <IconButton
                onClick={togglePasswordVisibility}
                color="primary"
                sx={{
                  color: "#1D617A",
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Paper> */}

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
                  variant="contained"
                  sx={{
                    width: "100%",
                    color: "white",
                    backgroundColor: "#1D617A",
                    ":hover": { backgroundColor: "#1D617A" },
                    textTransform: "none",
                  }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <Typography variant="body2" align="center" color={"#808080"}>
                  <Container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: "1px",
                        width: "30%",
                        backgroundColor: "#808080",
                        marginInlineEnd: 2,
                        borderRadius: 10,
                      }}
                    ></Box>
                    or
                    <Box
                      sx={{
                        height: "1px",
                        width: "30%",
                        backgroundColor: "#808080",
                        marginInlineStart: 2,
                        borderRadius: 10,
                      }}
                    ></Box>
                  </Container>
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    mb: 2,
                    backgroundColor: "white",
                    border: "1px solid #8D8D8D",
                    boxShadow: "none",
                    width: "100%",
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "24",
                    }}
                  >
                    {/* <GoogleIcon sx={{ marginRight: '10px'}} /> */}
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/color/48/google-logo.png"
                      alt="google-logo"
                    />
                    <Typography
                      color={"#8D8D8D"}
                      sx={{ ml: 2, textTransform: "none" }}
                    >
                      Sign in with Google
                    </Typography>
                  </Container>
                </Button>
              </Grid>

              <div className="signup-wrapper">
                <div className="">Don't have an account?</div>
                <a className="sign-up-route" href="/SignUp">
                  Sign up
                </a>
              </div>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
