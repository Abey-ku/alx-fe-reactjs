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

test('adds a new todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
  
  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/existing todo/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('completed');  // Assuming a 'completed' class is added
  });  

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/existing todo/i);
    fireEvent.click(screen.getByText(/delete/i));  // Assuming there's a 'Delete' button for each todo
    expect(todoItem).not.toBeInTheDocument();
  });
  