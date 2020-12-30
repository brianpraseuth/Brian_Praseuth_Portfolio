import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Toolbar,
  AppBar,
  Link,
  // Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#18435a",
    
  }
}));

export default function Navbar() {
    const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h5" color="primary">
            Brian Praseuth
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
