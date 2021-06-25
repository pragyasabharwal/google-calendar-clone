import React, { useEffect, useState } from 'react'
import { useSchedule } from '../context/ScheduleContext'
import { Scheduler } from './scheduler/Scheduler'
import { timeSetter } from '../utils/timeSetter'
import { WeekView } from './WeekView'
import { arr } from '../utils/timeSlots'
import axios from "axios"

export const Main = ({ value }) => {
  const [id, setIndex] = useState()
  const {
    state,
    dispatch,
    view,
    date,
    yCoord,
    modal,
    showModal,
    filter
  } = useSchedule()

  useEffect(
    () =>
      (async function () {
        const res = await axios.get(
          `https://brightveneratedparameters.pragyasabharwal.repl.co/`,
        )
        console.log(res)
        if (res.status === 200) {
          dispatch({
            type: 'SET_SCHEDULE',
            payload: res.data.schedules,
          })
        }
      })(),
    [],
  )

  // filter && [...state.schedules].filter( item => item.teacher !== filter)

  // console.log(state.schedules)

  return (
    <div className="main">
      {view === 'Week' && <WeekView value={value} />}
      <div className="time-slots">
        {arr.map((item, index) => (
          <>
            <div className="time-format">
              {item}
              {timeSetter(index)}
            </div>
            <div
              className="column"
              onClick={() => {
                showModal((prev) => !prev)
                setIndex(index)
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {state.schedules.map(
                  (prev) =>
                    prev.time === `${item} ${timeSetter(index)}` &&
                    (value.format('ddd, DD MMM') === prev.details ||
                      date === prev.details) && (
                      <div
                        style={{
                          background: '#1DA1F2',
                          color: 'white',
                          fontWeight: 800,
                          width: '10em',
                          marginRight: '0.5em',
                          display: 'flex',
                          flexDirection: 'column',
                          marginTop: '0em',
                        }}
                      >
                        <span>{prev.title}</span>
                        <span>{`${prev.time.split(' ')[0]}:00 - ${
                          Number(prev.time.split(' ')[0]) + 1
                        }:00 ${timeSetter(index)}`}</span>
                        <span>{prev.teacher}</span>
                        <span>{prev.batch}</span>
                      </div>
                    ),
                )}
              </div>
            </div>
            {modal && index === id && (
              <Scheduler
                item={view === 'Week' ? yCoord?.split(' ')[0] : item}
                dateVal={view === 'Week' ? date : value}
                showModal={showModal}
                index={index}
              />
            )}
          </>
        ))}
      </div>
    </div>
  )
}

// <div className="mid">{`${item}:30`}</div>
