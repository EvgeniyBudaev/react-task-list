import React, { useState, useEffect } from 'react'

import * as classes from './InputQuery.module.scss'

const InputQuery = ({ update, isShow }) => {
	const [search, setSearch] = useState('')

	useEffect(() => {
		update(search)
	}, [search])

	return (
		<div className={classes.InputQuery}>{isShow ? <input type="text" name="query" onChange={e => setSearch(e.target.value)} value={search} placeholder="Фильтр" /> : null}</div>
	)
}

export default InputQuery
