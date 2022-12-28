import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../config/store";
import TodoInterface from "./TodoInterface";
import { removeTodo } from "./todoSlice";

const ListTodo = () => {
    const todoList = useSelector((state: RootState) => state.todo.todoList)
    const dispatch = useDispatch();

    const handleRemoveTodo = (uuid: string) => {
        dispatch(removeTodo(uuid))
    }

    return (
        <div className="list-todos">
            <table >
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((todoItem: TodoInterface) => (
                            <tr key={todoItem.uuid}>
                                <td>{todoItem.todo}</td>
                                <td>{todoItem.created}</td>
                                <td><button onClick={() => handleRemoveTodo(todoItem.uuid)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo;