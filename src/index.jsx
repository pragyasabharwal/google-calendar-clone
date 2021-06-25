import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/calendar/Calendar'
import { ScheduleProvider } from './context/ScheduleContext'

ReactDOM.render(
  <React.StrictMode>
    <ScheduleProvider>
      <App />
    </ScheduleProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
