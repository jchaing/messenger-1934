import React from "react";
import { Typography } from "@material-ui/core";

const TimeStamp = (props) => {
  const {classesDate, time } = props
  return <Typography className={classesDate}>{time}</Typography>;
}

export default TimeStamp;