import React from 'react';

const Todo = props => {
    const deleteHandler = e => {
        e.preventDefault();
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
    }; 

    const completedHandler = e => {
        props.setTodos(props.todos.map((li) => {
            if (li.id === props.todo.id) {
                return {
                    ...li,
                    completed: !li.completed
                };
            };
            return li;
        }));
    };

    return (
        <div className="todo">
            <li onClick={completedHandler} className={`todo__item ${props.todo.completed ? "completed" : ""}`}>{props.text}</li>
            <button onClick={deleteHandler} className="todo__trash-btn">X</button>
        </div>
    );
};

export default Todo;