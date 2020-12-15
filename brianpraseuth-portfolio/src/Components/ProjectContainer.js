import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
//   Box,
  Typography,
  Container,
  Grid,
//   Button,
} from "@material-ui/core";
import Projects from './Projects';

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    paddingTop: theme.spacing(3),
  },
  projectsTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

export default function ProjectContainer() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h4" className={classes.projectsTitle}>
          Projects
        </Typography>
        <Grid Container spacing={3}>
          {/* Map through projects here using */}
          <Projects />
        </Grid>
      </Container>
    </div>
  );
}
