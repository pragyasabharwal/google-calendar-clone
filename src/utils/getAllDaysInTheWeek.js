import moment from 'moment'

export const getAllDaysInTheWeek = (value) => {

    const weekStart = value.clone().startOf('week')

    const days = Array.from(Array(7))
      .map((day, index) => index)
      .map((day) =>
        moment(weekStart).add(day, 'days').set('minutes', 0).set('seconds', 0),
      )
      .map((momentObj) => (
        {
        details: momentObj.format('ddd, DD MMM'),
        date: momentObj.date(),
        dateStamp: +momentObj,
        weekDayName: momentObj.format('ddd'),
      }))

    return days
  }
