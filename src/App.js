import './App.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'
import { Nav } from "./Nav"
import moment from "moment"
import { SideNav } from './SideNav'
import { CalendarBig } from "./CalendarBig/CalendarBig"

function App() {
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0')
  let yyyy = today.getFullYear()
  today = mm + '-' + dd + '-' + yyyy

  return (
    // <div className="App">
    // <Nav />
    // <div className='main-flex'>
    // <SideNav />
    // </div>
    // </div>
    <div className='app'>
    <CalendarBig />
    </div>

  )
}

export default App
