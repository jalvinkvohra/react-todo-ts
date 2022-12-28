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
        const createdDate = `${ date.getDate() }-${ date.getMonth() + 1 }-${ date.getFullYear() }`;

        dispatch(
            addTodo(
                {
                    todo: todo,
                    created: createdDate,
                    uuid: uuidv4()
                }
            )
        );

        setTodo( '' );
    }

    return (
        <div className="add-todo" >
            <div className="formControl">
                <label htmlFor="todoText">Todo : </label>
                <input id="todoText" onChange={ handleOnChange } value={ todo } />
            </div>
            <button onClick={ handleButtonClick }>Add Todo</button>
        </div >
    );
}

export default AddTodo;