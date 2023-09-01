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
                state.todos.splice()
            }
            // maintenant il faut enlever de la liste todos l'item qui est passé dans marked.
            // Pour le moment l'item qui a été marqué comme checked reste affiché dans la todolist. 
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
