
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
      <div className="join">
        <input  type="text"   value={task}  onChange={e => setTask(e.target.value)} className="input w-full max-w-xs input-bordered join-item" placeholder="Add new todo" />
        <button type="submit" className="btn join-item">Create</button>
      </div>
    </form>
  );
};
