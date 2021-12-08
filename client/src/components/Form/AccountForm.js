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
    width: theme.spacing(47.5),
    height: theme.spacing(44.75),
    marginTop: theme.spacing(-12.5),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(40),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(-25)
    },
  },
  message: {
    height: theme.spacing(5),
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
