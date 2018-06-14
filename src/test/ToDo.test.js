import React from 'react';
import ToDo from '../ToDo';
import renderer from 'react-test-renderer';
import ToDoItem from "../ToDoItem";

test('Should have toDo item provided in list', () => {
  let toDoItem1 = {task: "Wake up early", status: true, id: 20100};
  let state={toDoItems:[toDoItem1]};
  const component = renderer.create(
      <ToDo state={state}/>
  );
  expect(component.root.findByType(ToDoItem).props.state).toBe(toDoItem1);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should have all toDo items provided in list', () => {
  let toDoItem1 = {task: "Wake up early", status: true, id: 20100};
  let toDoItem2 = {task: "Sleep early", status: true, id: 20101};
  let state={toDoItems:[toDoItem1,toDoItem2]};
  const component = renderer.create(
      <ToDo state={state}/>
  );
  let tree = component.toJSON();
  //find other way to test this
  expect(component.root.find(element=>element.type==='ul'));
  expect(component.root.find(element=>element.type==='ul').props.children[0].props.children.props.state).toBe(toDoItem1);
  expect(component.root.find(element=>element.type==='ul').props.children[1].props.children.props.state).toBe(toDoItem2);
  expect(tree).toMatchSnapshot();
});