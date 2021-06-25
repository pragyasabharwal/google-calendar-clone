import Calendar from 'react-calendar'
import { useState } from 'react'
import moment from 'moment'

export const SideNav = () => {
  const [currentDate, setCurrentData] = useState(new Date())

  return (
    <div className="sideNav">
      <button className="button-primary padding-1 create">Create +</button>
      
      <span className="current-date">
        {moment(currentDate).format('MMMM Do YYYY')}
      </span>
    </div>
  )
}

// <div className="calendar">
//         <Calendar onChange={(e) => setCurrentData(e)} />
//       </div>