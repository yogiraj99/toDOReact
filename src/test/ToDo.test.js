import React from 'react';
import ToDo from '../ToDo';
import renderer from 'react-test-renderer';

test('Should have toDo item provided in list', () => {
  let state={toDoItems:[{task:"Wake up early", status:true,id:20100}]};
  const component = renderer.create(
      <ToDo state={state}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should have all toDo items provided in list', () => {
  let state={toDoItems:[{task:"Wake up early", status:true,id:20100},{task:"Sleep early", status:true,id:20101}]};
  const component = renderer.create(
      <ToDo state={state}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});