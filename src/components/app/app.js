import React, { Component } from 'react'

import AppHeaderTitle from '../app-header-title'
import AppHeaderSubtitle from '../app-header-subtitle'
import ItemAddForm from '../item-add-form'
import TaskList from '../task-list'
import InputQuery from '../InputQuery/InputQuery'

import './app.css'

export default class App extends Component {
	maxId = 100

	state = {
		taskData: [
			{ label: 'Learn to learn', id: 1 },
			{ label: 'Learn React', id: 2 },
			{ label: 'Have a good time!', id: 3 },
			{ label: 'Meeto someone interesting', id: 4 }
		],
		filteredData: [],
		isFilter: false
	}

	createTaskItem(label) {
		return {
			label,
			id: this.maxId++
		}
	}

	addItem = text => {
		const newItem = this.createTaskItem(text)

		this.setState(({ taskData }) => {
			const newArr = [...taskData, newItem]

			return {
				taskData: newArr
			}
		})
	}

	handleQueryUpdate = query => {
		if (query.length) {
			let q = query.match(/[a-zа-яё0-9 _]/gi)
			if (q) q = q.join('')
			else q = ''
			const regexp = new RegExp(q, 'i')
			this.setState(prev => ({
				filteredData: prev.taskData.filter(el => regexp.test(el.label)),
				isFilter: true
			}))
		} else {
			this.setState({ filteredData: [], isFilter: false })
		}
	}

	render() {
		const { taskData, isFilter, filteredData } = this.state

		return (
			<div className="react-task-list">
				<AppHeaderTitle />
				<AppHeaderSubtitle />
				<InputQuery update={this.handleQueryUpdate} isShow={taskData.length > 2} />
				<ItemAddForm onItemAdded={this.addItem} />
				<TaskList todos={isFilter ? filteredData : taskData} />
			</div>
		)
	}
}
