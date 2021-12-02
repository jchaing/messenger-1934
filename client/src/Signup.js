import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import SideBanner from "./SideBanner";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "1024px",
    height: "700px",
    background: "#FFFFFF",
    "@media screen and (max-width: 1024px)": {
      background: `linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)`,
    },
  },
  signupGrid: {
    position: "relative",
    "@media screen and (max-width: 1024px)": {
      top: "100%",
    },
  },
  loginAccount: {
    position: "absolute",
    width: "336px",
    height: "54px",
    left: "646px",
    top: "30px",
    "@media screen and (max-width: 1024px)": {
      left: "446px",
    },
  },
  haveAccount: {
    position: "absolute",
    height: "19px",
    left: "0%",
    right: "50.6%",
    top: "calc(50% - 19px/2 + 1.38px)",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    /* identical to box height */
    textAlign: "center",
    color: "#B0B0B0",
  },
  loginButtonGrid: {
    position: "absolute",
    left: "58.33%",
    right: "0%",
    top: "0%",
    bottom: "0%",
  },
  loginButton: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    background: "#FFFFFF",
    borderRadius: "5px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "19px",
    textAlgin: "center",
    color: "#3A8DFF",
    paddingLeft: "52px",
    paddingRight: "51px",
    paddingTop: "16px",
    paddingBottom: "19px",
    "&:hover": {
      boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    },
  },
  form: {
    position: "absolute",
    width: "380px",
    height: "544px",
    left: "522px",
    top: "150px",
    "@media screen and (max-width: 1024px)": {
      left: "322px",
    },
  },
  createAnAccount: {
    position: "absolute",
    height: "40px",
    left: "0%",
    right: "37.89%",
    // top: "calc(50% - 40px/2 - 192px)",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "26px",
    lineHeight: "40px",
    /* identical to box height, or 154% */
    color: "#000000",
  },
  usernameGrid: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "12.26%",
    bottom: "72.17%",
  },
  usernameLabel: {
    "&.shrink": {
      position: "absolute",
      height: "19px",
      left: "1.32%",
      top: "calc(50% - 19px/2 - 23.5px)",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "19px",
      lineHeight: "19px",
      /* identical to box height */
      color: "#B0B0B0",
    },
  },
  usernameText: {
    height: "19px",
    paddingLeft: "1.32%",
    paddingTop: "19.18px",
    right: "61.05%",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    /* identical to box height */
    color: "#000000",
  },
  emailGrid: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "32.26%",
    bottom: "47.41%",
  },
  emailLabel: {
    "&.shrink": {
      position: "absolute",
      height: "19px",
      left: "1.32%",
      top: "calc(50% - 19px/2 - 23px)",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "19px",
      lineHeight: "19px",
      /* identical to box height */
      color: "#B0B0B0",
    },
  },
  emailText: {
    height: "19px",
    paddingLeft: "1.32%",
    paddingTop: "20.18px",
    right: "61.05%",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    /* identical to box height */
    color: "#000000",
  },
  passwordGrid: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "52.03%",
    bottom: "22.64%",
  },
  passwordLabel: {
    "&.shrink": {
      position: "absolute",
      height: "19px",
      left: "1.32%",
      top: "calc(50% - 19px/2 - 23px)",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "19px",
      lineHeight: "19px",
      /* identical to box height */
      color: "#B0B0B0",
    },
  },
  passwordText: {
    height: "19px",
    paddingLeft: "1.32%",
    paddingTop: "20.18px",
    right: "61.05%",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "19px",
    /* identical to box height */
    color: "#000000",
  },
  confirmPasswordGrid: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "71.79%",
  },
  confirmPasswordLabel: {
    "&.shrink": {
      position: "absolute",
      height: "19px",
      left: "1.32%",
      top: "calc(50% - 19px/2 - 23px)",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "19px",
      lineHeight: "19px",
      /* identical to box height */
      color: "#B0B0B0",
    },
  },
  confirmPasswordText: {
    height: "19px",
    paddingLeft: "1.32%",
    paddingTop: "20.18px",
    right: "61.05%",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "19px",
    /* identical to box height */
    color: "#000000",
  },
  createButtonGrid: {
    position: "absolute",
    left: "28.95%",
    right: "28.95%",
    top: "88.55%",
    bottom: "0%",
  },
  createButton: {
    position: "absolute",
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: "3px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "22px",
  },
}));

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
    <SideBanner />
    <Grid item className={classes.signupGrid} justifyContent="center">
      <Box>
        <Grid container item className={classes.loginAccount}>
          <Typography className={classes.haveAccount}>
            Already have an account?
          </Typography>
          <Grid className={classes.loginButtonGrid}>
            <Button
              className={classes.loginButton}
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid className={classes.form}>
            <Typography className={classes.createAnAccount}>
              Create an account.
            </Typography>
            <Grid className={classes.usernameGrid}>
              <FormControl fullWidth="true" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  InputProps={{
                    classes: {
                      input: classes.usernameText
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.usernameLabel,
                      shrink: "shrink"
                    }
                  }}
                />
              </FormControl>
            </Grid>
            <Grid className={classes.emailGrid}>
              <FormControl fullWidth="true" required>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  InputProps={{
                    classes: {
                      input: classes.emailText
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.emailLabel,
                      shrink: "shrink"
                    }
                  }}
                />
              </FormControl>
            </Grid>
            <Grid className={classes.passwordGrid}>
              <FormControl 
                error={!!formErrorMessage.confirmPassword}
                fullWidth="true"
                required
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  InputProps={{
                    classes: {
                      input: classes.passwordText
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.passwordLabel,
                      shrink: "shrink"
                    }
                  }}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid className={classes.confirmPasswordGrid}>
              <FormControl 
                error={!!formErrorMessage.confirmPassword}
                fullWidth="true"
                required
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  InputProps={{
                    classes: {
                      input: classes.confirmPasswordText
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.confirmPasswordLabel,
                      shrink: "shrink"
                    }
                  }}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid className={classes.createButtonGrid}>
              <Button
                color="primary"
                className={classes.createButton}
                type="submit"
                variant="contained"
                size="large"
                fullWidth="true"
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
