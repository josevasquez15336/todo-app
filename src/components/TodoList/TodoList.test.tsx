import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './'; // Adjust the import path as necessary

const mockToggleTodo = jest.fn();

const sampleTodos = [
  { id: 1, task: 'Learn React', completed: false },
  { id: 2, task: 'Write Tests', completed: true }
];

describe('TodoList Component', () => {

  test('renders todos correctly', () => {
    render(<TodoList todos={sampleTodos} toggleTodo={mockToggleTodo} />);
    const todoElement1 = screen.getByText(/learn react/i);
    const todoElement2 = screen.getByText(/write tests/i);
    // eslint-disable-next-line testing-library/no-node-access
    const parentDiv = todoElement2.closest('div'); 
    expect(todoElement1).toBeInTheDocument();
    expect(todoElement2).toBeInTheDocument();
    expect(parentDiv).toHaveClass('line-through');
  });

  test('calls toggleTodo when a todo checkbox is clicked', () => {
    render(<TodoList todos={sampleTodos} toggleTodo={mockToggleTodo} />);
    const checkbox = screen.getAllByRole('checkbox')[0]; // Get the first checkbox
    fireEvent.click(checkbox);
    
    expect(mockToggleTodo).toHaveBeenCalledWith(1); // Ensure the toggleTodo function is called with the correct ID
  });
});
