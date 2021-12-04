import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  makeStyles
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import SideBanner from "./SideBanner";

const useStyles = makeStyles(() => ({
  root: {
    // position: "relative",
    // width: "1024px",
    // height: "700px",
    // background: "#FFFFFF",
    // "@media screen and (max-width: 1024px)": {
    //   background: `linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)`,
    // },
    width: "100vw",
    height: "100vh",
  },
  loginGrid: {
    // position: "relative",
    // "@media screen and (max-width: 1024px)": {
    //   top: "100%",
    // },
    width: "100vw",
    justifyContent: "center",
  },
  // createAccount: {
  //   position: "absolute",
  //   width: "351px",
  //   height: "54px",
  //   left: "631px",
  //   top: "30px",
  //   "@media screen and (max-width: 1024px)": {
  //     left: "431px",
  //   },
  // },
  // noAccount: {
  //   position: "absolute",
  //   height: "19px",
  //   width: "152px",
  //   left: "0%",
  //   right: "56.98%",
  //   top: "calc(50% - 19px/2 - 1.18px)",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: "normal",
  //   fontSize: "14px",
  //   lineHeight: "19px",
  //   textAlign: "center",
  //   color: "#B0B0B0",
  // },
  // buttonBox: {
  //   position: "absolute",
  //   left: "51.57%",
  //   right: "0%",
  //   top: "0%",
  //   bottom: "0%",
  // },
  // createAccountButton: {
  //   position: "absolute",
  //   left: "0%",
  //   right: "0%",
  //   top: "0%",
  //   bottom: "0%",
  //   background: "#FFFFFF",
  //   borderRadius: "5px",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: 600,
  //   fontSize: "14px",
  //   lineHeight: "19px",
  //   textAlgin: "center",
  //   color: "#3A8DFF",
  //   paddingLeft: "34px",
  //   paddingRight: "33px",
  //   paddingTop: "16px",
  //   paddingBottom: "19px",
  //   "&:hover": {
  //     boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
  //   },
  // },
  // form: {
  //   position: "absolute",
  //   width: "380px",
  //   height: "358px",
  //   left: "522px",
  //   top: "170px",
  //   "@media screen and (max-width: 1024px)": {
  //     left: "322px"
  //   },
  // },
  // welcomeBack: {
  //   position: "absolute",
  //   height: "40px",
  //   left: "0%",
  //   right: "50.26%",
  //   top: "calc(50% - 40px/2 - 159px)",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: "600",
  //   fontSize: "26px",
  //   lineHeight: "40px",
  //   /* identical to box height, or 154% */
  //   color: "#000000",
  // },
  // usernameGrid: {
  //   position: "absolute",
  //   left: "0%",
  //   right: "0%",
  //   top: "20.39%",
  //   bottom: "61.17%",
  // },
  // usernameLabel: {
  //   "&.shrink": {
  //     position: "absolute",
  //     height: "19px",
  //     left: "1.32%",
  //     right: "73.42%",
  //     top: "calc(50% - 19px/2 - 23.5px)",
  //     fontFamily: "Open Sans",
  //     fontStyle: "normal",
  //     fontWeight: "normal",
  //     fontSize: "19px",
  //     lineHeight: "19px",
  //     /* identical to box height */
  //     color: "#B0B0B0",
  //   },
  // },
  // inputText: {
  //   height: "19px",
  //   paddingLeft: "1.32%",
  //   paddingTop: "20.18px",
  //   right: "61.05%",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: "600",
  //   fontSize: "14px",
  //   lineHeight: "19px",
  //   /* identical to box height */
  //   color: "#000000",
  // },
  // passwordGrid: {
  //   position: "absolute",
  //   left: "0%",
  //   right: "0%",
  //   top: "49.44%",
  //   bottom: "32.4%",
  //   // zIndex: 1
  // },
  // passwordLabel: {
  //   "&.shrink": {
  //     position: "absolute",
  //     height: "19px",
  //     left: "1.32%",
  //     right: "81.84%",
  //     top: "calc(50% - 19px/2 - 23px)",
  //     fontFamily: "Open Sans",
  //     fontStyle: "normal",
  //     fontWeight: "normal",
  //     fontSize: "19px",
  //     lineHeight: "19px",
  //     /* identical to box height */
  //     color: "#B0B0B0",
  //   },
  // },
  // passwordText: {
  //   height: "19px",
  //   paddingLeft: "1.32%",
  //   paddingTop: "20.18px",
  //   right: "61.05%",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: "600",
  //   fontSize: "20px",
  //   lineHeight: "19px",
  //   /* identical to box height */
  //   color: "#000000",
  // },
  // forgotButton: {
  //   position: "relative",
  //   left: "0%",
  //   right: "0%",
  //   top: "-26px",
  //   float: "right",
  //   bottom: "0%",
  //   background: "#FFFFFF",
  //   borderRadius: "5px",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: 600,
  //   fontSize: "12px",
  //   lineHeight: "16px",
  //   textAlgin: "center",
  //   color: "#3A8DFF",
  //   padding: 0,
  // },
  // loginButtonGrid: {
  //   position: "absolute",
  //   left: "28.95%",
  //   right: "28.95%",
  //   top: "84.36%",
  //   bottom: "0%",
  // },
  // loginButton: {
  //   position: "absolute",
  //   top: "0%",
  //   left: "0%",
  //   right: "0%",
  //   bottom: "0%",
  //   borderRadius: "3px",
  //   fontFamily: "Open Sans",
  //   fontStyle: "normal",
  //   fontWeight: "bold",
  //   fontSize: "16px",
  //   lineHeight: "22px",
  // },
}));

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container direction="row" className={classes.root}>
    <SideBanner />
    <Grid item container xs={12} sm={7} className={classes.loginGrid}>
      <Box>
        <Grid container item className={classes.createAccount}>
          <Typography className={classes.noAccount}>
            Don't have an account?
          </Typography>
          <Grid className={classes.buttonBox}>
            <Button
              className={classes.createAccountButton}
              onClick={() => history.push("/register")}
            >
              Create account
            </Button>
          </Grid>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid className={classes.form}>
            <Typography className={classes.welcomeBack}>
              Welcome back!
            </Typography>
            <Grid className={classes.usernameGrid}>
              <FormControl margin="normal" fullWidth="true" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  InputProps={{
                    classes: {
                      input: classes.inputText
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
            <Grid className={classes.passwordGrid}>
              <FormControl margin="normal" fullWidth="true" required>
              <Grid>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
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
                  fullWidth="true"
                />
                <Button className={classes.forgotButton}>Forgot?</Button>
              </Grid>
              </FormControl>
            </Grid>
            <Grid className={classes.loginButtonGrid}>
              <Button 
                color="primary"
                className={classes.loginButton}
                type="submit"
                variant="contained"
                size="large"
                fullWidth="true"
              >
                Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
