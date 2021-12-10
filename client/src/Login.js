import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
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

const loginForm = [
  {
    id: 1,
    ariaLabel: "username",
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    id:2,
    ariaLabel: "password",
    label: "Password",
    name: "password",
    type: "password",
  },
];

const Login = (props) => {
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
    <Grid container className={classes.root}>
      <SideBanner />
      <Grid item container xs={12} sm={7} className={classes.accountGrid}>
        <AccountQuestion
          question="Don't have an account?"
          buttonLabel="Create account"
          route="/register"
        />
        <AccountForm
          onSubmit={handleLogin}
          message="Welcome back!"
          accountForm={loginForm}
          buttonText="Login"
          isLogin={true}
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
