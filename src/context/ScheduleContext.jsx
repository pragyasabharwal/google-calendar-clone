import React from 'react'
import { createContext, useContext, useReducer, useState } from 'react'
import { reducer } from '../reducer/reducer'

export const ScheduleContext = createContext()

const initialState = {
  schedules: [],
}

export const ScheduleProvider = ({ children }) => {
  const [view, setView] = useState()
  const [yCoord, setYCoord] = useState()
  const [date, setDate] = useState()
  const [modal, showModal] = useState(false)
  const [teachers, setTeachers] = useState()
  const [filter, setFilter] = useState()
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ScheduleContext.Provider
      value={{
        state,
        dispatch,
        view,
        setView,
        setYCoord,
        setDate,
        modal,
        showModal,
        yCoord,
        date,
        teachers, 
        setTeachers,
        filter,
        setFilter
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export const useSchedule = () => useContext(ScheduleContext)
