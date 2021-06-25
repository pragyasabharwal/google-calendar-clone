import React, { useState } from 'react'
import { useSchedule } from '../context/ScheduleContext'
import './FilterModal.css'

export const FilterModal = () => {
  const { state, setFilter } = useSchedule()
  const map = new Map()
  const teachers = state.schedules.map((item) => item.teacher.toLowerCase())
  for (let x in teachers) {
    map.set(teachers[x], true)
  }

  return (
    <div className="filter-modal">
      {[...map.keys()].map((item) => (
        <div className="input-row">
          <input
            value={item}
            onClick={(e) => setFilter(e.target.value)}
            type="checkbox"
          ></input>
          <span className="padding-8">{item}</span>
        </div>
      ))}
    </div>
  )
}
