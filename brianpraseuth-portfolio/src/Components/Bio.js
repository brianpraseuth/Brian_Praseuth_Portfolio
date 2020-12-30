import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, 
  Typography, 
//   Link,
} from "@material-ui/core";
import profilePicture from "../Components/images/profile-picture.jpg";


const useStyles = makeStyles((theme) => ({
  bioDiv: {
    backgroundColor: "#d9d9d9",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  profilePicture: {
      height: "80%",
      borderRadius: "50%",
  },
  liItems: {
      listStyleType: "none",
      lineHeight: "250%",
  }
}));

export default function Bio() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.bioDiv}>
            <img className={classes.profilePicture} src={profilePicture} alt=""></img>
            <Typography>
                <ul className={classes.liItems}>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>UXUI</li>
                    <li>SQL | NoSQL</li>
                </ul>
            </Typography>
      </Box>
    </div>
  );
}