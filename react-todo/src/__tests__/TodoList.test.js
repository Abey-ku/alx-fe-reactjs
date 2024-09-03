// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for better assertions
import TodoList from '../components/TodoList'; // Adjust the path if needed

test('renders Todo List component correctly', () => {
  render(<TodoList />);
  const headerElement = screen.getByText(/todo list/i); // Adjust based on your actual component content
  expect(headerElement).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i); // Adjust placeholder text
  const addButton = screen.getByText(/add/i); // Adjust button text

  // Simulate user input and button click
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Check if the new todo is in the document
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/existing todo/i); // Adjust based on your initial state or add steps to create one
  const deleteButton = screen.getByText(/delete/i); // Adjust button text

  fireEvent.click(deleteButton); // Click the delete button

  // Ensure the todo item is no longer in the document
  expect(todoElement).not.toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/existing todo/i); // Adjust based on your initial state or add steps to create one

  fireEvent.click(todoElement); // Simulate clicking the todo item

  // Ensure the todo item now has the 'completed' class or appropriate attribute indicating it is completed
  expect(todoElement).toHaveClass('completed'); // Adjust class name based on implementation
});
