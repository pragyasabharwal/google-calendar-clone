import React, { useState } from 'react'
import { useSchedule } from '../../context/ScheduleContext'
import './Nav.css'
import moment from 'moment'

export const Nav = ({ value }) => {
  const [viewControllers, showViewControllers] = useState(false)
  const views = ['Day', 'Week', 'Month']
  const { setView } = useSchedule()

  return (
    <div className="wrapper">
      <div
        className="nav"
        style={{
          fontSize: '2em',
          fontWeight: '900',
          position: 'fixed',
          background: 'white',
          width: '100%',
          top: 0,
        }}
      >
        <span className="main-title">Calendar</span>
        <div className="current-details">
          <div className="current-day">{value.format('ddd').toString()}</div>
          <div className="current-date">{value.format('D MMM').toString()}</div>
        </div>

        <button
          className="button-primary button-day"
          onClick={() => showViewControllers((prev) => !prev)}
        >
          Day
        </button>
      </div>
      {viewControllers && (
        <div className="view-modal">
          {views.map((item) => (
            <div
              className="li-item"
              onClick={() => {
                showViewControllers(false)
                setView(item)
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// <button className="button-primary today-btn"
// >Today</button>
