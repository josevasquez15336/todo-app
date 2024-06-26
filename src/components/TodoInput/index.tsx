import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (task: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim()) {
      addTodo(task.trim());
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        placeholder="Add new todo"
        value={task}
        onChange={e => setTask(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
    </form>
  );
};
