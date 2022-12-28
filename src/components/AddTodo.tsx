import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from "./todoSlice";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [ todo, setTodo ] = useState( '' );

    const handleOnChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.target;
        setTodo( value );
    }

    const handleButtonClick = () => {
        const date = new Date();
        dispatch(
            addTodo(
                {
                    todo: todo,
                    created: `${ date.getDate() }-${ date.getMonth() + 1 }-${ date.getFullYear() }`,
                    uuid: uuidv4()
                }
            )
        );
        setTodo( '' );
    }

    return (
        <div className="add-todo">
            <input onChange={ handleOnChange } />
            <button onClick={ handleButtonClick }>Add Todo</button>
        </div>
    );
}

export default AddTodo;