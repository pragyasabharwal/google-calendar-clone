import './CalendarBig.css'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { build } from './build'

export const CalendarBig = () => {
  const [value, setValue] = useState(moment())

  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    setCalendar(build(value))
  }, [value]) 



  return (
    <div className="calendar">
      {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div onClick={() => setValue(day)} className="day">
              <div className={value.isSame(day, 'day') ? 'current' : 'hover'}>
                {day.format('D').toString()}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
