import React from 'react';
import ToDo from '../src/ToDo';
import renderer from 'react-test-renderer';
import ToDoItem from "../src/ToDoItem";
import {mount} from "enzyme";


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Should have toDo item provided in list', () => {
  let toDoItem1 = {task: "Wake up early", status: true, id: 20100};
  let state={toDoItems:[toDoItem1]};
  const component = renderer.create(
      <ToDo state={state}/>
  );
  expect(component.root.findByType(ToDoItem).props.state).toBe(toDoItem1);
});

test('Should have all toDo items provided in list', () => {
  let toDoItem1 = {task: "Wake up early", status: true, id: 20100};
  let toDoItem2 = {task: "Sleep early", status: true, id: 20101};
  let state={toDoItems:[toDoItem1,toDoItem2]};
  const component = renderer.create(
      <ToDo state={state}/>
  );
  //find other way to test this
  expect(component.root.find(element=>element.type==='ul'));
  expect(component.root.find(element=>element.type==='ul').props.children[0].props.children.props.state).toBe(toDoItem1);
  expect(component.root.find(element=>element.type==='ul').props.children[1].props.children.props.state).toBe(toDoItem2);
});

test('Should have status as true when all toDo items in provided list are done({status:true})', () => {
  let toDoItem1 = {task: "Wake up early", status: true, id: 20100};
  let toDoItem2 = {task: "Sleep early", status: true, id: 20101};
  let state={toDoItems:[toDoItem1,toDoItem2]};
  const component = mount(
      <ToDo state={state}/>
  );
  expect(component.state()).toEqual({toDoItems:[toDoItem1,toDoItem2]});
  console.log(component.state());
});