import { Fragment } from "react";
import { Done } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { List, Grid, ListItem, ListItemText, ListItemIcon, Fab, Divider, Paper, Typography } from "@material-ui/core";
import AlbumIcon from "@material-ui/icons/Album";
import { checkTodo } from "../../store/TodoStore";
import { AppState } from "../../store";
import { useStyles } from "./TodoStyle";
import { ITODO } from "../../store/TodoApi";

const TodoList = () => {
  const classes = useStyles();

  /** redux dispatch hook */
  const dispatch = useDispatch();
  /** remaining list in store */
  const remainingTodos = useSelector((state: AppState) => state.todoState.remainingTodoList);
  /** done list in store */
  const doneList = useSelector((state: AppState) => state.todoState.doneList);

  const setToDone = (item: ITODO) => () => {
    dispatch(checkTodo(item));
  };

  return (
    <Grid container direction="row" justify="space-around" alignItems="flex-start">
      <Grid item xs={5}>
        <Paper elevation={5}>
          <Typography variant="h4" component="h4" align="center">
            Todo List
          </Typography>
          <Divider />
          <List>
            {remainingTodos.map((e, index) => (
              <Fragment key={index}>
                <ListItem component="div" onClick={setToDone(e)} className={classes.todoItem}>
                  <ListItemIcon>
                    <Fab size="small" color="primary" aria-label="add">
                      <AlbumIcon />
                    </Fab>
                  </ListItemIcon>
                  <ListItemText primary={`${e.id} - ${e.title}`} />
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={5}>
          <Typography variant="h4" component="h4" align="center">
            Done List
          </Typography>
          <Divider />
          <List>
            {doneList.map((e) => (
              <ListItem key={`${e.id}`}>
                <ListItemIcon>
                  <Fab size="small" className={classes.fabClass} aria-label="add">
                    <Done />
                  </Fab>
                </ListItemIcon>
                <ListItemText primary={`${e.id} - ${e.title}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TodoList;
