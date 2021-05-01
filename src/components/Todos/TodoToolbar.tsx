import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import UndoIcon from "@material-ui/icons/Undo";
import { getTodos } from "../../store/TodoStore";
import { AppState } from "../../store";
import { useStyles } from "./TodoStyle";

const TodoToolbar = () => {
  const classes = useStyles();

  /** redux dispatch hook */
  const dispatch = useDispatch();

  /** remaining list in store */
  const remainingTodos = useSelector((state: AppState) => state.todoState.remainingTodoList);

  /** done list in store */
  const doneList = useSelector((state: AppState) => state.todoState.doneList);

  const clear = () => {
    dispatch(getTodos());
  };

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h4" component="h4" align="center" className={classes.doneItems}>
            {`${doneList.length}`}
          </Typography>
          <Typography variant="h4" component="h4" align="center">
            {` item of ${doneList.length + remainingTodos.length} is done.`}
          </Typography>
          <Typography variant="h4" component="h4" align="center" className={classes.remainingItems}>
            {`${remainingTodos.length}`}
          </Typography>
          <Typography variant="h4" component="h4" align="center">
            {`left `}
          </Typography>
          <Button variant="contained" color="primary" className={classes.button} endIcon={<UndoIcon />} onClick={clear}>
            Clear Done Items
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default TodoToolbar;
