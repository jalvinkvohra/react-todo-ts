import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import TodoInterface from "./TodoInterface";

export interface TodoState {
    todoList: TodoInterface[]
}

const initialState: TodoState = {
    todoList: []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoInterface>) => {
            state.todoList.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todoList = state.todoList.filter((todoItem) => todoItem.uuid !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer