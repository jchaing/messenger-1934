import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import bgImage from "./assets/bg-img.png";
import svgChatIcon from "./assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: "47vh",
      backgroundPosition: "top",
    },
  },
  background: {
    background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #86B9FF 100%)`,
    mixBlendMode: "normal",
    opacity: "0.85",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: "47vh",
    },
  },
  logoGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: theme.spacing(14),
    [theme.breakpoints.down("xs")]: {
      height: "57vh",
      paddingBottom: theme.spacing(0)
    },
  },
  chat: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "40px",
  },
  typography: {
    top: "calc(50% - 80px/2 + 53px)",
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontSize: "26px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    maxWidth: theme.spacing(37.5),
  },
}));

const SideBanner = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={5} className={classes.image}>
      <Grid container className={classes.background}>
        <Box className={classes.logoGrid}>
          <img
            src={svgChatIcon}
            alt="Chat Bubble Icon"
            className={classes.chat}
          />
          <Typography className={classes.typography}>
            Converse with anyone with any language
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SideBanner;
