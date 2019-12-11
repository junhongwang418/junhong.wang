import React from "react";
import {createStyles, Theme, WithStyles, WithTheme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import APIManager, {WorkJSON} from "../api/APIManager";
import WorkCard from "./WorkCard";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withTheme from "@material-ui/core/styles/withTheme";
import {fade} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme: Theme) => createStyles({
  root: {
    minHeight: "72vh",
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },

  content: {
    width: "100%"
  },

  line: {

    height: 1,
    flexGrow: 1,
    marginRight: "28%",
    marginLeft: "1rem",
    backgroundColor: fade(theme.palette.text.primary, 0.28)
  },

  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem"
  },

  tab: {
    borderRight: `1px solid ${theme.palette.text.primary}`
  },

  body: {
    // position: "relative",
    // top: "50%",
    // transform: `translateY(-50%)`,
    display: "flex",
  }

});

interface Props extends WithStyles<typeof styles>{}

interface State {
  works: WorkJSON[];
  currentTab: number;
}

class Work extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      works: [],
      currentTab: 0
    };
  }

  componentDidMount(): void {
    APIManager.getAllWorks().then(response => {
      response.data.sort((a: WorkJSON, b: WorkJSON) => b.date.start.localeCompare(a.date.start));
      this.setState({ works: response.data });
    });
  }

  private handleChange = (e: React.ChangeEvent<{}>, value: number) => {
    this.setState({ currentTab: value });
  };

  render() {
    const { classes } = this.props;
    const { works, currentTab } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.title}>
            <Typography variant="h5">My Work Experience</Typography>
            <div className={classes.line} />
          </div>
          <div className={classes.body}>
            {works.length === 0 && <CircularProgress />}
            <Tabs
              orientation="vertical"
              onChange={this.handleChange}
              value={currentTab}
              indicatorColor="primary"
              textColor="primary"
            >
              {works.map(work => <Tab className={classes.tab} label={work.employer} href="" />)}
            </Tabs>
            {works.map((work, index) => <WorkCard work={work} value={currentTab} index={index} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Work);
