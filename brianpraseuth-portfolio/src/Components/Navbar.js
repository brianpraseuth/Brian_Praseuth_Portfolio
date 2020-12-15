import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Toolbar,
  AppBar,
  // Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  }
}));

export default function Navbar() {
    const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Brian Praseuth
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
