import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { fetchTodo, ITODO } from './TodoApi';


export interface TodoStore {
    remainingTodoList : Array<ITODO>,
    doneList : Array<ITODO>,
    isLoading : boolean
}
/** initial state */
const initialState: TodoStore = {
    remainingTodoList : [],
    doneList : [],
    isLoading : false
};
export const slice = createSlice({
    name: 'todoStore',
    initialState,
    reducers: {
        /** sets loading state */
        setLoadingState: (state, action: PayloadAction<boolean>) => {
            return {...state, isLoading : action.payload};
        },
        /** resets todo list */
        setTodoList: (state, action: PayloadAction<Array<ITODO>>) => {
            return {...state ,  remainingTodoList : action.payload ,doneList : []};
        },
        /**
         * moves checked todo item from remaining list to done list
         * @param state 
         * @param action 
         * @returns 
         */
        setChecked: (state :TodoStore , action: PayloadAction<ITODO>) => {
            let temp : Array<ITODO>= [];
            state.doneList.forEach(e => temp.push(e));
            temp.unshift(action.payload );
            const remaininigs = state.remainingTodoList.filter(e => e.id !== action.payload.id);
            return {...state ,  remainingTodoList : remaininigs, doneList : temp};
        },
    },
});

/**
 * fetches todo list asynchronously
 * @returns 
 */
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

/** checks todo item  */
export const checkTodo = (todo : ITODO) => async (dispatch: Dispatch) => {
    try {
        dispatch(slice.actions.setLoadingState(true));
        dispatch(slice.actions.setChecked(todo));
    } catch (err) {
        console.error("debugger");
    } finally {
        dispatch(slice.actions.setLoadingState(false));
    }
};


//export reducers as default
export default slice.reducer;