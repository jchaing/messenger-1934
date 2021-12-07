import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  makeStyles
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import SideBanner from "./SideBanner";
import AccountQuestion from "./components/Form/AccountQuestion";
import AccountForm from "./components/Form/AccountForm";

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  accountGrid: {
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
  },
}));

const signupForm = [
  {
    ariaLabel: "username",
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    ariaLabel: "e-mail address",
    label: "E-mail address",
    name: "email",
    type: "email",
  },
  {
    ariaLabel: "password",
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    ariaLabel: "confirm password",
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];

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
  console.log(formErrorMessage)

  return (
    <Grid container direction="row" className={classes.root}>
      <SideBanner />
      <Grid item container xs={12} sm={7} className={classes.accountGrid}>
        <AccountQuestion
          history={history}
          question="Already have an account?"
          buttonLabel="Login"
          route="/login"
        />
        <AccountForm
          onSubmit={handleRegister}
          message="Create an account."
          accountForm={signupForm}
          buttonText="Create"
          isLogin={false}
          formErrorMessage={formErrorMessage}
        />
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
