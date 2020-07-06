import React from "react";
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
// @ts-ignore
import Resume from "../resume.pdf";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) => createStyles({

  root: {
    marginTop: theme.spacing(14)
  },

  caption: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem"
  }

});

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.Component<HomeProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h6" color="primary" style={{ marginBottom: "1rem" }}>Hi, my name is</Typography>
        <Typography variant="h2" style={{ marginBottom: "1rem" }}>Junhong Wang.</Typography>
        <Typography variant="h2" color="textSecondary" style={{ marginBottom: "1rem" }}>I build websites and games.</Typography>
        <Typography color="textSecondary" style={{ width: "60%", marginBottom: "1rem" }}>
          I'm a senior undergraduate student at UCLA pursuing Computer Science degree.
          I specialize in building scalable & high-quality web applications and writing readable code.
        </Typography>
        <Link
          color="inherit"
          rel="noopener"
          underline="none"
          href={Resume}
          target="_blank"
        >
          <Button variant="outlined" color="primary">Resume</Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
