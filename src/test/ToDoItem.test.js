import React from 'react';
import ToDoItem from '../ToDoItem';
import renderer from 'react-test-renderer';

test('Should have className as "task" and should contain task', () => {
  let state = {task: "Wake up early"};
  let result = renderer.create(<ToDoItem state={state}/>);

  expect(result.root.findByProps({className: "task"}));
  expect(result.root.findByType('h4').children[0]).toBe("Wake up early");
});


test('Should have task in tag "del" when task is done and status is true', () => {
  let state = {task: "Wake up early",status:true};
  let result = renderer.create(<ToDoItem state={state}/>);

  expect(result.root.find(element => element.type==='del'));
  expect(result.root.find(element => element.type==='del').props.children).toBe("Wake up early");
});


test('Should not have task in tag "del" when task is not done and status is false', () => {

});