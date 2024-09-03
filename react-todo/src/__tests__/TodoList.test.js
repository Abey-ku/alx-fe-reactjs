import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders Todo List component correctly', () => {
  render(<TodoList />);
  const headerElement = screen.getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/learn react/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/learn react/i);
  fireEvent.click(screen.getByText(/delete/i));
  expect(todoItem).not.toBeInTheDocument();
});
