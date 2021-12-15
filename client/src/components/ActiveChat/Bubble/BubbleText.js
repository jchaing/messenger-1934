import React from "react";
import { Box, Typography } from "@material-ui/core";

const BubbleText = (props) => {
  const { classesBubble, classesText, text } = props;
  return (
    <Box className={classesBubble}>
      <Typography className={classesText}>{text}</Typography>
    </Box>
  );
}

export default BubbleText;