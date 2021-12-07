import React from "react";
import {
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formButtonGrid: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
  },
  formButton: {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: "3px",
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: theme.typography.button.fontWeight,
    fontSize: "16px",
    lineHeight: "22px",
    width: "160px",
    height: "56px",
  },
}));
const FormButton = (props) => {
  const { buttonText } = props;
  const classes = useStyles();
  
  return (
    <Grid item className={classes.formButtonGrid}>
      <Button
        color="primary"
        className={classes.formButton}
        type="submit"
        variant="contained"
        size="large"
        fullWidth="true"
      >
        {buttonText}
      </Button>
    </Grid>
  );
}

export default FormButton;