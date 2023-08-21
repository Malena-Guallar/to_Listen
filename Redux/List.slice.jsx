import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    markedTodos: [],
}

export const listSlice = createSlice({
    name: 'list', 
    initialState,
    reducers: {
        addTolist: (state, action) => {
            state.todos.push(action.payload)
        },
        markChecked: (state, action) => {
            const todoId = action.payload;
            const todoToMark = state.todos.find(todo => todo.id === todoId);
            if (todoToMark) {
                todoToMark.done = true;
                state.markedTodos.push(todoToMark);
            }
        },
        deleteFromList: (state, action) => {
            const todoId = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoId);
            state.markedTodos = state.markedTodos.filter(todo => todo.id !== todoId);
        },
    },
});

export const { addTolist, markChecked, deleteFromList} = listSlice.actions;

export default listSlice.reducer;
