import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getTodos } from "./store/TodoStore";
import TodoList from "./components/Todos/TodoList";
import { Backdrop, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { AppState } from "./store";
import TodoToolbar from "./components/Todos/TodoToolbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }),
);

function App() {
  const classes = useStyles();

  const isLoading = useSelector((state: AppState) => state.todoState.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Grid container direction="column" justify="center">
      <Grid item justify="center">
        <TodoToolbar />
        <TodoList />
      </Grid>
      <Grid>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Grid>
    </Grid>
  );
}

export default App;
