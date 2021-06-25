import React, { useState } from 'react'
import moment from 'moment'
import Calendar from '..'
import './Calendar.css'
import { Main } from '../Main'
import { Nav } from '../Nav/Nav'
import { FilterModal } from '../FilterModal'

export default function () {
  const [selectedDate, setSelectedDate] = useState(moment())
  const [filterModal, setFilterModal] = useState(false)

  return (
    <div className="flex">
      <div className="side-navbar">
        <Calendar value={selectedDate} onChange={setSelectedDate} />
        <button className="filter" onClick={()=>setFilterModal((prev) => !prev)}>Filter</button>
        {
          filterModal && <FilterModal />
        }
      </div>
      <Nav value={selectedDate} />
      <Main value={selectedDate} />
    </div>
  )
}
