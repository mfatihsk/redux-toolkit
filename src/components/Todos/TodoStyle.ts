import { createStyles, makeStyles, Theme } from "@material-ui/core";

import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  todoItem :{
    '&:hover': {
        cursor: 'pointer'
      },
  },
  button: {
    margin: theme.spacing(1),
  },
  doneItems: {
    color: green[500],
    marginRight: theme.spacing(1),
  },
  remainingItems: {
    color: red[500],
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  fabClass: {
    backgroundColor: green['A700'],
  },
}),
);
