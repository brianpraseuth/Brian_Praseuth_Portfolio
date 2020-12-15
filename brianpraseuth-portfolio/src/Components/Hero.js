import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
//   Typography,
//   Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    }
}}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Box>Brian Praseuth</Box>
      </Box>
    </div>
  );
}
