import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import bgImage from "./assets/bg-img.png";
import svgChatIcon from "./assets/bubble.svg";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    width: "425px",
    height: "700px",
    left: "0px",
    top: "0px",
  },
  background: {
    position: "absolute",
    width: "425px",
    height: "700px",
    left: "0px",
    top: "0px",
    background: `linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)`,
    mixBlendMode: "normal",
    opacity: "0.85",
  },
  image: {
    position: "absolute",
    width: "425px",
    height: "700px",
    left: "0px",
    top: "0px"
  },
  box: {
    position: "absolute",
    width: "269px",
    height: "186px",
    left: "77.71px",
    top: "199px"
  },
  chat: {
    position: "absolute",
    width: "67px",
    height: "67px",
    left: "101.67px",
    top: "0px",
  },
  typography: {
    position: "absolute",
    height: "80px",
    left: "0%",
    right: "0%",
    top: "calc(50% - 80px/2 + 53px)",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "26px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
  },
}));

const SideBanner = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <img src={bgImage} alt="Background" className={classes.image} />
      <Grid className={classes.background}>
        <Box className={classes.box}>
          <img src={svgChatIcon} className={classes.chat} alt="Chat Bubble Icon" />
          <Typography className={classes.typography} justify="center">
            Converse with anyone with any language
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SideBanner;
