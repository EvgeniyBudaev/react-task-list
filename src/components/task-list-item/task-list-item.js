import React, { Component } from "react";

import "./task-list-item.css";

export default class TaskListItem extends Component {
  render() {
    const { label, id } = this.props;

    let classNames = "task-list-item";

    return (
      <span className={classNames}>
        <span className="task-list-before">{id}</span>
        <span className="task-list-item-label">{label}</span>
      </span>
    );
  }
}
