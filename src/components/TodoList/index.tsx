// src/components/TodoList.tsx

import React from 'react';
import { TodoItem } from '../../types/index';

interface TodoListProps {
  todos: TodoItem[];
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className={`flex items-center gap-2 ${todo.completed ? 'line-through' : ''}`}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="checkbox checkbox-primary" />
          <span>{todo.task}</span>
        </div>
      ))}
    </div>
  );
};
