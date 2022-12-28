import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const Todo = () => {
    return (
        <div className="container">
            <h3 className='title'>Todo App</h3>
            <div className='todo-container'>
                <ListTodo />
                <AddTodo />
            </div>
        </div>
    )
}

export default Todo;