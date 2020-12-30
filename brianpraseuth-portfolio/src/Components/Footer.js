import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography, 
    Link,
  } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  footerDiv: {
    backgroundColor: "#26272b",
    height: "auto",
    fontSize: "15px",
    color: "#fff",
    lineHeight: "24px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerDiv}>
      <div>
        <div>
          <div>
            <p class="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by{" "}
              <Link style={{color: "#fff"}} href="#">Brian Praseuth</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
