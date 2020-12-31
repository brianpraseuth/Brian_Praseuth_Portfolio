import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, Typography, Link
//   Typography,
//   Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactDiv: {
    backgroundColor: "#fff",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
    contactLinks: {
    marginLeft: "35px",
    marginRight: "35px",
    fontSize: "1rem",
    } 
}));

export default function Infobar() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.contactDiv}>
            <Typography className={classes.contactLinks}><Link target="_blank" href="https://www.linkedin.com/in/brianpraseuth/"><i class="fab fa-linkedin"></i> Linkedin</Link></Typography>
            <Typography className={classes.contactLinks}><Link target="_blank" href="https://github.com/brianpraseuth"><i class="fab fa-github-square"></i> Github</Link></Typography>
            <Typography className={classes.contactLinks}><Link target="_blank" href="https://www.instagram.com/brianpraseuth/"><i class="fab fa-instagram-square"></i> Instagram</Link></Typography>
      </Box>
    </div>
  );
}