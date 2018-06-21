import React from 'react';
import ToDoItem from '../src/ToDoItem';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
  expect(result.root.findByProps({className: "editButton"}).props.children).toBe("edit");
});

test('Should have on click function of edit button(ToDoItem.showTaskToEdit)', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);

  expect(result.root.findByProps({className: "editButton"}).props.onClick).toBeTruthy()
});

test('Should have input box with task as default value and className as taskInput', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  expect(result.root.findByProps({className: "taskInput"}).props.value).toBe("Wake up early");
});

test('Should have input box have onChange function', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  expect(result.root.findByProps({className: "taskInput"}).props.onChange).toBeTruthy();
});

test('Should have save button', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);
  expect(result.root.findByProps({className: "saveButton"}).props.children).toBe("Save");
});

test('Should have on click function of edit button(ToDoItem.showTaskToEdit)', () => {
  let state = {task: "Wake up early",status:true,id:20100};
  let result = renderer.create(<ToDoItem state={state}/>);

  expect(result.root.findByProps({className: "editButton"}).props.onClick).toBeTruthy()
});

test('Should hide task header, edit button and show input box with task as default value and save button',()=>{
  let state = {task: "Wake up early",status:true,id:20100};
  let result = mount(<ToDoItem state={state}/>);
  result.find('.editButton').simulate('click');

  let editButton=result.find('.editButton').html();
  expect(editButton).toBe('<button class="editButton" style="display: none;">edit</button>');
  let taskHeader=result.find('.task').html();
  expect(taskHeader).toBe('<h4 class="task" style="display: none;"><del>Wake up early</del></h4>');

  let saveButton=result.find('.saveButton').html();
  expect(saveButton).toBe('<button class="saveButton" style="display: block;">Save</button>');
  let taskInput=result.find('.taskInput').html();
  expect(taskInput).toBe('<input name="task" class="taskInput" value="Wake up early" style="display: block;">');
});

test('Should not have task in tag "del" when task is not done and status is false', () => {

});