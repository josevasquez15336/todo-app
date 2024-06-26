import React, { useState, useEffect } from 'react';
interface TodoInputProps {
  addTodo: (task: string) => void;
  rules: ((task: string) => boolean)[];
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo, rules }) => {
  const [task, setTask] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    // Validate the current task against all rules
    const isValid = rules.every(rule => rule(task));
    setValid(isValid);
  }, [task, rules]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim() && valid) {
      addTodo(task.trim());
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="join">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          className={`input w-full max-w-xs input-bordered join-item ${!valid ? 'input-error' : ''}`}
          placeholder="Add new todo"
        />
        <button onClick={handleSubmit} type="submit" className="btn join-item" disabled={!valid}>Create</button>
      </div>
    </form>
  );
};
