import React, { Component } from "react";

import AppHeaderTitle from "../app-header-title";
import AppHeaderSubtitle from "../app-header-subtitle";
import ItemAddForm from "../item-add-form";
import TaskList from "../task-list";
import SearchPanel from "../search-panel";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    taskData: [
      // this.createTaskItem("Решить первое домашнее задание по React"),
    ],
    textSearch: ""
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

  onSearchChange = textSearch => {
    this.setState({ textSearch });
  };

  search(items, textSearch) {
    if (textSearch.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(textSearch.toLowerCase()) > -1;
    });
  }

  render() {
    const { taskData, textSearch } = this.state;
    const visibleItems = this.search(taskData, textSearch);
    
    return (
      <div className="react-task-list">
        <AppHeaderTitle />
        <AppHeaderSubtitle />
        <SearchPanel onSearchChange={this.onSearchChange} taskData={taskData} />
        <ItemAddForm onItemAdded={this.addItem} />
        <TaskList todos={visibleItems} />
      </div>
    );
  }
}
