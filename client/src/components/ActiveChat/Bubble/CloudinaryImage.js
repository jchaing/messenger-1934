import React from "react";
import { Grid, Box, Modal } from "@material-ui/core";
import { Image, Transformation } from "cloudinary-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:"80%",
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
}));

const CloudinaryImage = (props) => {
  const {
    classesImage,
    attachmentId,
    attachmentPublicId,
    attachmentUrl,
    width,
    height,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item key={attachmentId} onClick={handleOpen}>
        <Image
          cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
          publicId={attachmentPublicId}
          className={classesImage}
        >
          <Transformation
            width={width}
            height={height}
            crop="thumb"
            dpr="auto"
            responsive
          />
        </Image>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={handleClose}
      >
        <Box className={classes.modal}>
          <img
            src={attachmentUrl}
            alt={attachmentPublicId}
            width="100%"
            height="auto"
          />
        </Box>
      </Modal>
    </>
  );
};

export default CloudinaryImage;
