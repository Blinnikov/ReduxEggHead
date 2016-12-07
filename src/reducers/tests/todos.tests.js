import expect from 'expect';
import deepFreeze from 'deep-freeze';

import { todos, toggleTodo } from '../todos'

const testToggleSingleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Write an app',
      completed: false
    }
  ];
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: true
    },
    {
      id: 1,
      text: 'Write an app',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 0
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testToggleSingleTodo();
testAddTodo();
testToggleTodo();
console.log('All tests passed');
