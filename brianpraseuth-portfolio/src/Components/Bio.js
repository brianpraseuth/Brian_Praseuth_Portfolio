import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, 
  Typography, 
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bioDiv: {
    backgroundColor: "#eddcd2",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));

export default function Bio() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.bioDiv}>
            <img src="images/profile-picture.jpg"></img>
            <Typography>
                This is where my bio is going
            </Typography>
      </Box>
    </div>
  );
}