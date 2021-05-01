# Getting Started to Redux Toolkit

Redux Toolkit sample usage [Online Sample App](https://redux-toolkit-nks6325nz-mfatihsk.vercel.app/)

## Objective

Redux always criticized being too much boilerplate. Toolkit eliminates action definition and introduces more plain implementation  

## Store Definition 
Redux Toolkit comes with Thunk support and feel free to add additional middlewares such as redux-persist.
```
/** store definition */
export default function configureStore() {
    /** add thunk support */
    const middlewares = [thunkMiddleware];
    /** apply middleware */
    const middleWareEnhancer = applyMiddleware(...middlewares);
    /** store */
    return { store : createStore(rootReducer, composeWithDevTools(middleWareEnhancer) ) };
}
```
Encapsulating the application with redux provider is the same, just add `<Provider store={store}>`   


## Reducer definition
There is no need to define for action. so, just add reducer methods into reducer segment
```
export const slice = createSlice({
    name: 'todoStore',
    initialState,
    reducers: {
        /** sets loading state */
        setLoadingState: (state, action: PayloadAction<boolean>) => {
            return {...state, isLoading : action.payload};
        },
        .
```
Reducer methods can be used directly ```slice.actions.setLoadingState(true)``` . Redux action definition is added behind the scene by Toolkit.\
There will be need to add asynchronous behavere to usage and Toolkit comes with Thunk dependency.\
Sample usage
 ```
 export const getTodos = () => async (dispatch: Dispatch) => {
    try {
        dispatch(slice.actions.setLoadingState(true));
        const result = await fetchTodo() as unknown as Array<ITODO> 
        dispatch(slice.actions.setTodoList(result));
    } catch (err) {
        console.error("Unable fetch data");
    } finally {
        dispatch(slice.actions.setLoadingState(false));
    }
};
 ```

## Using store
In order access store `useSelector` hook is be used which offers much plain code compared to `mapStateToProps`
 ```
  /** remaining list in store */
  const remainingTodos = useSelector((state: AppState) => state.todoState.remainingTodoList);
 
  /** done list in store */
  const doneList = useSelector((state: AppState) => state.todoState.doneList);
 ```
 
## Learn More

You can learn more in the [Redux Toolkit documentation](https://redux-toolkit.js.org/introduction/getting-started).

To learn Redux Toolkit, check out the [Redux Toolkit documentation](https://redux-toolkit.js.org/).
