import React from "react";
import { Avatar } from "@material-ui/core";

const OtherUserAvatar = (props) => {
  const {otherUserUsername, otherUserPhotoUrl, classesAvatar } = props
  return (
    <Avatar
      alt={otherUserUsername}
      src={otherUserPhotoUrl}
      className={classesAvatar}
    />
  );
}

export default OtherUserAvatar;