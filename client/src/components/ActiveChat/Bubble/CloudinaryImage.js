import React from "react";
import { Grid } from "@material-ui/core";
import { Image, Transformation } from "cloudinary-react";

const CloudinaryImage = (props) => {
  const { classesImage, attachmentId, attachmentPublicId, width, height } = props;
  return (
    <Grid item key={attachmentId}>
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
  );
};

export default CloudinaryImage;
