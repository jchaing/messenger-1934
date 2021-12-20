import React, { useState, useRef } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: theme.spacing(2),
  },
  input: {
    height: theme.spacing(9),
    backgroundColor: "#F4F6FA",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
    opacity: 0.2,
    cursor: "copy",
  },
  image: {
    marginRight: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);
  const reference = useRef([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments.length === 0 ? null : attachments,
    };
    await postMessage(reqBody);
    setText("");
    setAttachments([]);
    reference.current = [];
  };

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      showCompletedButton: true,
    },
    (error, result) => {
      if (error) console.error(`Cloundinary Upload Error: ${error}`);

      if (result.event === "success") {
        reference.current.push({
          id: result.info.public_id,
          publicId: result.info.public_id,
          url: result.info.url,
        });

        setAttachments([...reference.current]);
      }
    }
  );

  const showWidget = () => {
    widget.open();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              {attachments?.map((attachment) => {
                  return (
                    <img
                      key={attachment.id}
                      className={classes.image}
                      src={attachment.url}
                      alt={attachment.publicId}
                      width="85"
                      height="65"
                    />
                  );
                })}
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <SentimentSatisfiedAltIcon className={classes.icon} />
              <SvgIcon className={classes.icon} onClick={showWidget}>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
