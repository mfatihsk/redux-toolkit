import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoStore from './TodoStore'

const rootReducer = combineReducers({
    todoState : TodoStore
});
/**  */
export type AppState = ReturnType<typeof rootReducer>;
/** store definition */
export default function configureStore() {
    /** add thunk support */
    const middlewares = [thunkMiddleware];
    /** apply middleware */
    const middleWareEnhancer = applyMiddleware(...middlewares);
    /** store */
    return { store : createStore(rootReducer, composeWithDevTools(middleWareEnhancer) ) };
}

