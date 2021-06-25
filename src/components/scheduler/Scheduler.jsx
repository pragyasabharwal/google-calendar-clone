import React, { useState } from 'react'
import { useSchedule } from '../../context/ScheduleContext'
import './Scheduler.css'
import { timeSetter } from '../../utils/timeSetter'
import axios from 'axios'

export const Scheduler = ({ item, dateVal, showModal, index }) => {
  const [title, setTitle] = useState()
  const [teacher, setTeacher] = useState()
  const [batch, setBatch] = useState()
  const { state, dispatch, date } = useSchedule()

  async function addToSchedules(item, dispatch) {
    const res = await axios.post(
      `https://brightveneratedparameters.pragyasabharwal.repl.co/`,

      {
        title: item.title,
        teacher: item.teacher,
        batch: item.batch,
        time: item.time,
        details: item.details,
      },
    )
    if (res.status === 200) {
      dispatch({
        type: 'SAVE_SCHEDULE',
        payload: {
          title: item.title,
          teacher: item.teacher,
          batch: item.batch,
          time: item.time,
          details: item.details,
        },
      })
    }
  }

  return (
    <div className="modal-1">
      <button className="button-secondary" onClick={() => showModal(false)}>
        X
      </button>
      <input
        placeholder="Add title"
        className="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <div className="details">
        <span className="date">
          {dateVal !== date ? dateVal.format('ddd, DD MMM') : date}{' '}
        </span>
        <span className="time">
          {item}:00 - {Number(item) + 1}:00
        </span>
      </div>
      <input
        placeholder="Teacher"
        className="add-details"
        onChange={(e) => setTeacher(e.target.value)}
      ></input>
      <input
        placeholder="Batch"
        className="add-details"
        onChange={(e) => setBatch(e.target.value)}
      ></input>
      <button
        className="button-primary padding-1"
        onClick={() => {
          showModal(false)
          addToSchedules(
            {
              title,
              teacher,
              batch,
              time: `${item} ${timeSetter(index)}`,
              details: dateVal !== date ? dateVal?.format('ddd, DD MMM') : date,
            },
            dispatch,
          )
        }}
      >
        Save
      </button>
    </div>
  )
}
