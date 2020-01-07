import React, { Component } from 'react'

import './task-list-item.css'

export default class TaskListItem extends Component {
	render() {
		const { label, id } = this.props

		return (
			<span className="task-list-item">
				<span className="task-list-before">{id}</span>
				<span className="task-list-item-label">{label}</span>
			</span>
		)
	}
}
