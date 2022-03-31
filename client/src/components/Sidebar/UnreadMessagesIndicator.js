import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4092ff",
    padding: "0.2rem 0.6rem",
    borderRadius: "3rem",
    color: "#FFF",
  },
}));

const UnreadMessagesIndicator = ({ count }) => {
  const classes = useStyles();

  return <p className={classes.root}>{count}</p>;
};

export default UnreadMessagesIndicator;
