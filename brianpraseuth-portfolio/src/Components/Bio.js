import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, 
  Typography, 
//   Link,
} from "@material-ui/core";
import profilePicture from "../Components/images/profile-picture.jpg";
import vectorBackground from "../Components/images/vectorBackground.jpg";

const useStyles = makeStyles((theme) => ({
  bioDiv: {
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
  },
  background: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('+ vectorBackground +')',
      backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  }
}));

export default function Bio() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
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