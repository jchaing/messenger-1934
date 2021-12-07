import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import FormField from "./FormField";
import FormButton from "./FormButton";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "380px",
    height: "358px",
    marginTop: "-100px",
    [theme.breakpoints.down("sm")]: {
      width: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "320px",
      marginTop: "-85%",
    },
  },
  message: {
    height: "40px",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight,
    fontSize: "26px",
    lineHeight: "40px",
    color: "#000000",
  },
}));

const AccountForm = (props) => {
  const { onSubmit, message, accountForm, buttonText, isLogin, formErrorMessage } = props;
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <Grid className={classes.form}>
        <Typography className={classes.message}>{message}</Typography>
        {accountForm.map((input) => {
          return (
            <FormField
              ariaLabel={input.ariaLabel}
              label={input.label}
              name={input.name}
              type={input.type}
              isLogin={isLogin}
              formErrorMessage={formErrorMessage} 
            />
          );
        })}
        <FormButton buttonText={buttonText} />
      </Grid>
    </form>
  );
};

export default AccountForm;
