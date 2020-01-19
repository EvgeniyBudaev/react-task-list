import React, { Component } from "react";

import "./task-list-item.css";

export default class TaskListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.label !== nextProps.label) return true
    return false
  }

  render() {
    const { label, id, onDeleted } = this.props;

    let classNames = "task-list-item";

    return (
      <span className={classNames}>
        <span className="task-list-before">{id}</span>
        <span className="task-list-item-label">{label}</span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
