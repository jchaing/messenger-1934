import React from "react";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  accountQuestionGrid: {
    height: "54px",
    marginTop: "30px",
    marginRight: "42px",
    display: "flex",
    justifyContent: "flex-end",
  },
  question: {
    display: "flex",
    alignItems: "center",
    marginRight: "30px",
    fontSize: theme.typography.fontSize,
    color: theme.palette.secondary.main,
    textAlign: "center",
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      width: "152px",
    },
  },
  accountButton: {
    background: "#FFFFFF",
    borderRadius: "5px",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    lineHeight: theme.typography.lineHeight,
    textAlgin: "center",
    color: theme.palette.primary.main,
    width: "170px",
    height: "54px",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down("sm")]: {
      width: "120px",
    },
  },
}));

const AccountQuestion = (props) => {
  const { history, question, buttonLabel, route } = props
  const classes = useStyles();

  return (
    <Grid container item className={classes.accountQuestionGrid}>
      <Typography className={classes.question}>
        {question}
      </Typography>
      <Button
        className={classes.accountButton}
        onClick={() => history.push(`${ route }`)}
      >
        {buttonLabel}
      </Button>
    </Grid>
  );
};

export default AccountQuestion;
