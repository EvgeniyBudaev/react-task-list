import React, { Component } from "react";

import AppHeaderTitle from "../app-header-title";
import AppHeaderSubtitle from "../app-header-subtitle";
import ItemAddForm from "../item-add-form";
import TaskList from "../task-list";

import "./app.css";

export default class App extends Component {

  maxId = 100;

  state = {
    taskData: [
      this.createTaskItem("Решенить первое домашнее задание по React"),
    ]
  };

  createTaskItem(label) {
    return {
      label,
      id: this.maxId++
    };
  }

  addItem = text => {
    const newItem = this.createTaskItem(text);

    this.setState(({ taskData }) => {
      const newArr = [...taskData, newItem];

      return {
        taskData: newArr
      };
    });
  };

  render() {

    const { taskData } = this.state;
    
    return (
      <div className="react-task-list">
        <AppHeaderTitle />
        <AppHeaderSubtitle />
        <ItemAddForm onItemAdded={this.addItem} />
        <TaskList todos={taskData}/>
      </div>
    );
  }
};