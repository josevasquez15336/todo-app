import React, { useState, } from 'react';

import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { TodoItem, FilterType } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoView: React.FC = () => {
  // Use useLocalStorage hook to manage todos
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('todos', []);
  const [filter, setFilter] = useState<FilterType>('All');

  const addTodo = (task: string) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
 
  const maxTaskCharactersLength = 180
  const minTaskCharactersLength = 5
  
  const rules = [ 
    (task: string) => task.length >= minTaskCharactersLength,  // Task must be at least 5 characters long
    (task: string) => !task.includes(' '),  // Task must not contain spaces
    (task: string) => task.length <= maxTaskCharactersLength // Task must be at max 180 characters long
  ];
  

  const currentTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-6">Todo List</h1>
      <TodoInput addTodo={addTodo}  rules={rules}/>
      <TodoList todos={currentTodos} toggleTodo={toggleTodo} />
      <div className="flex gap-2 mt-4">
        {(['All', 'Active', 'Completed'] as FilterType[]).map(f => (
          <button key={f} className={`btn ${filter === f ? 'btn-active' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};
