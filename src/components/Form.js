import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = props => {
    const inputTextHandler = e => {
        props.setInputText(e.target.value);
    };   
    const submitTodoHandler = e => {
        e.preventDefault();
        if (props.inputText) {
            props.setTodos([
                ...props.todos, 
                { 
                    text: props.inputText,
                    completed: false,
                    id: uuidv4()
                }
            ]);
            props.setInputText('');
        };
    };

    return (
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} type="submit" className="todo-button">+</button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompeted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;