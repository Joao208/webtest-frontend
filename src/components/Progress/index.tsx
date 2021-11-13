import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

const styles = () => ({
  root: {
    height: 21,
    width: window?.innerWidth <= 800 ? "100%" : "75%",
  },
  bar: ({ progress = 20 }: { progress?: number }) => ({
    background: `linear-gradient(90deg, #1895FF ${progress}%, #fff 100%)`,
  }),
});

export const Progress = ({
  progress,
  classes,
}: {
  progress?: number;
  classes?: any;
}) => {
  return (
    <LinearProgress
      classes={{ ...classes }}
      variant="determinate"
      value={progress}
    />
  );
};

export default withStyles(styles)(Progress);
