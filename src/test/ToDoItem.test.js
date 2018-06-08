import React from 'react';
import ToDoItem from '../ToDoItem';
import renderer from 'react-test-renderer';

test('Should have className as "toDoItem" and should contain task', () => {
  let state={task:"Wake up early", status:true};
  const component = renderer.create(
      <ToDoItem state={state}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should have checkbox unchecked when status given as false', () => {
  let state={task:"Wake up early", status:false};
  const component = renderer.create(
      <ToDoItem state={state}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Should have checkbox checked when status given as true', () => {
  let state={task:"Wake up early", status:true};
  const component = renderer.create(
      <ToDoItem state={state}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});