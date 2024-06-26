
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoInput } from './'; // Adjust the import path as necessary

describe('TodoInput Component', () => {
  const mockAddTodo = jest.fn();
  const rules = [
    (task: string) => task.length > 0,  // Task must not be empty
    (task: string) => !task.includes(' '),  // Task must not contain spaces
    (task: string) => task.length <= 10  // Task must not exceed 10 characters
  ];

  test('input shows error style when invalid input', async () => {
    render(<TodoInput addTodo={mockAddTodo} rules={rules} />);
    const input = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;

    // Test with invalid input
    await userEvent.type(input, 'invalid input');

    // Use waitFor to ensure all asynchronous updates are processed
    await waitFor(() => {
    expect(input).toHaveClass('input-error'); // Expect error class when input is invalid
    });
  });

  test('input does not show error style when valid', async () => {
    render(<TodoInput addTodo={mockAddTodo} rules={rules} />);
    const input = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;

    // Test with valid  input
    await userEvent.type(input, 'valid');

    // Use waitFor to ensure all asynchronous updates are processed
    await waitFor(() => {
        expect(input).not.toHaveClass('input-error'); // Expect no error class when input is valid
    });

  });

  test('does not allow submission with invalid input', async () => {
    render(<TodoInput addTodo={mockAddTodo} rules={rules} />);
    const input = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;

    await userEvent.type(input, 'invalid input');
    await userEvent.type(input, '{enter}'); 
    expect(mockAddTodo).not.toHaveBeenCalled(); // addTodo should not be called due to invalid input
  });

  test('submits valid input correctly', async () => {
    render(<TodoInput addTodo={mockAddTodo} rules={rules} />);
    const input = screen.getByPlaceholderText('Add new todo');
    const submitButton = screen.getByRole('button', { name: /create/i });

    await userEvent.type(input, 'valid');
    await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
    });
    await userEvent.click(submitButton);
    await waitFor(() => {
        console.log('addTodo called with:', mockAddTodo.mock.calls);
        expect(mockAddTodo).toHaveBeenCalledWith('valid');
    });
});

});
