import React from 'react';

const Form = props => {
    const inputTextHandler = e => {
        console.log(e.target.value);
        props.setInputText(e.target.value);
    }

    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={e => e.preventDefault()} type="submit" className="todo-button">+</button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompeted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;