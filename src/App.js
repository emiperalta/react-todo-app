import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([])

	useEffect(() => {
		const getSessionTodos = () => {
			if (sessionStorage.getItem('todos') === null) 
				sessionStorage.setItem('todos', JSON.stringify([]));
			else {
				let sessionTodos = JSON.parse(sessionStorage.getItem('todos'));
				setTodos(sessionTodos);
			};
		};

		getSessionTodos();
	}, []);

	useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case 'completed':
					setFilteredTodos(todos.filter(todo => todo.completed === true));
					break;
				case 'uncompleted':
					setFilteredTodos(todos.filter(todo => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			};
		};		

		const saveSessionTodos = () => sessionStorage.setItem('todos', JSON.stringify(todos));

		filterHandler();
		saveSessionTodos();
	}, [todos, status]);	

	return (
		<div>
			<header>
				<h1 className="title">Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				status={status}
				setStatus={setStatus}
				setFilteredTodos={setFilteredTodos}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
};

export default App;
