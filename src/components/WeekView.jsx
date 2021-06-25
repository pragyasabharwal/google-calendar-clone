import React, { useState } from 'react'
import { useSchedule } from '../context/ScheduleContext'
import { getAllDaysInTheWeek } from '../utils/getAllDaysInTheWeek'
import { getYCoords } from '../utils/getYCoords'

export const WeekView = ({ value }) => {
  const { setDate, setYCoord, showModal, modal, yCoord } = useSchedule()

  console.log(yCoord)

  return (
    <div
      className="day-slots"
      style={{
        marginTop: '5em',
        position: 'absolute',
        display: 'flex',
      }}
    >
      {getAllDaysInTheWeek(value).map((item, index) => (
        <div
          style={
            index === 0
              ? {
                  borderLeft: '1px solid rgba(128, 128, 128, 0.247)',
                  paddingLeft: '2.8em',
                  marginLeft: '3.5em',
                }
              : {}
          }
          className="week-days"
          onClick={(e) => {
            showModal(true)
            setYCoord(getYCoords(e.pageY))
            setDate(item.details)
          }}
        >
          {item.date}
        </div>
      ))}
    </div>
  )
}
