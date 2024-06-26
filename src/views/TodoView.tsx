import React, { useState, useEffect } from 'react';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { TodoItem, FilterType } from '../types';

export const TodoView: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<FilterType>('All');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const currentTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-6">Todo List</h1>
      <TodoInput addTodo={addTodo} />
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
