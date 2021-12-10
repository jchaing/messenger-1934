import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  accountQuestionGrid: {
    height: theme.spacing(6.75),
    marginTop: theme.spacing(3.75),
    marginRight: theme.spacing(5.25),
    display: "flex",
    justifyContent: "flex-end",
  },
  question: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3.75),
    fontSize: theme.typography.fontSize,
    color: theme.palette.secondary.main,
    textAlign: "center",
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(19),
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
    width: theme.spacing(21.25),
    height: theme.spacing(6.75),
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(15),
    },
  },
}));

const AccountQuestion = (props) => {
  const { question, buttonLabel, route } = props
  const history = useHistory();
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
