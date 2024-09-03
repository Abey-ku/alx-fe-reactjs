// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders Todo List component correctly', () => {
  render(<TodoList />);
  
  const headerElement = screen.getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders initial todos', () => {
  render(<TodoList />);
  const todoElements = screen.getAllByRole('listitem');
  expect(todoElements).toHaveLength(2);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/add new todo/i);
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(inputElement, { target: { value: 'Learn Testing' } });
  fireEvent.click(addButton);

  const todoElements = screen.getAllByRole('listitem');
  expect(todoElements).toHaveLength(3);
  expect(screen.getByText(/learn testing/i)).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/learn react/i);

  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/delete/i)[0];

  fireEvent.click(deleteButton);

  const todoElements = screen.getAllByRole('listitem');
  expect(todoElements).toHaveLength(1);
});
