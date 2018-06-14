import React from 'react';
import ToDoItem from '../ToDoItem';
import renderer from 'react-test-renderer';

test('Should have className as "task" and should contain task', () => {
  let state = {task: "Wake up early",id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);

  expect(result.root.findByProps({className: "task"}));
  expect(result.root.findByType('h4').children[0]).toBe("Wake up early");
});


test('Should have task in tag "del" when task is done and status is true', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);

  expect(result.root.find(element => element.type==='del'));
  expect(result.root.find(element => element.type==='del').props.children).toBe("Wake up early");
});

test('Should have given id', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  expect(result.root.findByProps({id: "toDoItem20100"}));
});

test('Should have edit button', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  let onClickFn=result.toTree().instance.showTaskToEdit;
  expect(result.root.findByProps({className: "editButton"}).props.children).toBe("edit");
});

test('Should have on click function of edit button(ToDoItem.showTaskToEdit)', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  let onClickFn=result.toTree().instance.showTaskToEdit;

  expect(result.root.findByProps({className: "editButton"}).props.onClick).toBe(onClickFn)
});

test('Should have input box with task as default value and className as taskInput', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  expect(result.root.findByProps({className: "taskInput"}).props.value).toBe("Wake up early");
});

test('Should have input box have onChange function', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  let onClickFn=result.toTree().instance.editTask;
  expect(result.root.findByProps({className: "taskInput"}).props.onChange).toBe(onClickFn);
});

test('Should not have task in tag "del" when task is not done and status is false', () => {

});