import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import {
  TimeStamp,
  BubbleText,
  CloudinaryImage,
  OtherUserAvatar,
} from "./Bubble";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: theme.spacing(3),
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: theme.spacing(0.625),
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: theme.spacing(1),
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    marginBottom: theme.spacing(1.25),
    maxWidth: theme.spacing(50),
  },
  multiImage: {
    borderRadius: "5px 5px 0px 5px",
    cursor: "zoom-in"
  },
  singleImage: {
    borderRadius: "10px 10px 0px 10px",
    cursor: "zoom-in"
  },
  singleImageTextBubble: {
    background: "#F4F6FA",
    borderRadius: "0px 0px 0px 10px",
    marginBottom: theme.spacing(1.25),
    marginTop: theme.spacing(-5.125),
    width: theme.spacing(17.25),
    textAlign: "center",
  },
  avatar: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments, otherUser } = props;
  return (
    <Box className={classes.root}>
      {attachments === null && text && (
        <>
          <TimeStamp classesDate={classes.date} time={time} />
          <BubbleText
            classesBubble={classes.bubble}
            classesText={classes.text}
            text={text}
          />
        </>
      )}

      {attachments && attachments.length > 1 && (
        <>
          {text && (
            <BubbleText
              classesBubble={classes.bubble}
              classesText={classes.text}
              text={text}
            />
          )}
          <Grid container justifyContent="flex-end" spacing={1}>
            {attachments.map((pic) => {
              const attachment = JSON.parse(pic);
              return (
                <CloudinaryImage
                  classesImage={classes.multiImage}
                  attachmentId={attachment.id}
                  attachmentPublicId={attachment.publicId}
                  attachmentUrl={attachment.url}
                  width="85"
                  height="66"
                />
              );
            })}
          </Grid>
          <TimeStamp classesDate={classes.date} time={time} />
          <OtherUserAvatar
            otherUserUsername={otherUser.username}
            otherUserPhotoUrl={otherUser.photoUrl}
            classesAvatar={classes.avatar}
          />
        </>
      )}

      {attachments && attachments.length === 1 && (
        <>
          <TimeStamp classesDate={classes.date} time={time} />
          <Grid container justifyContent="flex-end" spacing={1}>
            {attachments &&
              attachments.map((pic) => {
                const attachment = JSON.parse(pic);
                return (
                  <CloudinaryImage
                    classesImage={classes.singleImage}
                    attachmentId={attachment.id}
                    attachmentPublicId={attachment.publicId}
                    attachmentUrl={attachment.url}
                    width="138"
                    height="138"
                  />
                );
              })}
          </Grid>
          {text && (
            <BubbleText
              classesBubble={classes.singleImageTextBubble}
              classesText={classes.text}
              text={text}
            />
          )}
          <OtherUserAvatar
            otherUserUsername={otherUser.username}
            otherUserPhotoUrl={otherUser.photoUrl}
            classesAvatar={classes.avatar}
          />
        </>
      )}
    </Box>
  );
};

export default SenderBubble;
