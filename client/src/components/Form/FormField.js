import React from "react";
import {
  Grid,
  FormControl,
  TextField,
  makeStyles,
  Button,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputGrid: {
    marginTop: "5%",
    [theme.breakpoints.down("xs")]: {
      marginRight: "4%",
    }
  },
  inputLabel: {
    "&.shrink": {
      height: "19px",
      left: "1.32%",
      top: "calc(50% - 19px/2 - 23px)",
      fontFamily: theme.typography.fontFamily,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "19px",
      lineHeight: theme.typography.lineHeight,
      /* identical to box height */
      color: theme.palette.secondary.main,
    },
  },
  inputText: {
    height: "19px",
    paddingLeft: "1.32%",
    paddingTop: "20.18px",
    right: "61.05%",
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: theme.typography.fontWeight,
    fontSize: theme.typography.fontSize,
    lineHeight: theme.typography.lineHeight,
    /* identical to box height */
    color: "#000000",
  },
  forgotButton: {
    position: "relative",
    left: "0%",
    right: "0%",
    top: "-26px",
    float: "right",
    bottom: "0%",
    background: "#FFFFFF",
    borderRadius: "5px",
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: theme.typography.fontWeight,
    fontSize: "12px",
    lineHeight: "16px",
    textAlgin: "center",
    color: theme.palette.primary.main,
    padding: 0,
  },
}));

const FormField = (props) => {
  const { ariaLabel, label, name, type, isLogin, formErrorMessage } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.inputGrid}>
      <FormControl
        error={formErrorMessage ? !!formErrorMessage.confirmPassword : null}
        margin="normal"
        fullWidth="true"
        required
      >
        <Grid>
          <TextField
            aria-label={ariaLabel}
            label={label}
            name={name}
            type={type}
            inputProps={
              !isLogin && type === "password" ? { minLength: 6 } : undefined
            }
            InputProps={{
              classes: {
                input: classes.inputText,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                shrink: "shrink",
              },
              shrink: true,
            }}
            fullWidth="true"
          />
          {formErrorMessage && type === "password" && (
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          )}
          {isLogin && type === "password" && (
            <Button className={classes.forgotButton}>Forgot?</Button>
          )}
        </Grid>
      </FormControl>
    </Grid>
  );
};

export default FormField;
